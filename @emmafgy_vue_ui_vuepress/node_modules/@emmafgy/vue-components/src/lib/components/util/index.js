export function genColumns(columnsConfig) {

  // test
  if (!columnsConfig) {
    columnsConfig = {
      key: "aaa|bbb|ccc|ddd|fff",
      title: "工号|薪资1|薪资2|薪资3|总工资",
      fixed: "left|--|--|--|right",
      width: "150|200|-|150|-"
    }
  }

  if (!columnsConfig) {
    throw new Error("columnsConfig 不能为空");
  }

  let cols = columnsConfig.key;

  if (!cols) {
    throw new Error("columnsConfig.key 不能为空");
  }

  // 分割为数组
  let columnsConfigArrMap = {};
  for (let configkey in columnsConfig) {
    let configValue = columnsConfig[configkey];
    if (configValue) {
      let configArr = configValue.split("|");
      columnsConfigArrMap[configkey] = configArr;
    }
  }

  let colsArrLen = columnsConfigArrMap["key"].length;

  let res = [];
  for (let i = 0; i < colsArrLen; i++) {
    let item = {};
    for (let configkey in columnsConfigArrMap) {
      let configArr = columnsConfigArrMap[configkey];
      let val = configArr[i].trim().replace(/-/g, "");
      if (val) {
        item[configkey] = val;

        if (configkey == "key") {
          item["dataIndex"] = val || "";
        }

      }

    }
    res.push(item);
  }

  return res;

}
