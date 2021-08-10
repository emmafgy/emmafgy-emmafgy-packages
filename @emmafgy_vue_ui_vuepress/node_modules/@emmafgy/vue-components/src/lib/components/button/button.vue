<template>
  <button @mousedown="onMousedown($event)" @mouseup="onMouseup($event)" @click="onClick" class="ef-button flex-center"
    :class="{
      'ef-button-danger':type=='danger',
      'ef-button-primary':type=='primary',
      'ef-button-default':!type||type=='default',
      'ef-button-shape-circle':shape=='circle',
      'ef-button-shape-round':shape=='round',
      'ef-button-disabled':$attrs.hasOwnProperty('disabled'),
      'ef-button-loading':loading,
      'ef-button-size-medium':size=='middle',
      'ef-button-size-small':size=='small',
      }">
    <ef-icon v-if="loading" :fontSize="fontSize" type="icon-loading" spin color="#FFF"></ef-icon>
    <ef-icon v-else-if="icon" :fontSize="fontSize" :type="icon" color="#FFF"></ef-icon>
    <div style="text-align: center;" :style="{marginLeft:shape=='circle'?'0px':'5px'}">
      <slot name="default"></slot>
    </div>
  </button>
</template>

<script>
  import EfIcon from "../icon/icon.vue";
  export default {
    name: "ef-button",
    components: {
      EfIcon
    },
    props: {
      type: {
        type: String,
        default: "default"
      },
      icon: {
        type: String,
        default: ""
      },
      shape: {
        type: String,
        default: ""
      },
      loading: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: ""
      },
    },
    computed: {
      fontSize() {
        const fontSizeMap = {
          "small": "12",
          "middle": "12"
        }
        if (fontSizeMap[this.size]) {
          return fontSizeMap[this.size];
        } else {
          // return "20";
        }
      }
    },
    data() {
      return {

      }
    },
    methods: {
      // === event  ===

      onMousedown(e) {
        e.currentTarget.classList.add("ef-button-click");
      },

      onMouseup(e) {
        e.currentTarget.classList.remove("ef-button-click");
      },

      onClick() {
        this.$emit("click");
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

    },
    created() {

    }
  }
</script>
