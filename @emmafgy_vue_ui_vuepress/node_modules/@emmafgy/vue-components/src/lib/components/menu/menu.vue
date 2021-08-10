<template>
  <ul :role="role" :class="{'ef-menu':true,'ef-sub-menu':isSubMenu}" ref="ef-menu">
    <template v-for="(menu,index) of menuList">

      <template v-if="Array.isArray(menu.children) && menu.children.length > 0">
        <li class="ef-menu-li ef-menu-sub-li">
          <div :style="muneItemStyle" class="ef-sub-menu-title" @click="onToggleSubmenu(menu,index,$event)">
            <i class="ef-menu-icon" v-if="menu.customIconClass" :class="customIconClass"></i>
            <ef-icon class="ef-menu-icon" v-else-if="menu.icon" :type="menu.icon"></ef-icon>
            <span class="ef-menu-li-label">{{menu.label}}</span>
            <span class="ef-icon-arrow-wrapper" :class="{'icon-pos':!menu.showSubMenu}">
              <ef-icon class="ef-icon-arrow" type="icon-arrow-up" :rotate="menu.showSubMenu?0:180"></ef-icon>
            </span>
          </div>
          <ef-menu :role="'ef-sub-menu-'+ menu.key" @change="onChildChange" :subLevel="subLevel + 1"
            :menuList="menu.children" :isSubMenu="true"
            :class="{'ef-sub-menu-close':!menu.showSubMenu,'ef-sub-menu-open':menu.showSubMenu}">
          </ef-menu>
          <!-- :class="{'ef-sub-menu-close':!menu.showSubMenu,'ef-sub-menu-open':menu.showSubMenu,}" -->
        </li>
      </template>
      <li v-else @click="onClickMenuItem(menu,index)" :style="muneItemStyle" class="ef-menu-li"
        :class="{'active':menu.key==currentKeyObj.key}" :key="menu.key || index">
        <i class="ef-menu-icon" v-if="menu.customIconClass" :class="customIconClass"></i>
        <ef-icon class="ef-menu-icon" v-else-if="menu.icon" :type="menu.icon"></ef-icon>
        <span class="ef-menu-li-label">{{menu.label}}</span>
      </li>

    </template>
  </ul>
</template>

