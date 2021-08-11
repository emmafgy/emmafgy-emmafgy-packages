<template>
  <transition name="msgbox-fade">
    <div v-if="visible" class="ef-alert-wrapper">
      <div class="inner pos-relative" :style="bodyStyle">

        <div class="header flex-base flex-0-0-auto">
          <ef-icon v-show="showIcon" size="middle" :type="iconTypeMap[iconType]" :color="iconColorMap[iconType]">
          </ef-icon>
          <span class="title" :class="{'icon-padding':showIcon}">{{title}}</span>
        </div>

        <div v-if="ifBodyHtml" class="body margin-top-sm" v-html="body" :class="{
        'inner-icon-padding':showIcon
      }"></div>
        <div v-else class="body marin-top-sm" :class="{
        'inner-icon-padding':showIcon
      }">
          {{body}}
        </div>

        <div class="footer flex-base flex-0-0-auto margin-top">
          <span class="flex-1"></span>
          <ef-button style="min-width: 70px;" @click.native="handleCancel" v-show="showCancelButton" size="small">
            {{cancelText}}
          </ef-button>
          <ef-button style="min-width: 70px;" :loading="showConfirmLoading" @click.native="handleConfirm" type="primary"
            size="small" class="margin-left">
            {{confirmText}}
          </ef-button>
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
    messageSuccessColor,
    messageErrorColor,
    messageWarnColor
  } from "../../../theme/common/css/common.scss";

  import {
    isPromise
  } from "../../../util/util.js";

  export default {
    name: "ef-alert",
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
    data() {
      return {

        width: "",
        visible: false,
        showMark: true,
        showIcon: true,
        iconType: "error",
        iconTypeMap: {
          success: "icon-success-fill",
          warn: "icon-prompt-fill1",
          error: "icon-reeor-fill"
        },
        iconColorMap: {
          success: messageSuccessColor,
          warn: messageWarnColor,
          error: messageErrorColor
        },
        title: "TITLE",
        body: "BODY",
        ifBodyHtml: true,
        confirmText: "确定",
        cancelText: "取消",
        showCancelButton: true,
        showConfirmLoading: false,
        ifShowConfirmLoading: true,

        onCancel: () => {},
        onConfirm: () => {},

        markInstance: null,

      }
    },
    methods: {
      // === event  ===

      handleCancel() {
        typeof this.onCancel == "function" && this.onCancel();
        this.doClose();
      },

      handleConfirm() {

        if (typeof this.onConfirm == "function") {

          let res = this.onConfirm();
          if (isPromise(res)) {
            this.ifShowConfirmLoading && (this.showConfirmLoading = true);
            res.then((res) => {
              this.doClose();
            });
          } else {
            this.doClose();
          }

        } else {
          this.doClose();
        }


      },

      // === event ===

      // === api ===

      // === api ===

      // === function ===

      doClose() {
        this.visible = false;
        this.markInstance && (this.markInstance.visible = false);
        this.showConfirmLoading = false;
        this.showBodyScroll();
      },

      showLoading() {
        this.showConfirmLoading = true;
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
    mounted() {
      this.hiddenBodyScroll();
    },
    created() {

    }
  }
</script>

<style lang="scss" scoped>
</style>
