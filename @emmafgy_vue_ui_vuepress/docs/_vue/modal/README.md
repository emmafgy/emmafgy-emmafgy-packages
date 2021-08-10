## Modal 模态框
模态对话框。

## 基本使用

<ef-modal :onCancel="onModalCancel" :onConfirm="onModalConfirm" width="520px" v-model="modalVisible" title="TEST EF-MODAL TITLE?">
<p>Some contents...</p>
<p>Some contents...</p>
<p>Some contents...</p>
</ef-modal>

<ef-button class="margin-top" @click="modalVisible=true">show modal</ef-button>

::: details 点击查看代码

```vue
	
	<ef-modal :onCancel="onModalCancel" :onConfirm="onModalConfirm" width="520px" v-model="modalVisible" title="TEST EF-MODAL TITLE?">
	<p>Some contents...</p>
	<p>Some contents...</p>
	<p>Some contents...</p>
	</ef-modal>
	
	<ef-button class="margin-top" @click="modalVisible=true">show modal</ef-button>
	

	<script>
	export default {
	  data() {
		return {
			modalVisible:false,
		}
	  },
	  methods:{
		  onModalCancel(modalInstance) {
			  this.$message.error("cancel");
		  },
		  onModalConfirm(modalInstance) {
			  this.$message.success("comfirm");
		  },
	  },
	  mounted () {

	  }
	}
	</script>
```
:::


## 延迟关闭
onConfirm中返回promise可以实现延迟关闭,使用async await 也是可以的

<ef-modal :onCancel="onModalCancel" :onConfirm="onModalConfirmPromiseV2" width="520px" v-model="modalVisiblePromise" title="TEST EF-MODAL PROMISE TITLE?">
<p>点击确定，我将在1秒后关闭...</p>
<p>点击确定，我将在1秒后关闭...</p>
<p>点击确定，我将在1秒后关闭...</p>
</ef-modal>

<ef-button class="margin-top" @click="modalVisiblePromise=true">show delay modal </ef-button>

::: details 点击查看代码

```vue
	
	<ef-modal :onCancel="onModalCancel" :onConfirm="onModalConfirmPromise" width="520px" v-model="modalVisiblePromise" title="TEST EF-MODAL PROMISE TITLE?">
		<p>点击确定，我将在1秒后关闭...</p>
		<p>点击确定，我将在1秒后关闭...</p>
		<p>点击确定，我将在1秒后关闭...</p>
	</ef-modal>

	<ef-button class="margin-top" @click="modalVisiblePromise=true">show delay modal </ef-button>
	

	<script>
	export default {
	  data() {
		return {
			modalVisiblePromise:false,
		}
	  },
	  methods:{
		  onModalCancel(modalInstance) {
			  this.$message.error("cancel");
		  },
		  // promise
		  onModalConfirmPromise(modalInstance) {
			   return new Promise((res, rej) => {
				 setTimeout(_ => {
				   res()
				 }, 1000)
			   });
		  },
		  // async
		  async onModalConfirmPromiseV2(modalInstance) {
		  		  
		  		  const testPromise = () => {
		  		    return new Promise((res, rej) => {
		  		      setTimeout(_ => {
		  		        res();
		  		      }, 1000)
		  		    })
		  		  };
		  		  
		  		  await testPromise();
		  		  
		  },
	  },
	  mounted () {

	  }
	}
	</script>
```
:::


## 自定义头部
通过插槽header自定义头部

<ef-modal :onCancel="onModalCancel" :onConfirm="onModalConfirm" width="520px" v-model="modalVisibleHeader" title="TEST EF-MODAL TITLE?">
<p>Some contents...</p>
<p>Some contents...</p>
<p>Some contents...</p>
<template #header>
 <ef-button size="middle">我是自定义头部</ef-button>
</template>
</ef-modal>

<ef-button class="margin-top" @click="modalVisibleHeader=true">show modal</ef-button>

::: details 点击查看代码

```vue
	
<ef-modal :onCancel="onModalCancel" :onConfirm="onModalConfirm" width="520px" v-model="modalVisibleHeader" title="TEST EF-MODAL TITLE?">
	<p>Some contents...</p>
	<p>Some contents...</p>
	<p>Some contents...</p>
	<template #header>
	 <ef-button size="middle">我是自定义头部</ef-button>
	</template>
</ef-modal>

<ef-button class="margin-top" @click="modalVisibleHeader=true">show modal</ef-button>
	

```
:::


## 自定义底部
通过插槽footer自定义底部

<ef-modal :onCancel="onModalCancel" :onConfirm="onModalConfirm" width="520px" v-model="modalVisibleFooter" title="TEST EF-MODAL TITLE?">
<p>Some contents...</p>
<p>Some contents...</p>
<p>Some contents...</p>
<template #footer>
 <div class="flex-base">
  <span class="flex-1"></span>
  <ef-button size="middle" @click="modalVisibleFooter=false">我是自定义的</ef-button>
 </div>
</template>
</ef-modal>

<ef-button class="margin-top" @click="modalVisibleFooter=true">show modal</ef-button>

::: details 点击查看代码

```vue
	
<ef-modal :onCancel="onModalCancel" :onConfirm="onModalConfirm" width="520px" v-model="modalVisibleFooter" title="TEST EF-MODAL TITLE?">
<p>Some contents...</p>
<p>Some contents...</p>
<p>Some contents...</p>
<template #footer>
 <div class="flex-base">
  <span class="flex-1"></span>
  <ef-button size="middle" @click="modalVisibleFooter=false">我是自定义的</ef-button>
 </div>
</template>
</ef-modal>

<ef-button class="margin-top" @click="modalVisibleFooter=true">show modal</ef-button>
	

```
:::

## Modal Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| visible | 是否可见，v-model | Boolean | - | - |
| onCancel | 确定按钮回调事件 | Funtion | - | - |
| onConfirm | 取消按钮回调事件 | Funtion | - | - |
| width | 宽度,例：520px or 19% | String | - | 520px |
| title | 头部内容 | String | - | - |
| confirmText | 确定按钮文字 | String | - | 确定 |
| cancelText | 取消按钮文字 | String | - | 取消 |
| showCancelButton | 是否显示取消按钮 | Boolean | - | false |
| showMark | 是否展示蒙版 | Boolean | - | true |
| showHeader | 是否展示头部 | Boolean | - | true |
| showFooter | 是否展示底部 | Boolean | - | true |
| showCloseIcon | 是否展示关闭按钮 | Boolean | - | true |


## Modal Slots

|插槽名|说明|
|---|---|
|header|自定义头部插槽|
|footer|自定义底部插槽|
|default|模态框主要内容插槽|

<script>
export default {
  data() {
    return {
		modalVisibleHeader:false,
		modalVisible:false,
		modalVisiblePromise:false,
		modalVisibleFooter:false
    }
  },
  methods:{
      onModalCancel(modalInstance) {
		  this.$message.error("cancel");
      },
      onModalConfirm(modalInstance) {
		  this.$message.success("comfirm");
      },
	  onModalConfirmPromise(modalInstance) {
		   return new Promise((res, rej) => {
			 setTimeout(_ => {
			   res()
			 }, 1000)
		   });
	  },
	  async onModalConfirmPromiseV2(modalInstance) {
		  
		  const testPromise = () => {
		    return new Promise((res, rej) => {
		      setTimeout(_ => {
		        res();
		      }, 1000)
		    })
		  };
		  
		  await testPromise();
		  
	  },
  },
  mounted () {

  }
}
</script>