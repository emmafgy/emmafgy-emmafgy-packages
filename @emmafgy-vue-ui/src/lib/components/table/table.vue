<template>
  <div id="ef-table-conainer" :style="tableContainerStyle"
    :class="{'ef-table-no-data':dataSource.length < 1,'ef-table-bordered':bordered}">

    <!-- table-fixed-left -->

    <div v-if="dataSource.length > 0 && fixedLeftColumns.length > 0" class="ef-table-left"
      :class="{'scroll-box-shadow-left': !ifScrollMaxLeft,'ef-spin-blur':loading}" ref="ef-table-left-container">

      <div v-if="fixedHeader && showHeader" class="ef-table-body-header" ref="ef-table-left-header">
        <table :style="tableStyle">
          <ef-colgroup :columns="fixedLeftColumns"></ef-colgroup>
          <ef-thead :headerList="fixedLeftHeaders"></ef-thead>
        </table>
      </div>

      <div @scroll="onLeftScroll($event)" @mouseenter="mouseEnterArea='left'" class="ef-table-body-box overflow-auto-y"
        ref="ef-table-left-body">
        <table :style="tableStyle">
          <ef-colgroup :columns="fixedLeftColumns"></ef-colgroup>
          <ef-thead v-if="showHeader && !fixedHeader" :headerList="fixedLeftHeaders"></ef-thead>
          <ef-tbody :columns="fixedLeftColumns"></ef-tbody>
        </table>
      </div>
    </div>

    <!-- table-fixed-left -->

    <!-- table-fixed-right -->

    <div v-if="dataSource.length > 0 && fixedRightColumns.length > 0" class="ef-table-right"
      :class="{'scroll-box-shadow-right': !ifScrollMaxRight,'ef-spin-blur':loading}" ref="ef-table-right-container">

      <div v-if="fixedHeader && showHeader" class="ef-table-body-header" ref="ef-table-right-header">
        <table :style="tableStyle">
          <ef-colgroup :columns="fixedRightColumns"></ef-colgroup>
          <ef-thead :headerList="fixedRightHeaders"></ef-thead>
        </table>
      </div>

      <div @scroll="onRightScroll($event)" @mouseenter="mouseEnterArea='right'"
        class="ef-table-body-box overflow-auto-y" ref="ef-table-right-body">
        <table :style="tableStyle">
          <ef-colgroup :columns="fixedRightColumns"></ef-colgroup>
          <ef-thead v-if="showHeader && !fixedHeader" :headerList="fixedRightHeaders"></ef-thead>
          <ef-tbody :columns="fixedRightColumns"></ef-tbody>
        </table>
      </div>
    </div>

    <!-- table-fixed-right -->

    <!-- table-main -->
    <div class="ef-table-body" ref="ef-table-container">

      <div class="ef-table-body-header-outer" :class="{'ef-spin-blur':loading}">
        <div v-if="fixedHeader && showHeader" class="ef-table-body-header overflow-hidden" ref="ef-table-body-header">
          <table :style="tableStyle">
            <ef-colgroup :columns="orderColumns"></ef-colgroup>
            <ef-thead :headerList="orderHeaders"></ef-thead>
          </table>
        </div>
      </div>

      <div :class="{'ef-spin-blur':loading}" @mouseenter="mouseEnterArea='body'" @scroll="onBodyScroll($event)"
        ref="ef-table-body" class="ef-table-body-box full-height-width overflow-auto-overlay pos-relative">
        <table :style="tableStyle">
          <ef-colgroup :columns="orderColumns"></ef-colgroup>
          <ef-thead v-if="showHeader && !fixedHeader" :headerList="orderHeaders"></ef-thead>
          <ef-tbody :columns="orderColumns"></ef-tbody>
        </table>
      </div>

      <!-- loading -->
      <div class="ef-spin-container flex-center" v-show="loading" ref="ef-table-body-loading">
        <slot v-if="$scopedSlots.loading" name="loading"></slot>
        <div v-else class="flex-column-center">
          <ef-loading></ef-loading>
          <span class="marin-top loading-text">拼命加载中</span>
        </div>
      </div>
      <!-- loading -->

      <!-- nodata -->
      <div class="ef-spin-container flex-center" v-show="ifMounted && dataSource.length<1" ref="ef-table-body-nodata">
        <slot v-if="$scopedSlots.nodata" name="nodata"></slot>
        <span v-else>暂无数据</span>
      </div>
      <!-- nodata -->

    </div>

    <!-- table-main -->

  </div>
