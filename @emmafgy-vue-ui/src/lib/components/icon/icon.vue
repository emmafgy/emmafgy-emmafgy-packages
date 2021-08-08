<template>
  <span class="ef-icon-wrapper" :class="{'ef-icon-spin': Object.prototype.hasOwnProperty.call($attrs,'spin')}"
    style="line-height: 1;" :style="containerStyle">
    <i class="ef-iconfont ef-icon" :class="className" :style="styleObj"></i>
  </span>
</template>

<script>
  export default {
    name: "ef-icon",
    props: {
      type: {
        type: String,
        default: 'icon-loading'
      },
      rotate: {
        type: String | Number,
        default: 0
      },
      size: {
        type: String,
        default: 'small'
      },
      color: {
        type: String,
        default: ''
      },
      fontSize: {
        type: String | Number,
        default: ""
      }
    },
    computed: {
      className() {
        let res = "";
        if (this.type) {
          res += " " + this.type
        }
        return res;
      },
      styleObj() {
        let style = {};
        if (this.size == "small") {
          style.fontSize = "20px";
        } else if (this.size == "middle") {
          style.fontSize = "30px";
        } else if (this.size == "mini") {
          style.fontSize = "14px";
        }
        if (this.color) {
          style.color = this.color;
        }
        if (this.fontSize) {
          style.fontSize = parseInt(this.fontSize) + "px";
        }
        return style;
      },
      containerStyle() {
        let style = {};
        if (this.rotate) {
          style.transform = `rotate(${this.rotate}deg)`;
        }
        return style;
      }
    },
    data() {
      return {}
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

      // === function ===
    },
    mounted() {

    },
    created() {

    }
  }
</script>
