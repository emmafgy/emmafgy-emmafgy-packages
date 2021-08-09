<template>
  <div id="app">


    <!-- el-table -->
    <div class="flex-column-center" style="margin-top: 30px;">
      <h1>ef-table</h1>
      <ef-table @rowDbclick="onRowDbclick" @rowClick="onRowClick" :dataSource="rowspanData" :columns="rowspanColumns"
        rowKey="key" :showHeader="true" rowClassName="testcolor" headRowClassName="testcolor" table-layout=""
        :bordered="true" size="middle" :loading="false" width="100%" height="600" :selectedConfig="selectedConfig"
        @checkboxChange="oncheckboxChange" @sortChange="onSortChange" :fixedHeader="true">

        <template #customTitle="{col,title}">
          <slot v-if="$scopedSlots.nodata" name="nodata"></slot>
          <span v-else style="white-space: nowrap;">{{title}}</span>
        </template>


        <template #name="{row,text}">
          solt-{{text}}
        </template>

        <template #tags="{row,text}">
          <span v-for="(item,i) of text" :key="i">
            {{item}},
          </span>
        </template>

        <template #action="{row,text}">
          <ef-button type="primary" @click.native.stop>
            查看详情
          </ef-button>
        </template>

        <template #title-op>
          <span style="color: red;">操作</span>
        </template>

        <template #nodata>
          <span style="color: red;">无数据。。。</span>
        </template>

      </ef-table>

      <ef-button class="margin-top" type="primary" @click="onClickTableCheckbox">checkbox test click</ef-button>

    </div>
    <!-- ef-table -->


    <!-- el-table -->
    <div class="flex-column-center" style="margin-top: 30px;">
      <h1>ef-table</h1>
      <ef-table @rowDbclick="onRowDbclick" @rowClick="onRowClick" :stripe="true" :dataSource="[]" :columns="columnsV2"
        rowKey="key" :showHeader="true" rowClassName="testcolor" headRowClassName="testcolor" table-layout=""
        :bordered="false" :loading="false" width="100%" height="600" :selectedConfig="selectedConfigV2"
        @checkboxChange="oncheckboxChange" @sortChange="onSortChange" :fixedHeader="true">

        <template #customTitle="{col,title}">
          <slot v-if="$scopedSlots.nodata" name="nodata"></slot>
          <span v-else style="white-space: nowrap;">{{title}}</span>
        </template>

        <!--      <template #loading>
          加载中
        </template> -->


        <template #name="{row,text}">
          solt-{{text}}
        </template>

        <template #tags="{row,text}">
          <span v-for="(item,i) of text" :key="i">
            {{item}},
          </span>
        </template>

        <template #action="{row,text}">
          <ef-button type="primary" @click.native.stop>
            查看详情
          </ef-button>
        </template>

        <template #title-op>
          <span style="color: red;">操作</span>
        </template>

        <!--        <template #nodata>
          <span style="color: red;">无数据。。。</span>
        </template> -->

        <template #order="{row,text,index}">{{index}}</template>

      </ef-table>

      <ef-button class="margin-top" type="primary" @click="onClickTableCheckbox">checkbox test click</ef-button>

    </div>
    <!-- ef-table -->



    <!-- ef-icon -->
    <div class="flex-column-center" style="margin-top: 30px;">
      <h1>ef-cion</h1>
      <ef-icon type="icon-loading" spin color="#aaaaff"></ef-icon>
      <ef-icon type="icon-phone" size="small" fontSize="50"></ef-icon>
    </div>
    <!-- ef-icon -->

    <!-- ef-loading -->
    <div class="flex-column-center" style="margin-top: 30px;">
      <h1>ef-loading</h1>
      <ef-loading></ef-loading>
    </div>
    <!-- ef-loading -->

    <!-- ef-checkbox -->
    <div class="flex-column-center" style="margin-top: 30px;">
      <h1>ef-checkbox</h1>
      <ef-checkbox v-model="checked" :disabled="false">check</ef-checkbox>
      <ef-button type="primary" @click="onClickCheckbox">checkbox test click</ef-button>
    </div>
    <!-- ef-checkbox -->

    <!-- ef-checkbox-group -->
    <div class="flex-column-center" style="margin-top: 30px;">
      <h1>ef-checkbox-group</h1>
      <ef-checkbox-group :disabled="false" :options="checkboxGroupOption" v-model="checkboxGroupValue"
        @change="onCheckboxGroupChange"></ef-checkbox-group>
      <ef-button type="primary" @click="onClickCheckboxGroup">checkboxGroup test click</ef-button>
    </div>
    <!-- ef-checkbox-group -->


    <!-- ef-triangle -->
    <div class="flex-column-center" style="margin-top: 30px;">
      <h1>ef-triangle</h1>
      <ef-triangle :width="8"></ef-triangle>
      <ef-triangle :width="8" :rotate="180" style="margin-top:10px;"></ef-triangle>
    </div>
    <!-- ef-triangle -->


    <!-- ef-button -->
    <div class="flex-column-center" style="margin-top: 30px;">
      <h1>ef-button</h1>
      <ef-button size="small" type="primary" :loading="buttonLoading">
        button
      </ef-button>
      <ef-button icon="icon-phone" shape="" @click="handleClickButton">
        button
      </ef-button>
      <ef-button type="default" icon="icon-phone" shape="circle"></ef-button>


      <ef-button type="default" :loading="true">button
      </ef-button>

      <ef-button type="default" size="small" :loading="true">button
      </ef-button>

      <ef-button type="default" size="middle" :loading="true">button
      </ef-button>


    </div>
    <!-- ef-button -->

    <!-- ef-button -->
    <div class="flex-column-center" style="margin-top: 30px;">
      <h1>ef-message</h1>
      <ef-button size="small" type="primary" @click="$message.success('成功了成功了成功了成功了')">
        success
      </ef-button>
      <ef-button size="small" type="primary" @click="$message.warn({showClose:true,message:'dddd'})">
        warn
      </ef-button>
      <ef-button size="small" type="primary" @click="$message.error('错误错误错误错误错误错误错误错误')">
        error
      </ef-button>
      <ef-button size="small" type="primary" @click="$message.closeAll();$message.success('成功了成功了成功了成功了');">
        closeAll
      </ef-button>
    </div>
    <!-- ef-button -->

    <!-- ef-button -->
    <div class="flex-column-center" style="margin-top: 30px;">
      <h1>ef-alert</h1>
      <!-- <ef-alert></ef-alert> -->
      <ef-button @click="handleClickAlert">
        alert
      </ef-button>
    </div>
    <!-- ef-button -->

    <!-- ef-button -->
    <div class="flex-column-center" style="margin-top: 30px;">
      <h1>ef-modal</h1>
      <!-- <ef-alert></ef-alert> -->
      <ef-modal :onCancel="onModalCancel" :onConfirm="onModalConfirm" maxWidth="600"  v-model="modalVisible"
        title="TEST EF-MODAL TITLE?">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>

        <!--       <ef-table ref="modal-table" @rowDbclick="onRowDbclick" @rowClick="onRowClick" :dataSource="dataSource" :columns="columns"
          rowKey="key" :showHeader="true" rowClassName="testcolor" headRowClassName="testcolor" table-layout=""
          :bordered="false" :loading="false" width="100%" height="" :selectedConfig="selectedConfigV2"
          @checkboxChange="oncheckboxChange" @sortChange="onSortChange" :fixedHeader="true">

          <template #customTitle="{col,title}">
            <slot v-if="$scopedSlots.nodata" name="nodata"></slot>
            <span v-else style="white-space: nowrap;">{{title}}</span>
          </template>


          <template #name="{row,text}">
            solt-{{text}}
          </template>

          <template #tags="{row,text}">
            <span v-for="(item,i) of text" :key="i">
              {{item}},
            </span>
          </template>

          <template #action="{row,text}">
            <ef-button type="primary" @click.native.stop>
              查看详情
            </ef-button>
          </template>

          <template #title-op>
            <span style="color: red;">操作</span>
          </template>

          <template #nodata>
            <span style="color: red;">无数据。。。</span>
          </template>

          <template #order="{row,text,index}">{{index}}</template>

        </ef-table> -->

      </ef-modal>
      <!-- $refs['modal-table'].setupTableAttr(); -->
      <ef-button @click="modalVisible = !modalVisible; ">
        toggle modalVisible
      </ef-button>
    </div>
    <!-- ef-button -->





    <!-- ef-button -->
    <div class="" style="margin-top: 30px;height: 400px;">
      <h1>ef-menu</h1>
      <div style="width: 300px;">
        <ef-menu ref="ef-menu" @change="onMenuChange" :menuList="menuList"></ef-menu>
      </div>

      <ef-button @click="$refs['ef-menu'].selectMenu(10)">select key</ef-button>
    </div>
    <!-- ef-button -->



  </div>
