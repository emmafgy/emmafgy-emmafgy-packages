## Alert消息提示
模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息。

## 基本使用
<div class="md-button-wrapper flex-base">
	<ef-button class="margin-top margin-right"  @click="onAlertBase">Click Me</ef-button>
</div>

::: details 点击查看代码

```vue
	<ef-button class="margin-top margin-right"  @click="onAlertBase">Click Me</ef-button>
	
	  onAlertBase(){
		 
		 this.$alert({
		   title: "我是TITLE",
		   maxWidth:500,
		   body: "我是Body，我是Body，我是Body，我是Body我是Body，我是Body，我是Body，我是Body我是Body，我是Body，我是Body，我是Body",
		   iconType: "success",
		   onConfirm:  () => {
			   this.$message.success("confirm");
		   },
		   onCancel: () => {
			   this.$message.error("cancel");
		   },
		 		  
		 });  
		        
	  }
```
:::

## 延迟关闭
onConfirm中返回promise可以实现延迟关闭

<div class="md-button-wrapper flex-base">
	<ef-button class="margin-top margin-right"  @click="onAlertPromise">Click Me</ef-button>
</div>

::: details 点击查看代码

```vue
	<ef-button class="margin-top margin-right"  @click="onAlertPromise">Click Me</ef-button>
	
	  onAlertPromise(){
		  this.$alert({
		    title: "延迟关闭",
		    maxWidth:500,
		    body: "我是返回了Promise，我可以实现延迟关闭。",
		    iconType: "success",
		    onConfirm:  () => {
			   return new Promise((res, rej) => {
				 setTimeout(_ => {
				   res()
				 }, 1000)
			   });
		    },
		    onCancel: () => {
			   this.$message.error("cancel");
		    },
		  		  
		  });  
	  },
	  
	  // 当然 async await 也是支持的
	  onAlertPromiseV2(){
	  		  
	  		  const testPromise = () => {
	  		    return new Promise((res, rej) => {
	  		      setTimeout(_ => {
	  		        res();
	  		      }, 1000)
	  		    })
	  		  };
	  		  
	  		  
	  		  this.$alert({
	  			title: "延迟关闭",
	  			maxWidth:500,
	  			body: "我是返回了Promise，我可以实现延迟关闭。",
	  			iconType: "success",
	  			onConfirm: async () => {			
	  				await testPromise();
	  			},
	  			onCancel: () => {
	  			   this.$message.error("cancel");
	  			},
	  				  
	  		  });  
	  		  
	  }
	  
```
:::


## Options
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| maxWidth | 最大宽度 | String|Number | - | 600 |
| showMark | 是否展示蒙版 | Boolean | - | true |
| showIcon | 是否展示图标 | Boolean | - | true |
| iconType | 图标类型 | String | - | error |
| title | 头部内容 | String | - | - |
| body | 主要内容，支持HTML片段 | String | - | - |
| confirmText | 确定按钮文字 | String | - | 确定 |
| cancelText | 取消按钮文字 | String | - | 取消 |
| showCancelButton | 是否显示取消按钮 | Boolean | - | false |
| onCancel | 确定按钮回调事件 | Funtion | - | - |
| onConfirm | 取消按钮回调事件 | Funtion | - | - |



<script>

export default {
  data() {
    return {
    }
  },
  methods:{
	  onAlertBase(){
		 
		 this.$alert({
		   title: "基本使用",
		   maxWidth:500,
		   body: "我是Body，我是Body，我是Body，我是Body我是Body，我是Body，我是Body，我是Body我是Body，我是Body，我是Body，我是Body",
		   iconType: "success",
		   onConfirm:  () => {
			   this.$message.success("confirm");
		   },
		   onCancel: () => {
			   this.$message.error("cancel");
		   },
		 		  
		 });  
		        
	  },
	  onAlertPromise(){
		  this.$alert({
		    title: "延迟关闭",
		    maxWidth:500,
		    body: "我是返回了Promise，我可以实现延迟关闭。",
		    iconType: "success",
		    onConfirm:  () => {
			   return new Promise((res, rej) => {
				 setTimeout(_ => {
				   res()
				 }, 1000)
			   });
		    },
		    onCancel: () => {
			   this.$message.error("cancel");
		    },
		  		  
		  });  
	  },
	  onAlertPromiseV2(){
		  
		  const testPromise = () => {
		    return new Promise((res, rej) => {
		      setTimeout(_ => {
		        res();
		      }, 1000)
		    })
		  };
		  
		  
		  this.$alert({
			title: "延迟关闭",
			maxWidth:500,
			body: "我是返回了Promise，我可以实现延迟关闭。",
			iconType: "success",
			onConfirm: async () => {			
				await testPromise();
			},
			onCancel: () => {
			   this.$message.error("cancel");
			},
				  
		  });  
		  
	  }
  },
  mounted () {

  }
}

</script>