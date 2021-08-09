## Checkbox 多选
多选

## 基本使用

<div class="flex-base margin-top">
<ef-checkbox v-model="checked">check</ef-checkbox>
</div>

::: details 点击查看代码

```vue
	
<ef-checkbox v-model="checked">check</ef-checkbox>

<script>
export default {
  data() {
    return {
		checked:true,
    }
  },
  methods:{

  },
  mounted () {

  }
}
</script>

```
:::


## 禁止的checkbox

<div class="flex-base margin-top">
<ef-checkbox v-model="checked" :disabled="true">check</ef-checkbox>
</div>

::: details 点击查看代码

```vue
	
<ef-checkbox v-model="checked" :disabled="true">check</ef-checkbox>

<script>
export default {
  data() {
    return {
		checked:true,
    }
  },
  methods:{

  },
  mounted () {

  }
}
</script>

```
:::

## 绑定值的checkbox
dataValue属性可以绑定一个值，change事件可以将它返回

<div class="flex-base margin-top">
<ef-checkbox v-model="checked2" dataValue="hello checkbox" @change="onChange">check</ef-checkbox>
</div>

::: details 点击查看代码

```vue
	
<ef-checkbox v-model="checked2" dataValue="hello checkbox" @change="onChange">check</ef-checkbox>


<script>
export default {
  data() {
    return {
		checked2:false,
    }
  },
  methods:{
	  onChange(checked,dataValue){
		  console.log(checked,dataValue);
		  this.$message.success(`我是绑定的值：${dataValue}`);
	  }
  },
  mounted () {

  }
}
</script>

```
:::

## 多选组

<div class="margin-top">
<ef-checkbox-group :disabled="false" :options="checkboxGroupOption" v-model="checkboxGroupValue"
@change="onCheckboxGroupChange"></ef-checkbox-group>
</div>

::: details 点击查看代码

```vue
	
<ef-checkbox-group :disabled="false" :options="checkboxGroupOption" v-model="checkboxGroupValue"
@change="onCheckboxGroupChange"></ef-checkbox-group>


<script>
export default {
  data() {
    return {
		checkboxGroupOption: [{
		    value: "aaa",
		    label: "check-a"
		  },
		  {
		    value: "bbb",
		    label: "check-b"
		  },
		  {
		    value: "ccc",
		    label: "check-c"
		  },
		],
		checkboxGroupValue: ["aaa"]
    }
  },
  methods:{
	  onCheckboxGroupChange(currentSelectedArray, currentChecked, currentValue) {
	    console.log("currentSelectedArray, currentChecked, currentValue", currentSelectedArray, currentChecked, currentValue);
		this.$message.success("请打开控制台查看");
	  },
  },
  mounted () {

  }
}
</script>

```
:::


## Checkbox Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 是否选中，v-model | - | - | - |
| disabled | 是否禁止 | Boolean | - | false |
| dataValue | 绑定的值 | - | - | - |

## Checkbox Event
|事件名|说明|回调参数|
|---|---|---|
|change|值改变时触发|Function(checked,dataValue)|


## CheckboxGroup Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 选中的checkbox，v-model | Array| - | - |
| disabled | 是否禁止 | Boolean | - | false |
| options | 选项配置 | Array | - | - |

## CheckboxGroup Event
|事件名|说明|回调参数|
|---|---|---|
|change|值改变时触发|Function(currentSelectedArray,checked,dataValue)|

<script>
export default {
  data() {
    return {
		checked:true,
		checked2:false,
		checkboxGroupOption: [{
		    value: "aaa",
		    label: "check-a"
		  },
		  {
		    value: "bbb",
		    label: "check-b"
		  },
		  {
		    value: "ccc",
		    label: "check-c"
		  },
		],
		checkboxGroupValue: ["aaa"]
    }
  },
  methods:{
	  onChange(checked,dataValue){
		  console.log(checked,dataValue);
		  this.$message.success(`我是绑定的值：${dataValue}`);
	  },
	  onCheckboxGroupChange(currentSelectedArray, currentChecked, currentValue) {
	    console.log("currentSelectedArray, currentChecked, currentValue", currentSelectedArray, currentChecked, currentValue);
		this.$message.success("请打开控制台查看");
	  },
  },
  mounted () {

  }
}
</script>