</template>

<script>
  import {
    dataSource,
    rowspanConfig,
    columns,
    Adata,
    Acolumns,
    rowspanColumns,
    menuList,
    columsMap
  } from "./data.js";

  import EfAlert from "@/lib/components/alert/alert.vue"

  export default {
    name: 'app',
    components: {
      EfAlert
    },
    data() {


      const columnsV2 = this.$efUtil.genColumns(columsMap);

      console.log("columnsV2", columnsV2)

      const data = [];
      for (let i = 0; i < 100; i++) {
        data.push({
          key: i,
          name: 'John Brown',
          age: i + 1,
          street: 'Lake Park',
          building: 'C',
          number: 2035,
          companyAddress: 'Lake Street 42',
          companyName: 'SoftLake Co',
          gender: 'M',
        });
      }

      return {
        menuList,
        aModalVisible: false,
        modalVisible: false,
        buttonLoading: false,
        rowspanData: data,
        rowspanColumns,
        selectedConfig: {
          width: 50,
          selectedValue: [], // 控制选中的值
          bindDataIndex: "key", // checkbox 绑定的row-key
          rowHighLighted: true, // td 高亮
          rowClick: true, // 单击行选中
        },
        selectedConfigV2: {
          showSelectAll: true,
          width: 50,
          selectedValue: [], // 控制选中的值
          bindDataIndex: "base1", // checkbox 绑定的row-key
          rowHighLighted: true, // td 高亮
          rowClick: true, // 单击行选中
        },
        checked: false,
        msg: 'Welcome to Your Vue.js App',
        myval: "fgy",
        dataSource: [],
        columns,
        columnsV2,
        rowspanConfig,
        Acolumns,
        Adata,
        checkboxGroupOption: [{
            value: "aaa",
            label: "aaa"
          },
          {
            value: "bbb",
            label: "bbb"
          },
          {
            value: "ccc",
            label: "ccc"
          },
        ],
        checkboxGroupValue: ["aaa"]
      }
    },
    methods: {


      onMenuChange(key, menu) {
        console.log(key, menu)


        // this.$message({
        //   type: "success",
        //   dangerouslyUseHTMLString: true,
        //   message: '<strong>这是 <i>HTML</i> 片段</strong>',
        //   duration: 3000,
        //   showClose: true
        // });

      },

      onModalCancel(modalInstance) {

      },
      onModalConfirm(modalInstance) {
        // modalInstance.showConfirmLoading = true;
        // setTimeout(_ => {
        //   modalInstance.handleClose();
        // }, 1000)

        return new Promise((res, rej) => {
        				 setTimeout(_ => {
        				   res()
        				 }, 1000)
        });



      },
      handleClickButton() {
        this.buttonLoading = !this.buttonLoading;
      },
      handleClickAlert() {


        const testPromise = () => {
          return new Promise((res, rej) => {
            setTimeout(_ => {
              res();
            }, 1500)
          })
        };

        this.$alert({
          title: "我是TITLE",
          width:"500px",
          body: "我是b我是body我是body我是body我是body我是body我是body我是body我是bodyody",
          iconType: "success",
          onConfirm: async () => {

            // return new Promise((res, rej) => {
            //   instance.showConfirmLoading = true;
            //   setTimeout(_ => {
            //     res()
            //   }, 1000)
            // });

            // console.log("onConfirm")
            // instance.showConfirmLoading = true;
            await testPromise();
            console.log("await");


          },
          onCancel: () => {
            console.log("onCancel");
          },

        });

        // let timer = setTimeout(_ => {
        //   instance.visible = false;
        //   clearTimeout(timer)
        //   alert(1)
        // }, 1000)

      },
      onRowDbclick(row) {
        console.log("onRowDbclick", row);
      },
      onRowClick(row) {
        console.log("rowClick", row);
      },
      onSortChange(sort, col) {
        console.log(sort, col)
      },
      onClickTableCheckbox() {
        this.selectedConfig.selectedValue = ["sx001", "sx002"];
      },
      oncheckboxChange(selectedValue, checked, value) {
        console.log(selectedValue, checked, value);
      },
      onClickCheckboxGroup() {
        if (this.checkboxGroupValue.length < 3) {
          this.checkboxGroupValue = ["aaa", "bbb", "ccc"];
        } else {
          this.checkboxGroupValue = [];
        }
      },
      onCheckboxGroupChange(dataValue, currentChecked, currentValue) {
        console.log("dataValue, currentChecked, currentValue", dataValue, currentChecked, currentValue);
      },
      onClickCheckbox() {
        this.checked = !this.checked;
      },
      onClick() {
        this.myval = "emma";
      },
      onChangeCheckbox(val) {
        console.log("checkbox val", val);
        this.checked = val;
      },
      getData() {
        setTimeout(_ => {
          let dataSource = [];

          for (var i = 1; i <= 50; i++) {

            let base4 = "1000";
            let base1 = "sx00ddddddddddddddddddddddddd" + (i);

            if (i == 2) {
              base4 = "10000000000000000000000000000000000";
            }

            dataSource.push({
              base1,
              base2: 1000,
              base3: 1000,
              base4,
              base5: 1000,
              sxDays: 5,
              sxWage: 500,
              wageTotal: 500
            });
          };

          this.dataSource = dataSource;
        }, 300);
      },
      configRowspanColumns(columnsConfig = []) {

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
        console.log("maxLevel", maxLevel);


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

        // 2.生成columns headers
        let fixedLeftColumns = [];
        let fixedRightColumns = [];
        let notFixedColumns = [];
        let fixedLeftHeaders = [];
        let fixedRightHeaders = [];
        let notFixedHeaders = [];

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


        // console.log("fixedleft", fixedLeftColumns);
        // console.log("notFixedColumns", notFixedColumns);
        // console.log("fixedRightColumns", fixedRightColumns);
        // console.log("left headers", fixedLeftHeaders);
        // console.log("right headers", fixedRightHeaders);
        // console.log("not fixed headers", notFixedHeaders);


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
          orderHeaders: mergeHeaders()
        }

      }
    },
    mounted() {

    },
    created() {
      this.getData();
      let obj = this.configRowspanColumns(columns);
      console.log("obj", obj);

      // this.$nextTick()
    }
  }
</script>

<style lang="scss">
  .testcolor {
    // background-color: greenyellow !important;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding: 60px;
  }

  h1 {
    border-bottom: 1px solid #666;
  }

  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .trClass {
    background-color: red;
  }
</style>
