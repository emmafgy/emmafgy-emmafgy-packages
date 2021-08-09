<template>
  <transition name="modalbox-fade">
    <div v-show="visible" class="ef-modal-wrapper">

      <div :style="bodyStyle" class="inner pos-relative">

        <div class="header flex-base">
          <slot v-if="$scopedSlots.header" name="header"></slot>
          <span v-else>{{title}}</span>
          <span class="flex-1"></span>
          <ef-icon @mouseleave.native="hoverCloseIcon=false" @mouseenter.native="hoverCloseIcon=true"
            style="margin-left: 10px;cursor: pointer;" :color="hoverCloseIcon ? '#404040' : '#cfd2d6'" type="icon-close"
            v-show="showCloseIcon" @click.native="handleClose"></ef-icon>
        </div>

        <div class="body">
          <slot></slot>
        </div>

        <div class="footer">
          <slot v-if="$scopedSlots.footer" name="footer"></slot>
          <template v-else>
            <div class="flex-base">
              <span class="flex-1"></span>
              <ef-button style="min-width: 70px;" @click.native="handleCancel" v-show="showCancelButton" size="small">
                {{cancelText}}
              </ef-button>
              <ef-button style="min-width: 70px;" :loading="showConfirmLoading" @click.native="handleConfirm"
                type="primary" size="small" class="margin-left">
                {{confirmText}}
              </ef-button>
            </div>
          </template>
        </div>

      </div>

    </div>
  </transition>
</template>

<script>
  import EfIcon from "../icon/icon.vue";
  import EfButton from "../button/button.vue";
  import EfMark from "../mark/main.js";
  import {
    isPromise
  } from "@/util/util.js";
  export default {
    name: "ef-modal",
    model: {
      prop: "visible",
      event: "change"
    },
    components: {
      EfIcon,
      EfButton
    },
    computed: {
      bodyStyle() {
        let res = {};
        this.width && (res.width = this.width);
        return res;
      }
    },
    props: {
      onCancel: {
        type: Function,
        default: () => {}
      },
      onConfirm: {
        type: Function,
        default: () => {}
      },
      width: {
        type: String | Number,
        default: ""
      },
      visible: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: "TITLE"
      },
      showHeader: {
        type: Boolean,
        default: true
      },
      showFooter: {
        type: Boolean,
        default: true
      },
      showCloseIcon: {
        type: Boolean,
        default: true
      },
      showCancelButton: {
        type: Boolean,
        default: true
      },
      cancelText: {
        type: String,
        default: "取消"
      },
      confirmText: {
        type: String,
        default: "确定"
      },
      showMark: {
        type: Boolean,
        default: true
      },
      ifShowConfirmLoading: {
        type: Boolean,
        default: true
      },
      autoClose: {
        type: Boolean,
        default: true
      }
    },
    watch: {
      visible(newVal) {
        if (newVal) {
          this.showMark && (this.markInstance = EfMark());
          this.hiddenBodyScroll();
        }
      }
    },
    data() {
      return {
        markInstance: null,
        showConfirmLoading: false,
        hoverCloseIcon: false
      }
    },
    methods: {
      // === event  ===

      handleCancel() {


        // this.$emit("cancel", this);
        // this.autoClose && (this.handleClose());

        typeof this.onCancel == "function" && this.onCancel(this);
        this.handleClose();

      },

      handleConfirm() {
        // this.$emit("confirm", this);
        // this.autoClose && (this.handleClose());

        if (typeof this.onConfirm == "function") {

          let res = this.onConfirm(this);
          if (isPromise(res)) {
            this.ifShowConfirmLoading && (this.showConfirmLoading = true);
            res.then((res) => {
              this.handleClose();
            });
          } else {
            this.handleClose();
          }

        } else {
          this.handleClose();
        }

      },

      // === event ===

      // === api ===

      // === api ===

      // === function ===

      handleClose() {
        this.$emit("change", false);
        this.markInstance && (this.markInstance.visible = false);
        this.showConfirmLoading = false;
        this.showBodyScroll();
      },

      test() {
        try {

        } catch (e) {
          console.log("e.message===", e.message);
          e.message && (this.$message.error(e.message));
        }
      },

      hiddenBodyScroll() {
        document.body.classList.add("overflow-hidden");
      },

      showBodyScroll() {
        document.body.classList.remove("overflow-hidden");
      }

      // === function ===
    },
    mounted() {},
    created() {

    }
  }
</script>

<style lang="scss" scoped>
</style>