</template>

<script>
  import EfLoading from "../loading/loading.vue";
  import EfColgroup from "./colgroup.vue";
  import EfTbody from "./tbody.vue";
  import EfThead from "./thead.vue";

  import {
    configRowspanColumns
  } from "./util.js";

  export default {
    name: "ef-table",
    // provide() {
    //   return {
    //     columns: this.columns
    //   }
    // },
    components: {
      EfLoading,
      EfColgroup,
      EfTbody,
      EfThead
    },
    props: {
      stripe: {
        type: Boolean,
        default: false
      },
      selectedConfig: {
        type: Object,
        default: null
      },
      // 是否固定头部
      fixedHeader: {
        type: Boolean,
        default: false
      },
      height: {
        type: String,
        default: ""
      },
      width: {
        type: String,
        default: ""
      },
      loading: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: ""
      },
      bordered: {
        type: Boolean,
        default: false
      },
      tableLayout: {
        type: String,
        default: 'auto'
      },
      headRowClassName: {
        type: String,
        default: ''
      },
      rowClassName: {
        type: String | Function,
        default: ''
      },
      showHeader: {
        type: Boolean,
        default: true
      },
      columns: {
        type: Array,
        default: () => []
      },
      dataSource: {
        type: Array,
        default: () => []
      },
      // v-for td key
      rowKey: {
        type: String,
        default: ""
      },
      // 是否打开表头列合并 (废弃)
      openRowspan: {
        type: Boolean,
        default: false
      },
      // 打开表头列合并后（openRowspan =true）,使用rowspanConfig渲染表头，不在使用columns， , openRowspan =true，该属性必传 (废弃)
      rowspanConfig: {
        type: Array,
        default: () => []
      }
    },
    computed: {
      // 多选的所有值
      // selectedAllValue() {
      //   let res = [];
      //   if (this.selectedConfig) {
      //     this.dataSource.forEach(item => {
      //       res.push(item[this.selectedConfig.bindDataIndex]);
      //     });
      //   }
      //   return res;
      // },
      // 多选情况
      selectedType() {
        if (this.selectedValue.length == this.dataSource.length) {
          return "all";
        } else if (this.selectedValue.length == 0) {
          return "none";
        } else if (this.selectedValue.length < this.dataSource.length) {
          return "half";
        }
      },
      tableContainerStyle() {
        let style = {
          width: "100%",
          height: "auto"
        };
        if (this.height) {
          style.height = /^[0-9]+$/.test(this.height) ? (this.height + "px") : this.height;
          //style.height = this.height + "px";
        }
        if (this.width) {
          style.width = /^[0-9]+$/.test(this.width) ? (this.width + "px") : this.width;
          // style.width = this.width + "px";
        }
        return style;
      },
      tableStyle() {
        let style = {};
        if (this.tableLayout) {
          style.tableLayout = this.tableLayout;
        }
        if (this.tableLayoutLock) {
          style.tableLayout = this.tableLayoutLock;
        }
        return style;
      },
      tdStyle() {
        let style = {};
        // border
        // if (this.bordered === true) {
        //   style.borderRight = "1px solid #e8e8e8";
        // }
        // size
        if (this.size == "small") {
          style.padding = "8px";
        } else if (this.size == "middle") {
          style.padding = "12px 8px";
        }
        return style;
      },
      thStyle() {}

    },
    watch: {
      'selectedConfig.selectedValue'(newVal, oldVal) {
        this.selectedValue = this.selectedConfig.selectedValue;
      },
      selectedValue() {
        this.selectedConfig.selectedValue = this.selectedValue;
      },
      dataSource(newVal, oldVal) {
        this.ifMounted = false; // 避免nodata先渲染
        this.setupTableAttr();
        setTimeout(() => {
          this.setSelectedAllValue();
        }, 0);
      }
    },
    data() {
      return {
        tableLayoutLock: false,

        fixedLeftColumns: [],
        fixedRightColumns: [],
        notFixedColumns: [],
        orderColumns: [],
        fixedLeftHeaders: [],
        fixedRightHeaders: [],
        orderHeaders: [],

        ifScrollMaxLeft: true, // 滚动条是否在最左边
        ifScrollMaxRight: false, // 滚动条是否在最右边

        mouseEnterArea: "",

        tbodyTrHeight: "auto",
        theadTrHeight: "auto",

        // 多选
        selectedValue: ((this.selectedConfig && this.selectedConfig.selectedValue) || []),

        selectedAllValue: [],

        ifMounted: false,

      };
    },
    methods: {
      // === event  ===


      onSortChange(col) {
        if (!col.hasOwnProperty("sort")) return;
        let sort = col.sort;
        let sortArry = ["asc", "desc", "unset"]; // 切换顺序
        let index = sortArry.indexOf(sort);
        let nextIndex = (index + 1) > sortArry.length - 1 ? 0 : index + 1;
        this.cancelAllSortColumns(); // 选取消所有
        col.sort = sortArry[nextIndex];
        this.$emit("sortChange", col.sort, col);
      },

      // 取消所有排序
      cancelAllSortColumns() {
        if (this.fixedLeftHeaders[0] && Array.isArray(this.fixedLeftHeaders[0])) {
          this.fixedLeftHeaders[0].forEach(item => {
            if (item.hasOwnProperty("sort")) {
              item.sort = "unset";
            }
          })
        }
        if (this.fixedRightHeaders[0] && Array.isArray(this.fixedRightHeaders[0])) {
          this.fixedRightHeaders[0].forEach(item => {
            if (item.hasOwnProperty("sort")) {
              item.sort = "unset";
            }
          })
        }
        if (this.orderHeaders[0] && Array.isArray(this.orderHeaders[0])) {
          this.orderHeaders[0].forEach(item => {
            if (item.hasOwnProperty("sort")) {
              item.sort = "unset";
            }
          })
        }
      },

      // 全选事件
      onCheckboxAllChange(checked, value) {


        // 半选
        if (checked) {
          this.selectedValue = JSON.parse(JSON.stringify(this.selectedAllValue));
          this.$emit("checkboxChange", this.selectedValue, checked, value);
        } else {
          this.selectedValue = [];
          this.$emit("checkboxChange", this.selectedValue, checked, value);
        }

        // if (value == 'all') { // 取消全选
        //   this.selectedValue = [];
        //   this.$emit("checkboxChange", this.selectedValue, checked, value);
        // } else { // 全选
        //   this.selectedValue = getAllCheckValue();
        //   this.$emit("checkboxChange", this.selectedValue, checked, value);
        // }


      },

      onTdDbclick(row) {
        this.$emit("rowDbclick", row);
      },

      onTdClick(row) {
        // 选择事件
        if (this.selectedConfig && this.selectedConfig.rowClick) {
          let val = row[this.selectedConfig.bindDataIndex];
          let index = this.selectedValue.indexOf(val);
          if (index == -1) {
            this.onCheckboxChange(true, val);
          } else {
            this.onCheckboxChange(false, val);
          }
        }
        this.$emit("rowClick", row);
      },

      onCheckboxChange(checked, value) {

        if (checked) {
          this.selectedValue.push(value);
        } else {
          let index = this.selectedValue.indexOf(value);
          this.selectedValue.splice(index, 1);
        }

        this.$emit("checkboxChange", this.selectedValue, checked, value);

      },


      onMouseenterTr(e) {
        // console.log("data-row-index==", e.currentTarget.getAttribute("row")); // val = row-index-1
        let attrRow = e.currentTarget.getAttribute("row");

        if (this.fixedLeftColumns.length > 0 && this.$refs['ef-table-left-container']) {
          this.$refs['ef-table-left-container'].querySelector(` tbody tr[row=${attrRow}]`).classList.add(
            "tr-hover");
        }

        if (this.fixedRightColumns.length > 0 && this.$refs['ef-table-right-container']) {
          this.$refs['ef-table-right-container'].querySelector(` tbody tr[row=${attrRow}]`).classList.add(
            "tr-hover");
        }

        this.$refs['ef-table-container'] && this.$refs['ef-table-container'].querySelector(` tbody tr[row=${attrRow}]`)
          .classList.add("tr-hover");


      },


      onMouseleaveTr(e) {

        // console.log("data-row-index==", e.currentTarget.getAttribute("row")); // val = row-index-1
        let attrRow = e.currentTarget.getAttribute("row");

        if (this.fixedLeftColumns.length > 0 && this.$refs['ef-table-left-container']) {
          this.$refs['ef-table-left-container'].querySelector(` tbody tr[row=${attrRow}]`).classList.remove(
            "tr-hover");
        }

        if (this.fixedRightColumns.length > 0 && this.$refs['ef-table-right-container']) {
          this.$refs['ef-table-right-container'].querySelector(` tbody tr[row=${attrRow}]`).classList.remove(
            "tr-hover");
        }

        this.$refs['ef-table-container'] && this.$refs['ef-table-container'].querySelector(` tbody tr[row=${attrRow}]`)
          .classList.remove("tr-hover");


      },

      onRightScroll(e) {

        if (this.mouseEnterArea != "right") return;

        let {
          scrollLeft,
          scrollTop,
        } = e.target;

        // console.log("scrollLeft===",scrollLeft);
        // console.log("scrollTop===",scrollTop);


        this.$refs["ef-table-body"].scrollTop = scrollTop;

        if (this.fixedLeftColumns.length > 0) {
          this.$refs["ef-table-left-body"].scrollTop = scrollTop;
        }


      },


      onLeftScroll(e) {

        if (this.mouseEnterArea != "left") return;

        let {
          scrollLeft,
          scrollTop,
        } = e.target;

        // console.log("scrollLeft===",scrollLeft);
        // console.log("scrollTop===",scrollTop);


        this.$refs["ef-table-body"].scrollTop = scrollTop;

        if (this.fixedRightColumns.length > 0) {
          this.$refs["ef-table-right-body"].scrollTop = scrollTop;
        }


      },

      onBodyScroll(e) {
        if (this.mouseEnterArea != "body") return;
        let {
          scrollLeft,
          scrollTop,
        } = e.target;

        // 判断滚动条是否到达最左或者最右边
        if (scrollLeft > 0) {
          this.ifScrollMaxLeft = false;
        } else {
          this.ifScrollMaxLeft = true;
        }

        if ((this.$refs["ef-table-body"].clientWidth + scrollLeft) == this.$refs["ef-table-body"].scrollWidth) {
          this.ifScrollMaxRight = true;
        } else {
          this.ifScrollMaxRight = false;
        }

        if (this.fixedHeader && this.showHeader) {
          this.$refs["ef-table-body-header"].scrollLeft = scrollLeft;
        }

        if (this.fixedLeftColumns.length > 0 && this.dataSource.length > 0) {
          this.$refs["ef-table-left-body"].scrollTop = scrollTop;
        }

        if (this.fixedRightColumns.length > 0 && this.dataSource.length > 0) {
          this.$refs["ef-table-right-body"].scrollTop = scrollTop;
        }


      },

      // === event ===

      // === api ===

      // === api ===

      // === function ===

      test() {
        try {

        } catch (e) {
          console.log("e.message===", e.message);
        }
      },

      handleColumn() {

        let columns = JSON.parse(JSON.stringify(this.columns));

        // 判断是否开启选择
        if (this.selectedConfig) {
          this.checkSelectedConfig();
          let selectedItem = {
            key: 'ef-table-checkbox',
            title: "",
            width: this.selectedConfig.width || "50",
            fixed: "left"
          };
          columns.unshift(selectedItem);
        }

        // handle colums
        let {
          fixedLeftColumns,
          fixedRightColumns,
          orderColumns,
          fixedLeftHeaders,
          fixedRightHeaders,
          orderHeaders,
          maxLevel
        } = configRowspanColumns(columns);

        this.fixedLeftColumns = fixedLeftColumns;
        this.fixedRightColumns = fixedRightColumns;
        this.orderColumns = orderColumns;
        this.fixedLeftHeaders = fixedLeftHeaders;
        this.fixedRightHeaders = fixedRightHeaders;
        this.orderHeaders = orderHeaders;

        this.fixedLeftColumns.forEach(col => {
          if (!col.width) {
            col.width = "120";
          }
        })

        this.fixedRightColumns.forEach(col => {
          if (!col.width) {
            col.width = "120";
          }
        })

        // 如果有固定列，强制打开tableLayout=fixed确保header列宽可以与内容对齐
        if (this.fixedLeftColumns.length > 0 || this.fixedRightColumns.length > 0) {
          this.tableLayoutLock = "fixed";
        }



      },

      checkProps() {
        if (Object.prototype.toString.call(this.dataSource) != "[object Array]") {
          throw new Error("props dataSource must be Array")
        }
        if (Object.prototype.toString.call(this.columns) != "[object Array]") {
          throw new Error("props columns must be Array")
        }
        if (Object.prototype.toString.call(this.rowspanConfig) != "[object Array]") {
          throw new Error("props rowspanConfig must be Array")
        }
        if (this.openRowspan === true && Object.prototype.toString.call(this.rowspanConfig[0]) != "[object Array]") {
          throw new Error("props rowspanConfig must be multidimensional arrays")
        }
        if (this.fixedHeader && !this.showHeader) {
          throw new Error("props fixedHeader=true,showHeader must be true")
        }
      },

      // dom完成挂在后设置table一些属性
      setupTableAttr() {

        this.$nextTick(_ => {

          this.setTbodyTrHeight();
          this.setTheadTrHeight();

          /**
           * TODO 需要获取 横向和纵向滚动条宽度 ,header再有纵向滚动条时，需要减去滚动条的宽度
           */
          let headerHeight = 0;
          if (this.showHeader) {
            let elThead = this.$refs['ef-table-container'].querySelector(" thead"); // 获取header高度
            headerHeight = elThead.offsetHeight;
          }

          let scrollXWidth = this.$refs["ef-table-body"].offsetHeight - this.$refs["ef-table-body"]
            .clientHeight; // X轴滚动条宽度
          let scrollYWidth = this.$refs["ef-table-body"].offsetWidth - this.$refs["ef-table-body"]
            .clientWidth; // Y轴滚动条宽度


          // console.log("scrollXWidth===", scrollXWidth);
          // console.log("scrollYWidth===", scrollYWidth);

          // 固定头
          if (this.fixedHeader && this.showHeader) {
            this.$refs["ef-table-body"].style.height = `calc(100% - ${headerHeight}px)`;
            this.$refs["ef-table-body-header"].style.width = `calc(100% - ${scrollYWidth}px)`;
            this.$refs["ef-table-body-loading"].style.height = `calc(100% - ${headerHeight}px)`;
            this.$refs["ef-table-body-nodata"].style.height = `calc(100% - ${headerHeight}px)`;
          }

          // 固定列-left
          if (this.fixedLeftColumns.length > 0 && this.dataSource.length > 0) {
            this.$refs["ef-table-left-body"].style.marginRight = `-${scrollYWidth}px`;
            this.$refs["ef-table-left-container"].style.height = `calc(100% - ${scrollXWidth}px)`;
            if (this.fixedHeader && this.showHeader) {
              this.$refs["ef-table-left-body"].style.height = `calc(100% - ${headerHeight}px)`;
            }
          }

          // 固定列-right
          if (this.fixedRightColumns.length > 0 && this.dataSource.length > 0) {
            // this.$refs["ef-table-right-body"].style.marginRight = `-${scrollYWidth}px`;
            this.$refs["ef-table-right-container"].style.height = `calc(100% - ${scrollXWidth}px)`;
            if (this.fixedHeader && this.showHeader) {
              this.$refs["ef-table-right-body"].style.height = `calc(100% - ${headerHeight}px)`;
            }
            if (scrollYWidth > 0) {
              this.$refs["ef-table-right-body"].style.overflowY = "scroll";
            }
          }


          this.ifMounted = true; // 渲染完毕 ，打开nodata渲染条件


        })

      },

      setTbodyTrHeight() {

        if (this.dataSource.length < 1) {
          return;
        }

        if (this.fixedLeftColumns.length == 0 && this.fixedRightColumns.length == 0) {
          return;
        }

        // dom 还没渲染处理 return
        if (!this.$refs['ef-table-container'].querySelector(" tbody tr")) {
          return;
        }

        let elTbodyTr = this.$refs['ef-table-container'].querySelectorAll(" tbody tr"); // 获取tr高度
        let elTbodyLeftTrS = this.$refs['ef-table-left-container'] && this.$refs['ef-table-left-container']
          .querySelectorAll("tbody tr"); // 获取tr高度
        let elTbodyRightTrS = this.$refs['ef-table-right-container'] && this.$refs['ef-table-right-container']
          .querySelectorAll("tbody tr"); // 获取tr高度

        // console.log("elTbodyTr", elTbodyTr)

        for (let i = 0; i < elTbodyTr.length; i++) {

          let row = i + 1;
          let tr = elTbodyTr[i];
          let trMaxHeight = tr.offsetHeight;

          let trLeft = elTbodyLeftTrS && elTbodyLeftTrS[i];
          let trRight = elTbodyRightTrS && elTbodyRightTrS[i];

          // let trLeft = this.$refs['ef-table-left-container'].querySelector(` tbody tr[row=row-index-${row}]`);
          // let trRight = this.$refs['ef-table-right-container'].querySelector(` tbody tr[row=row-index-${row}]`);

          trLeft && (trLeft.offsetHeight > trMaxHeight) && (trMaxHeight = trLeft.offsetHeight);
          trRight && (trRight.offsetHeight > trMaxHeight) && (trMaxHeight = trRight.offsetHeight);

          if (trLeft && trMaxHeight > trLeft.offsetHeight) {
            trLeft.style.height = trMaxHeight + "px";
          }

          if (trRight && trMaxHeight > trRight.offsetHeight) {
            trRight.style.height = trMaxHeight + "px";
          }

          if (trMaxHeight > tr.offsetHeight) {
            tr.style.height = trMaxHeight + "px";
          }


        }

      },

      setTheadTrHeight() {

        if (!this.showHeader) {
          return 0;
        }

        let maxNum;
        let elTbodyTr = this.$refs['ef-table-container'].querySelector("thead"); // 获取tr高度
        maxNum = elTbodyTr.offsetHeight;
        if (this.fixedLeftColumns.length > 0 && this.dataSource.length > 0) {
          let elLeftTbodyTr = this.$refs['ef-table-left-container'].querySelector("thead"); // 获取tr高度
          if (elLeftTbodyTr && elLeftTbodyTr.offsetHeight > maxNum) {
            maxNum = elLeftTbodyTr.offsetHeight;
          }
        }
        if (this.fixedRightColumns.length > 0 && this.dataSource.length > 0) {
          let elRightTbodyTr = this.$refs['ef-table-right-container'].querySelector("thead"); // 获取tr高度
          if (elRightTbodyTr && elRightTbodyTr.offsetHeight > maxNum) {
            maxNum = elRightTbodyTr.offsetHeight;
          }
        }

        this.theadTrHeight = maxNum + "px";

      },

      setProps() {

      },

      checkSelectedConfig() {
        if (!this.selectedConfig.hasOwnProperty("bindDataIndex")) {
          throw new Error("bindDataIndex 属性必须");
        }
        if (this.selectedConfig.hasOwnProperty("selectedValue")) {
          if (Object.prototype.toString.call(this.selectedConfig.selectedValue) != "[object Array]") {
            throw new Error("selectedValue属性类型必须是数组");
          }
        } else {
          this.selectedConfig.selectedValue = [];
        }

      },

      setSelectedAllValue() {
        let res = [];
        if (this.selectedConfig) {
          this.dataSource.forEach(item => {
            res.push(item[this.selectedConfig.bindDataIndex]);
          });
        }
        this.selectedAllValue = res;
      },

      // === function ===

      // === computed ===
      trClassName(row, index) {
        if (Object.prototype.toString.call(this.rowClassName) == "[object Function]") {
          return this.rowClassName(row, index);
        } else if (Object.prototype.toString.call(this.rowClassName) == "[object String]") {
          return this.rowClassName;
        } else {
          throw new Error("props rowClassName type error");
        }
      },

      tdStyleMethod(col, i, columns) {
        let obj = {
          ...this.tdStyle
        };
        // if (col.width) {
        //   if (/px$/.test(col.width)) {
        //     throw new Error("column width属性 不需要px单位");
        //   }
        //   obj.width = col.width + "px";
        // }
        if (col.key == "ef-table-checkbox") {
          obj.textAlign = "center";
        }
        return obj;
      },

      thStyleMethod(col, i, columns) {
        let obj = {
          ...this.tdStyle
        };
        // if (col.width) {
        //   if (/px$/.test(col.width)) {
        //     throw new Error("column width属性 不需要px单位");
        //   }
        //   obj.width = col.width + "px";
        // }
        if (col.key == "ef-table-checkbox") {
          obj.textAlign = "center";
        }
        return obj;
      },
      // === computed ===
    },
    mounted() {
      setTimeout(() => {
        this.setSelectedAllValue();
      }, 0);
      this.setupTableAttr();
      this.resizeFunc = () => {
        this.setupTableAttr();
      }
      window.addEventListener("resize", this.resizeFunc);
    },
    created() {
      this.checkProps();
      this.handleColumn();
      // this.setProps();
    },
    destroyed() {
      window.removeEventListener("resize", this.resizeFunc);
    }
  }
</script>
