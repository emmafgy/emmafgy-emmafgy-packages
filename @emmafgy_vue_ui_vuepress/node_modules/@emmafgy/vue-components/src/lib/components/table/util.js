export function configRowspanColumns(columnsConfig = []) {

  // 1-columns []
  // 2-fixedLeftColumns []
  // 3-fixedRightColumns []

  // 4-headerconfig [[{colspan:1,rowspan:1}],[]]


  // 1.找到 rowspan 最大值
  const findMaxLevel2 = (col, level = 0) => {
    if (col.hasOwnProperty("children")) {
      let maxLevel = 0;
      col.children.forEach(c => {
        let nextLevel = level + 1;
        let cLevel = findMaxLevel2(c, nextLevel);
        if (cLevel > maxLevel) {
          maxLevel = cLevel;
        }
      });
      return maxLevel;
    } else {
      return level;
    }
  }

  const findMaxLevel1 = (columns) => {
    let maxLevel = 0;
    columns.forEach(col => {
      let level = findMaxLevel2(col);
      if (level > maxLevel) {
        maxLevel = level
      }
    });
    return maxLevel;
  }
  let maxLevel = findMaxLevel1(columnsConfig);




  // 2.生成columns headers
  let fixedLeftColumns = [];
  let fixedRightColumns = [];
  let notFixedColumns = [];
  let fixedLeftHeaders = [];
  let fixedRightHeaders = [];
  let notFixedHeaders = [];
  
  const getMaxLevelChildrenCount = (children) => {
    let count = 0;
    children.forEach(c => {
      if (c.hasOwnProperty("children")) {
        count += getMaxLevelChildrenCount(c.children);
      } else {
        count += 1;
      }
    })
    return count;
  }

  const handleColumn = (col, maxLevel, level = 0, fixed = false) => {

    if (level == 0 && col.fixed) {
      fixed = col.fixed;
    }

    // add headers
    if (!Array.isArray(notFixedHeaders[level])) {
      notFixedHeaders[level] = [];
      fixedRightHeaders[level] = [];
      fixedLeftHeaders[level] = [];
    }

    if (col.hasOwnProperty("children")) {

      // set colspan row span
      col.rowspan = 1;
      col.colspan = getMaxLevelChildrenCount(col.children);

      // add header
      let headerObj = {
        title: col.title,
        rowspan: col.rowspan,
        colspan: col.colspan
      };

      if (fixed == "left") {
        fixedLeftHeaders[level].push(headerObj);
      } else if (fixed == "right") {
        fixedRightHeaders[level].push(headerObj);
      } else {
        notFixedHeaders[level].push(headerObj);
      }

      // 递归
      col.children.forEach(c => {
        handleColumn(c, maxLevel, level + 1, fixed);
      });

    } else {

      // set colspan row span
      col.rowspan = maxLevel - level + 1;
      col.colspan = 1;

      // add columns
      if (fixed == "left") {
        fixedLeftColumns.push(col);
      } else if (fixed == "right") {
        fixedRightColumns.push(col)
      } else {
        notFixedColumns.push(col);
      }

      // add header
      // headers[level].push(col);
      if (fixed == "left") {
        fixedLeftHeaders[level].push(col);
      } else if (fixed == "right") {
        fixedRightHeaders[level].push(col);
      } else {
        notFixedHeaders[level].push(col);
      }

    }


  }

  const handleColumnMain = (columns) => {
    columns.forEach(col => {
      handleColumn(col, maxLevel);
    })
  }

  handleColumnMain(columnsConfig);


  const mergeColumns = () => {
    return [...fixedLeftColumns, ...notFixedColumns, ...fixedRightColumns];
  }

  const mergeHeaders = () => {
    return notFixedHeaders.map((item, i) => [...fixedLeftHeaders[i], ...item, ...fixedRightHeaders[i]])
  }

  return {
    fixedLeftColumns,
    fixedRightColumns,
    orderColumns: mergeColumns(),
    fixedLeftHeaders,
    fixedRightHeaders,
    orderHeaders: mergeHeaders(),
    maxLevel
  };

}
