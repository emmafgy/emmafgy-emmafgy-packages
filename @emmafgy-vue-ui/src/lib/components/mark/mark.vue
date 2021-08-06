<template>
  <transition name="markbox-fade">
    <div v-if="visible" class="ef-mark">
    </div>
  </transition>
</template>

<script>
  export default {
    name: "ef-mark",
    data() {
      return {
        visible: false
      }
    },
    methods: {
      // === event  ===

      // === event ===

      // === api ===

      // === api ===

      // === function ===

      async test() {
        try {

        } catch (e) {
          console.log("e.message===", e.message);
          e.message && (this.$message.error(e.message));
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

<style lang="scss" scoped>
</style>
