<template>
  <div class="flex-center">
    <!-- <slot name="title"></slot>
    <slot name="label" :row11="row">default label:</slot> -->
    <v-nodes v-if="$scopedSlots.label" :vnodes="$scopedSlots.label({row11:row})"> </v-nodes>
    <v-nodes v-if="$scopedSlots.title" :vnodes="$scopedSlots.title()"></v-nodes>
    <input class="primary-color" type="text" :value="value" @input="onInput">

  </div>
</template>

<script>
  export default {
    name: "MyInput",
    model: {
      prop: 'value',
      event: 'input'
    },
    props: {
      value: ""
    },
    data() {
      return {
        row: {
          labelname: "data.row.labelname"
        }
      };
    },
    methods: {
      // === event  ===

      onInput(e) {
        let val = e.target.value;
        this.$emit("input", val);
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

      // === function ===
    },
    mounted() {

      let obj = {
        row11: {
          labelname: "data.row.labelname"
        }
      };

      console.log("label function ==", this.$scopedSlots.label(obj));

      console.log("title function ==", this.$slots.title);

      console.log("createElement===", this.$children);

      // console.log("this.Slots", this.$slots);
      // console.log("this.$scopedSlots", this.$scopedSlots);


      // console.log(this.$slots, '$slots')
      // console.log(this.$scopedSlots, '$scopedSlots')
    },
    created() {

    }
  }
</script>

<style lang="scss" scoped="">
   @import "~@/common/css/common.scss";
  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .primary-color{
    color: $primary-color;
  }
</style>