<script>
  import EfIcon from "../icon/icon.vue"; // icon-arrow-up
  import currentKeyObj from "./currentKey.js";
  import {
    menuItemPaddingLeft
  } from "@/theme/src/menu.scss";
  import {
    getNoneStyle,
    getNearEle
  } from "@/util/util.js";
  export default {
    name: "ef-menu",
    props: {
      collapse: {
        type: Boolean,
        default: false
      },
      role: {
        type: String,
        default: ""
      },
      route: {
        type: Boolean,
        default: true
      },
      subLevel: {
        type: Number,
        default: 1
      },
      isSubMenu: {
        type: Boolean,
        default: false,
      },
      menuList: {
        type: Array,
        default: []
      }
    },
    computed: {
      muneItemStyle() {
        return {
          paddingLeft: ((this.subLevel - 0) * parseInt(menuItemPaddingLeft)) + "px"
        }
      }
    },
    data() {
      return {
        currentKeyObj,
      }
    },
    methods: {
      // === event  ===

      /**
       * @param {Object or String} key
       */
      selectMenu(key) {

        // 如果是menu obj 则取menu.key
        if (Object.prototype.toString.call(key) == "[object Object]") {
          key = key.key;
        }

        this.currentKeyObj.key = key;
        // console.log("p", p, key);

        let p = this.findParentPath(currentKeyObj.cloneMenuList, key);
        if (p != null) {
          this.openSubMenu(key); // 展开菜单
          p.forEach(menu => {
            if (menu) {
              this.$set(menu, "showSubMenu", true);
            }
          })
        }

      },
      // 展开子级菜单
      openSubMenu(key) {


        this.$nextTick(_ => {


          let p = this.findParentPath(currentKeyObj.cloneMenuList, key, true);

          // console.log("path", p, key);


          if (Array.isArray(p)) {

            // let firstParentEl = this.findFirstParent().$el;
            let firstParentEl = currentKeyObj.firstParent.$el;

            for (let i = p.length - 1; i >= 0; i--) {
              let menu = p[i];

              if (!menu.hasOwnProperty("children") || menu.children.length < 1) {
                continue;
              }

              let subMenuDom = firstParentEl.querySelector(`ul[role=ef-sub-menu-${menu.key}]`);

              // console.log("subMenuDom", subMenuDom);

              let nextMenuDom = subMenuDom;

              if (!menu.showSubMenu) { // 关闭
                nextMenuDom.style.height = "0px";
              } else { // 打开

                // 拷贝dom
                let cloneDom = nextMenuDom.cloneNode(true);

                // 拷贝的dom获取高度
                cloneDom.style.visibility = "hidden";
                cloneDom.style.position = "absolute";
                cloneDom.style.height = "auto";
                // cloneDom.style.display = "block";
                // cloneDom.style.background = "red";
                firstParentEl.appendChild(cloneDom);

                // 设置高度
                let height = cloneDom.offsetHeight;
                // console.log("height", height);
                // nextMenuDom.style.height = "0px";
                // nextMenuDom.style.display = "block";
                // let transitionTimes = height / 80 * 0.4;
                // let transitionTimes = 0.4;
                // nextMenuDom.style.transition = ` height ${transitionTimes}s`;
                // nextMenuDom.style.transition = ` height ${transitionTimes}s`;
                nextMenuDom.style.height = height + "px";

                // 删除拷贝的dom
                cloneDom.remove();

              }

            }

          }

        })


      },

      onChildChange(currentKey, menu) {
        this.$emit("change", currentKey, menu);
      },

      onClickMenuItem(menu, index) {
        this.currentKeyObj.key = menu.key;
        this.$emit("change", this.currentKeyObj.key, menu);
        if (this.route && menu.fullRoutePath) {
          this.$router.push({
            path: menu.fullRoutePath
          })
        }
      },

      onToggleSubmenu(menu, index, e) {

        // console.log(this.$parent.$options.name);

        if (!menu.hasOwnProperty("showSubMenu")) {
          this.$set(menu, "showSubMenu", false);
        }

        // 切换选择状态
        this.$set(menu, "showSubMenu", !menu.showSubMenu);

        // 关闭所有展开菜单 还存在问题
        // this.collapse && (this.closeAll());

        this.openSubMenu(menu.key);

      },


      closeAll() {

        const close = (menuList) => {

          menuList.forEach(menu => {
            if (menu.hasOwnProperty("children")) {
              this.$set(menu, "showSubMenu", false);
              close(menu.children);
            }
          });

        };

        close(currentKeyObj.cloneMenuList);

      },

      // === event ===

      // === api ===

      // === api ===

      // === function ===

      /**
       * 因为涉及递归，需要找到第一个子组件
       */
      findFirstParent() {
        let parent = this;
        while (parent.$parent && parent.$parent.$options.name == "ef-menu") {
          parent = parent.$parent;
        }
        return parent;
      },

      findParentPath(list, keyCopy, includeSelf = false) {
        for (let i = 0; i < list.length; i++) {
          let menu = list[i];
          let parent = includeSelf ? [menu] : []; // 初始化父级路径
          if (menu.key == keyCopy) {
            return parent;
          } else {
            if (Array.isArray(menu.children) && menu.children.length > 0) {
              !includeSelf && (parent.push(menu));
              let deepRes = this.findParentPath(menu.children, keyCopy, includeSelf);
              if (deepRes != null) { // 找到key了
                return [...parent, ...deepRes];
              }
            }
          }
        }
        return null; // 默认路径 parents 为空 未找到
      },

      test() {
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
      if (this.subLevel == 1) { // 只有第一个子组件，需要备份menuList，递归子组件需要使用完整的menuList
        currentKeyObj.cloneMenuList = this.menuList;
        currentKeyObj.firstParent = this;
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
