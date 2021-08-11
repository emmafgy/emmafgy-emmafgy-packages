## Menu菜单
为网站提供导航功能的菜单。

## 基本使用
设置menuList即可

<div class="md-menu-wrapper" style="width: 300px;padding:20px 0 ;">
	<ef-menu ref="ef-menu" @change="onMenuChange" :menuList="menuList"></ef-menu>
</div>

<ef-button @click="$refs['ef-menu'].selectMenu(10)">select key</ef-button>

::: details 点击查看代码

```vue
	<div class="md-menu-wrapper" style="width: 300px;padding:20px 0 ;">
		<ef-menu ref="ef-menu" @change="onMenuChange" :menuList="menuList"></ef-menu>
	</div>
	
	<script>
	export default {
	  data() {
		return {
			menuList:[
				{
						key: "1",
						label: "menu one",
						icon: "icon-all-fill",
						fullRoutePath: "/",
						children: [{
								key: "12",
								label: "menu one",
								// icon: "icon-all-fill",
								// customIconClass:"iconfont icon-menu",
							},
							{
								key: "13",
								label: "menu two",
								// icon: "icon-all-fill",
								// customIconClass:"iconfont icon-menu",
							},
						]
						// customIconClass:"iconfont icon-menu",
					},
					{
						key: "2",
						label: "menu two",
						icon: "icon-all-fill",
						// customIconClass:"iconfont icon-menu",
					},
					{
						key: "4",
						label: "menu three",
						icon: "icon-all-fill",
						// showSubMenu: true,
						children: [{
								key: "5",
								label: "menu one",
								// icon: "icon-all-fill",
								// customIconClass:"iconfont icon-menu",
							},
							{
								key: "6",
								label: "menu two",
								// icon: "icon-all-fill",
								// customIconClass:"iconfont icon-menu",
							},
							{
								key: "9",
								label: "menu nine",
								icon: "icon-all-fill",
								children: [{
										key: "10",
										label: "menu one",
										// icon: "icon-all-fill",
										// customIconClass:"iconfont icon-menu",
									},
									{
										key: "11",
										label: "menu two",
										// icon: "icon-all-fill",
										// customIconClass:"iconfont icon-menu",
									},
								]
							}
						]
					},
					{
						key: "7",
						label: "menu two",
						icon: "icon-all-fill",
						// customIconClass:"iconfont icon-menu",
					},
					{
						key: "8",
						label: "menu twomenu twomenu",
						icon: "icon-all-fill",
						children: [{
								key: "18",
								label: "menu one",
								// icon: "icon-all-fill",
								// customIconClass:"iconfont icon-menu",
							},
							{
								key: "19",
								label: "menu two",
								// icon: "icon-all-fill",
								// customIconClass:"iconfont icon-menu",
							},
						]
						// customIconClass:"iconfont icon-menu",
					},
				
			]
		}
	  },
	  methods:{
		  onMenuChange(key, menu) {
			console.log(key, menu);
			this.$message.success("请打开控制台查看");
		  },
	  },
	  mounted () {

	  }
	}
	</script>
```
:::


## Menu Item Attr
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| key | 菜单项唯一标识 | String | - | - |
| label | 菜单项文字 | String | - | - |
| icon | 菜单项图标 | String | 参照Icon图标组件 | - |
| customIconClass | 菜单项自定义图标class | String | - | - |
| fullRoutePath | 完整路径路径，如果填写点击则会出发Vue Router 跳转 | String | - | error |
| children | 子级，配置项同上 | Array | - | - |

## Methods
| 方法名      | 说明          | 参数|
|---------- |-------------- |----|
| selectMenu | 选择菜单项，ref使用 |Function(key),菜单项key| 

<script>

import {
	menuList
} from "../data.js";

export default {
  data() {
    return {
		menuList
    }
  },
  methods:{
	  onMenuChange(key, menu) {
	    console.log(key, menu);
		this.$message.success("请打开控制台查看");
	  },
  },
  mounted () {

  }
}

</script>