<template>
  <label class="ef-checkbox-label-container" :class="{'disabled-label-container':disabled}">
    <span class="ef-checkbox-container" :class="{'disabled-inner':disabled}">
      <input ref="checkbox-input" type="checkbox" name="" id="" value="" @change="onchange($event)" />
      <span class="ef-checkbox-inner"
        :class="{'is-checked':checked,'disabled':disabled,'half-checked':halfCheck}"></span>
    </span>
    <span :class="{'disabled-span':disabled}">
      <slot></slot>
    </span>
  </label>
</template>

<script>
  export default {
    name: "ef-checkbox",
    model: {
      prop: 'value',
      event: 'change'
    },
    props: {
      halfCheck: {
        type: Boolean,
        default: false
      },
      value: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      dataValue: null,
      halfClick: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      value(newVal) {
        if (!this.disabled) {
          this.checked = newVal;
          this.$nextTick(_ => {
            this.$refs["checkbox-input"].checked = newVal;
          });
        }
      }
    },
    data() {
      return {
        checked: this.value,
      }
    },
    methods: {
      // === event  ===

      onchange(e) {
        // console.log("e.target.val", e.target.checked);
        let checked = e.target.checked;
        if (!this.disabled) {
          if (this.halfClick === true && this.dataValue == "half") {
            this.$emit("change", true, this.dataValue);
            this.$nextTick(_ => {
              this.$refs["checkbox-input"].checked = true;
            });
          } else {
            this.checked = checked;
            this.$emit("change", checked, this.dataValue);
          }


        }

      },

      // === event ===

      // === api ===

      // === api ===

      // === function ===

      // setFullSelected() {
      //   this.$nextTick(_ => {
      //     this.$refs["checkbox-input"].checked = true;
      //     this.halfCheckData = false;
      //     this.dataValue = "none";
      //     this.onchange();
      //   });
      // },

      test() {
        try {

        } catch (e) {
          console.log("e.message===", e.message);
        }
      },

      init() {
        this.$refs["checkbox-input"].checked = this.value;
      },

      // === function ===
    },
    mounted() {
      this.init();
    },
    created() {

    }
  }
</script>
