<template>
  <span class="ef-triangle" :style="style" :class="classList">
  </span>
</template>

<script>
  export default {
    name: "ef-triangle",
    props: {
      width: {
        type: Number,
        default: 8
      },
      color: {
        type: String,
        default: ""
      },
      rotate: {
        type: Number,
        default: 0
      },
      classList: {
        type: Array,
        default: () => []
      }
    },
    computed: {
      style() {
        let res = {};
        this.width && (res.borderWidth = this.width + "px");
        this.color && (res.borderColor = this.color);
        res.borderStyle = "solid";
        res.transform = `rotate(${this.rotate}deg)`;
        return res;
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
    created() {}
  }
</script>
