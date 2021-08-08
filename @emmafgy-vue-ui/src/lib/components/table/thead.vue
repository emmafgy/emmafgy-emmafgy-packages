<template>
  <thead :style="{height:$parent.theadTrHeight}" class="ef-table-thead">

    <tr v-for="(columns,index) of headerList" :key="index" :class="$parent.headRowClassName">

      <th @click="$parent.onSortChange(col)" v-for="(col,i) of columns" :key="col.key || i" :colspan="col.colspan || 1"
        :rowspan="col.rowspan || 1" :style="$parent.thStyleMethod(col,i,columns)"
        :class="{'sort':col.hasOwnProperty('sort'),'table-td-bordered':$parent.bordered}">


        <ef-checkbox :halfClick="true" @click.native.stop @change="$parent.onCheckboxAllChange"
          v-if="col.key=='ef-table-checkbox' && $parent.selectedConfig.showSelectAll"
          :value="$parent.selectedValue.length>0" :halfCheck="$parent.selectedType=='half'"
          :dataValue="$parent.selectedType">
        </ef-checkbox>
        <template v-else-if="col.key!='ef-table-checkbox'">
          <div class="th-wrapper">
            <v-nodes v-if="col.customTitleRender"
              :vnodes="$parent.$scopedSlots[col.customTitleRender]({col,title:col.title})">
            </v-nodes>
            <template v-else><span>{{col.title}}</span></template>
            <template v-if="col.hasOwnProperty('sort')">
              <span class=" ef-sort-wrapper">
                <ef-triangle :classList="[col.sort=='asc'?'ef-color-sort-active':'ef-color-sort-unactive']" :width="5">
                </ef-triangle>
                <ef-triangle :classList="[col.sort=='desc'?'ef-color-sort-active':'ef-color-sort-unactive']" :width="5"
                  :rotate="180" style="position: relative;top: 5px;"></ef-triangle>
              </span>
            </template>
          </div>
        </template>

      </th>

    </tr>

  </thead>
</template>

<script>
  import EfCheckbox from "../checkbox/checkbox.vue";
  import EfTriangle from "../triangle/triangle.vue";
  export default {
    name: "ef-table-thead",
    props: {
      headerList: {
        type: Array,
        default: () => []
      }
    },
    components: {
      EfCheckbox,
      EfTriangle,
      'v-nodes': {
        functional: true,
        render: (h, ctx) => ctx.props.vnodes
      }
    },
    data() {
      return {

      }
    },
    methods: {
      // === event  ===

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

      mergeScopedSlots() {
        this.$scopedSlots = {
          ...this.$parent.$scopedSlots,
          ...this.$scopedSlots
        };
      },

      // === function ===
    },
    mounted() {

    },
    created() {
      // this.mergeScopedSlots();
      // console.log("columns", this.columns);
      // console.log("scope", this.$scopedSlots);
      // let customTitle = "customTitle";
      // console.log("customTitle", this.$scopedSlots[customTitle]())
      // this.mergeScopedSlots();
    }
  }
</script>

<style lang="scss" scoped>
</style>
