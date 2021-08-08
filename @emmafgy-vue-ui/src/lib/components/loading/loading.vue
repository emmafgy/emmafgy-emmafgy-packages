<template>
  <ef-icon type="icon-loading" :size="size" spin></ef-icon>
</template>

<script>
  import EfIcon from "../icon/icon.vue";
  export default {
    name: "ef-loading",
    components: {
      EfIcon
    },
    props: {
      size: {
        type: String,
        default: "middle"
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

      // === function ===
    },
    mounted() {

    },
    created() {

    }
  }
</script>

