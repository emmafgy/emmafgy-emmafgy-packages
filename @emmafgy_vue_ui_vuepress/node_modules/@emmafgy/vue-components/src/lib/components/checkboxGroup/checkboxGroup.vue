<template>
  <div>
    <div v-for="item of options" :key="item.value" class="ef-checkbox-wrapper">
      <checkbox @change="onChange" :disabled="disabled" :dataValue="item.value" :value="dataValue.includes(item.value)">
        {{item.label}}
      </checkbox>
    </div>
  </div>
</template>

<script>
  import checkbox from "../checkbox/checkbox.vue";
  export default {
    name: "ef-checkbox-group",
    model: {
      prop: 'value',
      event: 'change'
    },
    components: {
      checkbox
    },
    props: {
      disabled:{
        type:Boolean,
        default:false
      },
      options: {
        type: Array,
        default: _ => []
      },
      value: {
        type: Array,
        default: _ => []
      }
    },
    watch: {
      value(newVal) {
        this.dataValue = newVal;
      }
    },
    data() {
      return {
        dataValue: this.value,
      }
    },
    methods: {
      // === event  ===

      onChange(checked, value) {
        this.handleDataValue(checked, value);
        this.$emit("change", this.dataValue, checked, value);
      },

      // === event ===

      // === api ===

      // === api ===

      // === function ===

      handleDataValue(checked, value) {
        if (checked) {
          this.dataValue.push(value);
        } else {
          let index = this.dataValue.indexOf(value);
          this.dataValue.splice(index, 1);
        }
      },

      test() {
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

    }
  }
</script>


