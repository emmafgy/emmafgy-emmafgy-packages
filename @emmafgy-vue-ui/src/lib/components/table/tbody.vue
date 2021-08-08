<template>
  <tbody class="ef-table-tbody">
    <tr @mouseleave="$parent.onMouseleaveTr($event)" @mouseenter="$parent.onMouseenterTr($event)"
      :row="'row-index-'+(i+1)" :style="{}" v-for="(row,i) of $parent.dataSource"
      :key="(row[$parent.rowKey] || row.key || row.id || i)"
      :class="[$parent.trClassName(row,i+1),($parent.stripe && (i+1)%2==0)?'ef-tbale-stripe':'']">

      <td @dblclick="$parent.onTdDbclick(row)" @click="$parent.onTdClick(row)" :class="{
          'td-selected':($parent.selectedConfig && $parent.selectedConfig.rowHighLighted && $parent.selectedValue.includes(row[$parent.selectedConfig.bindDataIndex])),
          'table-td-bordered':$parent.bordered
        }" v-for="(col,j) of columns" :key="col.key" :style="$parent.tdStyleMethod(col,j,columns)">

        <ef-checkbox @click.native.stop @change="$parent.onCheckboxChange" v-if="col.key=='ef-table-checkbox'"
          :value="$parent.selectedValue.includes(row[$parent.selectedConfig.bindDataIndex])"
          :dataValue="$parent.selectedConfig && row[$parent.selectedConfig.bindDataIndex]"></ef-checkbox>
        <template v-else>
          <v-nodes v-if="col.customRowRender"
            :vnodes="$parent.$scopedSlots[col.customRowRender]({row,index:i+1,text:row[col['dataIndex']]})">
          </v-nodes>
          <template v-else><span>{{row[col["dataIndex"]]}}</span></template>
        </template>


      </td>

    </tr>
  </tbody>
</template>

<script>
  import EfCheckbox from "../checkbox/checkbox.vue";
  export default {
    name: "ef-table-tbody",
    components: {
      EfCheckbox,
      'v-nodes': {
        functional: true,
        render: (h, ctx) => ctx.props.vnodes
      }
    },
    props: {
      columns: {
        type: Array,
        default: () => []
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
    }
  }
</script>

<style lang="scss" scoped>
</style>
