## Message消息提示
常用于主动操作后的反馈提示

## 基本使用
从顶部出现，3 秒后自动消失。

<div class="md-button-wrapper flex-base">
	<ef-button class="margin-top margin-right"  @click="$message.success('成功了成功了成功了成功了')">success</ef-button>
	<ef-button class="margin-top margin-right"  @click="$message.error('错误错误错误错误错误错误错误错误')">error</ef-button>
	<ef-button class="margin-top margin-right"  @click="$message.warn('警告警告警告')">warn</ef-button>
</div>


::: details 点击查看代码

```vue
	<ef-button class="margin-top margin-right"  @click="$message.success('成功了成功了成功了成功了')">success</ef-button>
	<ef-button class="margin-top margin-right"  @click="$message.error('错误错误错误错误错误错误错误错误')">error</ef-button>
	<ef-button class="margin-top margin-right"  @click="$message.warn('警告警告警告')">warn</ef-button>
```
:::


## 可关闭
可以添加关闭按钮。

<div class="md-button-wrapper flex-base">
	<ef-button class="margin-top margin-right"  @click="$message.error({showClose:true,message:'我是可以关闭的~'})">Click Me</ef-button>
</div>


::: details 点击查看代码

```vue
	<ef-button class="margin-top margin-right"  @click="$message.error({showClose:true,message:'我是可以关闭的~'})">Click Me</ef-button>
```
:::


## 自定义关闭时间
自定义message关闭时间

<div class="md-button-wrapper flex-base">
	<ef-button class="margin-top margin-right"  @click="$message.success({duration:1000,message:'我在一秒后就会关闭~'})">Click Me</ef-button>
</div>


::: details 点击查看代码

```vue
	<ef-button class="margin-top margin-right"  @click="$message.success({duration:1000,message:'我在一秒后就会关闭~'})">Click Me</ef-button>
```
:::



## 使用HTML片段
message属性支持传入 HTML 片段

<div class="md-button-wrapper flex-base">
	<ef-button class="margin-top margin-right"  @click="$message.success({dangerouslyUseHTMLString:true,message:'<strong>这是 <i>HTML</i> 片段</strong>'})">Click Me</ef-button>
</div>


::: details 点击查看代码

```vue
	<ef-button class="margin-top margin-right"  @click="$message.success({dangerouslyUseHTMLString:true,message:'<strong>这是 <i>HTML</i> 片段</strong>'})">Click Me</ef-button>
```
:::


## 全局方法
 Vue.prototype 添加了全局方法 $message。因此在 vue instance 中可以采用本页面中的方式调用 Message。

<div class="md-button-wrapper flex-base">
	<ef-button class="margin-top margin-right"  @click="onClick">Click Me</ef-button>
</div>


::: details 点击查看代码

```vue
	<ef-button class="margin-top margin-right"  @click="onClick">Click Me</ef-button>
	
	methods:{
		onClick(){
			this.$message({
			  type: "success",
			  dangerouslyUseHTMLString: true,
			  message: '<strong>这是 <i>HTML</i> 片段</strong>',
			  duration: 3000,
			  showClose: true
			});
		}  
	},
```
:::


## 关闭所有message
使用closeAll方法可以关闭所有message

<div class="md-button-wrapper flex-base">
	<ef-button class="margin-top margin-right"  @click="onCloseAll">Click Me</ef-button>
</div>


::: details 点击查看代码

```vue
	<ef-button class="margin-top margin-right"  @click="onCloseAll">Click Me</ef-button>
	
	methods:{
		onCloseAll(){
		  this.$message.closeAll();
		  this.$message.success("关闭成功");
		}, 
	},
```
:::



## Options
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 消息类型 | string | success,error,warn | warn |
| duration | 消息关闭时间,单位毫秒 | Number | - | 3000 |
| showClose | 是否开启关闭图标 | Boolean | - | false |
| message | 消息内容 | String | - | - |
| dangerouslyUseHTMLString | 是否开启HTML片段 | Boolean | - | false |

## Methods
调用 Message 或 this.$message 会返回当前 Message 的实例。如果需要手动关闭实例，可以调用它的 close 方法。
| 方法名      | 说明          | 
|---------- |-------------- |
| close | 关闭当前的 Message | 




<script>

export default {
  data() {
    return {
    }
  },
  methods:{
	onCloseAll(){
	  this.$message.closeAll();
	  this.$message.success("关闭成功");
	},
	onClick(){
		this.$message({
		  type: "success",
		  dangerouslyUseHTMLString: true,
		  message: '<strong>这是 <i>HTML</i> 片段</strong>',
		  duration: 3000,
		  showClose: true
		});
	}  
  },
  mounted () {

  }
}

</script>