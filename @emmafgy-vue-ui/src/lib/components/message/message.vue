<template>
  <transition name="ef-message-fade" @after-leave="handleAfterLeave">

    <div :class="[
        'ef-message',
        type ? `ef-message-${type }` : '',
        customClass
      ]" :style="positionStyle" v-show="visible" @mouseenter="clearTimer" @mouseleave="startTimer" role="alert">

      <ef-icon :type="iconTypeMap[type]" :color="iconColorMap[type]" style="margin-right: 5px;"></ef-icon>

      <slot>
        <p v-if="!dangerouslyUseHTMLString">{{ message }}</p>
        <p v-else v-html="message"></p>
      </slot>

      <ef-icon style="margin-left: 15px;cursor: pointer;" color="#cfd2d6" size="mini" type="icon-close" v-if="showClose" @click.native="close"></ef-icon>


    </div>

  </transition>
</template>

<script>
  import EfIcon from "../icon/icon.vue";

  import {
    messageSuccessColor,
    messageErrorColor,
    messageWarnColor
  } from "@/theme/common/css/common.scss";

  export default {
    data() {
      return {
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
        visible: false,
        message: '',
        duration: 3000,
        type: 'warn',
        iconClass: '',
        customClass: '',
        onClose: null,
        showClose: false,
        closed: false,
        verticalOffset: 20,
        timer: null,
        dangerouslyUseHTMLString: false,
        center: false
      };
    },

    components: {
      EfIcon
    },

    computed: {
      positionStyle() {
        return {
          'top': `${ this.verticalOffset }px`
        };
      }
    },

    watch: {
      closed(newVal) {
        if (newVal) {
          this.visible = false;
        }
      }
    },

    methods: {
      handleAfterLeave() {
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      },

      close() {
        this.closed = true;
        if (typeof this.onClose === 'function') {
          this.onClose(this);
        }
      },

      clearTimer() {
        clearTimeout(this.timer);
      },

      startTimer() {
        if (this.duration > 0) {
          this.timer = setTimeout(() => {
            if (!this.closed) {
              this.close();
            }
          }, this.duration);
        }
      },
      keydown(e) {
        if (e.keyCode === 27) { // esc关闭消息
          if (!this.closed) {
            this.close();
          }
        }
      }
    },
    mounted() {
      this.startTimer();
      document.addEventListener('keydown', this.keydown);
    },
    beforeDestroy() {
      document.removeEventListener('keydown', this.keydown);
    }
  };
</script>
