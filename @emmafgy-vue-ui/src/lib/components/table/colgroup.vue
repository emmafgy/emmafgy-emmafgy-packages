<template>
  <colgroup>
    <col v-for="(col,i) of columns" :key="col.key || i" :style="style(col)" >
  </colgroup>
</template>

<script>
  export default {
    name: "ef-tabel-colgroup",
    // inject:["columns"],
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

      style(col) {
        let res = {};
        // 设置最小宽度
        res.minWidth = "100px";
        if (col.width) {
          res.width = col.width + "px";
          res.minWidth = col.width + "px";
        }
        return res;
      },

      async test() {
        try {

        } catch (e) {
          console.log("e.message===", e.message);
        }
      },

      // === function ===
    },
    mounted() {

    },
    created() {

      // console.log("this.$parent.$scopedSlots",this.$parent.$scopedSlots);
      // this.$scopedSlots = {...this.$parent.$scopedSlots,...this.$scopedSlots};
      // console.log("this.$scopedSlots",this.$scopedSlots);

    }
  }
</script>

<style lang="scss" scoped="">
</style>
