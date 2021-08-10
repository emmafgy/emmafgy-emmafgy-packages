## Table表格
用于展示多条结构类似的数据，可对数据进行排序或其他自定义操作。


<!-- 基础表格 -->
## 基础表格

指定dataSource，columns，rowKey 属性即可，rowKey=每行数据的唯一标识，v-for需要使用，务必设置

<div class="md-table-wrapper">
<ef-table  :dataSource="dataSource" :columns="columns" rowKey="employeeId"  ></ef-table>
</div>

::: details 点击查看代码
```vue
 <template>
	<ef-table  :dataSource="dataSource" :columns="columns" rowKey="employeeId"  ></ef-table>
  </template>
  <script>
  const columns = [
    {
      dataIndex: 'employeeId',
      key: 'employeeId',
      title: "工号",
    },
    {
      dataIndex: 'base2',
      key: 'base2',
      title: "基本工资2",
    },
    {
      dataIndex: 'base3',
      key: 'base3',
      title: "基本工资3",
    },    {
      dataIndex: 'base4',
      key: 'base4',
      title: "基本工资4",
    },    {
      dataIndex: 'base5',
      key: 'base5',
      title: "基本工资5",
    }, {
      dataIndex: "sxWage",
      key: "sxWage",
      title: "实习工资",
    }, {
      dataIndex: "wageTotal",
      key: "wageTotal",
      title: "总工资",
    }
  ];
  export default {
    data() {
		const getRandomNumber = (min,max)=> Math.round(Math.random() * (max - min) + min) ;
		const getData1 = (num) => {
			  let dataSource = [];
			  for (let i = 1; i <=num; i++) {
				dataSource.push({
				  employeeId: "sx00" + i,
				  base2: getRandomNumber(100,1000),
				  base3: getRandomNumber(100,1000),
				  base4: getRandomNumber(100,1000),
				  base5: getRandomNumber(100,1000),
				  sxWage: getRandomNumber(100,1000),
				  wageTotal: getRandomNumber(100,1000)
				});
			  }
			  return dataSource;
		}
      return {
  		dataSource:getData1(5),
  		columns,
      }
    },
    mounted () {
  
    }
  }
  </script>
  
```

:::

<!-- 基础表格 -->


<!-- 带斑马纹表格 -->
## 带斑马纹表格
设置属性stripe=true即可

<div class="md-table-wrapper">
	<ef-table  :dataSource="dataSource" :columns="columns" rowKey="employeeId" :stripe="true" ></ef-table>
</div>

::: details 点击查看代码
```vue
	// 实例数据在基础表格
	<ef-table  :dataSource="dataSource" :columns="columns" rowKey="employeeId" :stripe="true" ></ef-table>
```
:::
<!-- 带斑马纹表格 -->


<!-- 带边框表格 -->
## 带边框表格
设置属性bordered=true即可

<div class="md-table-wrapper">
	<ef-table width="100%" :dataSource="dataSource" :columns="columns" rowKey="employeeId" :bordered="true" ></ef-table>
</div>

::: details 点击查看代码
```vue
	// 实例数据在基础表格
	<ef-table  :dataSource="dataSource" :columns="columns" rowKey="employeeId" :bordered="true" ></ef-table>
```
:::
<!-- 带边框表格 -->


<!-- 设置表格size -->
## 设置表格size
设置属性size即可,可选值有small middle

small
<div class="md-table-wrapper">
	<ef-table  :dataSource="dataSource" :columns="columns" rowKey="employeeId" size="small" ></ef-table>
</div>

middle
<div class="md-table-wrapper">
	<ef-table  :dataSource="dataSource" :columns="columns" rowKey="employeeId" size="middle" ></ef-table>
</div>

::: details 点击查看代码
```vue
	// 实例数据在基础表格
	<ef-table  :dataSource="dataSource" :columns="columns" rowKey="employeeId" size="small" ></ef-table>
	<ef-table  :dataSource="dataSource" :columns="columns" rowKey="employeeId" size="middle" ></ef-table>
```
:::
<!-- 设置表格size -->


<!-- 固定表头 -->
## 固定表头
设置属性fixedHeader=true，在设置height,width属性（直接使用style属性设置width，height也可以）配合即可
#### 其他说明
1. 列最好不要全部设置width，建议留一列不设置宽度自适应，否则可能会出现 header 与 body 列对不齐


<div class="md-table-wrapper">
	<ef-table height="400" :fixedHeader="true" :dataSource="dataSourceMore" :columns="columnsV2" rowKey="employeeId" size="middle" ></ef-table>
</div>

::: details 点击查看代码
```vue
	// 实例数据在基础表格
	<ef-table style="height:400px" :fixedHeader="true" :dataSource="dataSourceMore" :columns="columns" rowKey="employeeId" size="middle" ></ef-table>
 or	<ef-table height="400" :fixedHeader="true" :dataSource="dataSourceMore" :columns="columns" rowKey="employeeId" size="middle" ></ef-table>
```
:::
<!-- 固定表头 -->

<!-- 固定列 -->
## 固定列
设置column属性fixed即可，可选值，left，right
#### 其他说明
1. 固定列建议设置width，如果没设置也是有默认值

<div class="md-table-wrapper flex-center">
	<ef-table height="400" width="700" :dataSource="dataSourceMore" :columns="columnsFixed" rowKey="employeeId" size="middle" ></ef-table>
</div>

::: details 点击查看代码
```vue{6,12}
	
	// 列配置在基础表格，以下是固定列的改动
	    {
	      dataIndex: 'employeeId',
	      key: 'employeeId',
	      title: "工号",
		  fixed:"left" 
	    },
		{
		  dataIndex: "wageTotal",
		  key: "wageTotal",
		  title: "总工资",
		  fixed:"right"
		}
	
	// 实例数据在基础表格
	<ef-table style="height:400px;width:700px"  :dataSource="dataSourceMore" :columns="columns" rowKey="employeeId" size="middle" ></ef-table>
 or	<ef-table height="400" width="700"  :dataSource="dataSourceMore" :columns="columns" rowKey="employeeId" size="middle" ></ef-table>
```
:::
<!-- 固定列 -->



<!-- 固定头列 -->
## 固定头列
设置table属性fixedHeader=true&设置column属性fixed即可，可选值，left，right


<div class="md-table-wrapper flex-center">
	<ef-table height="400" width="700" :fixedHeader="true" :dataSource="dataSourceMore" :columns="columnsFixed" rowKey="employeeId" size="middle" ></ef-table>
</div>

::: details 点击查看代码
```vue{6,12}
	
	// 列配置在基础表格，以下是固定列的改动
	    {
	      dataIndex: 'employeeId',
	      key: 'employeeId',
	      title: "工号",
		  fixed:"left" 
	    },
		{
		  dataIndex: "wageTotal",
		  key: "wageTotal",
		  title: "总工资",
		  fixed:"right"
		}
	
	// 实例数据在基础表格
	<ef-table style="height:400px;width:700px" :fixedHeader="true" :dataSource="dataSourceMore" :columns="columns" rowKey="employeeId" size="middle" ></ef-table>
 or	<ef-table height="400" width="700" :fixedHeader="true" :dataSource="dataSourceMore" :columns="columns" rowKey="employeeId" size="middle" ></ef-table>
```
:::
<!-- 固定头列 -->

<!-- 多选 -->
## 多选
设置属性selectedConfig，对应的事件为@checkboxChange，多选配置selectedConfig.selectedValue只要table组件未销毁是没有清空的，也就是dataSource改变不会影响上次的多选结果，详情查看代码

<div class="md-table-wrapper">
	<ef-table @checkboxChange="oncheckboxChange" :selectedConfig="selectedConfig" height="400" :fixedHeader="true" :dataSource="dataSourceMore" :columns="columnsV2" rowKey="employeeId" size="middle" ></ef-table>
	<div class="flex-base margin-top">
		<ef-button class="" type="primary" @click="onSelect12">选中1，2行</ef-button>
		<ef-button class="margin-left" type="primary" @click="onUnSelect">清空选中</ef-button>	
		<ef-button class="margin-left" type="primary" @click="onPrintSelectedValue">打印当前选中值（控制台查看）</ef-button>	
	</div>
</div>

::: details 点击查看代码
```vue
	
	// 实例数据在基础表格
	<ef-table @checkboxChange="oncheckboxChange" :selectedConfig="selectedConfig" height="400" :fixedHeader="true" :dataSource="dataSourceMore" :columns="columnsV2" rowKey="employeeId" size="middle" ></ef-table>
	<div class="flex-base margin-top">
		<ef-button class="" type="primary" @click="onSelect12">选中1，2行</ef-button>
		<ef-button class="margin-left" type="primary" @click="onUnSelect">清空选中</ef-button>	
		<ef-button class="margin-left" type="primary" @click="onPrintSelectedValue">打印当前选中值（控制台查看）</ef-button>	
	</div>
	
	// selectedConfig 全部配置
	data(){
		return {
			selectedConfig: {
			  showSelectAll: true, // 是否开启全选
			  width: 50, // 多选列的宽度
			  selectedValue: [], // 控制选中的值 ，双向绑定
			  bindDataIndex: "employeeId", // checkbox 绑定的row-key
			  rowHighLighted: true, // td 高亮
			  rowClick: true, // 单击行选中
			},
		}
	}
	
	// methods
	methods:{
		onSelect12(){
			this.selectedConfig.selectedValue = ['sx001','sx002'];
		},
		onUnSelect(){
			this.selectedConfig.selectedValue = [];
		},
		onPrintSelectedValue(){
			this.$message.success("打印成功，请打开控制台查看");
			console.log("selectedValue",this.selectedConfig.selectedValue);
		},
		/**
		 * @param {Array} selectedValue 选中的值 类型为数组
		 * @param {bool} checked 当前点击行的状态 true=选中 false=取消选中
		 * @param {Object} value 当前点击行绑定的value
		 */
		oncheckboxChange(selectedValue, checked, value) {
		  console.log(selectedValue, checked, value);
		},
	},
	
```
:::
<!-- 多选 -->



<!-- 单选 -->
## 单选
多选的灵活使用，1.selectedConfig.selectedValue双向绑定，2.多选事件@checkboxChange，详情查看代码

<div class="md-table-wrapper">
	<ef-table @checkboxChange="oncheckboxChangeRadio" :selectedConfig="selectedConfigRadio" height="400" :fixedHeader="true" :dataSource="dataSourceMore" :columns="columnsV2" rowKey="employeeId" size="middle" ></ef-table>
</div>

::: details 点击查看代码
```vue
	
	// 实例数据在基础表格
	<ef-table @checkboxChange="oncheckboxChangeRadio" :selectedConfig="selectedConfigRadio" height="400" :fixedHeader="true" :dataSource="dataSourceMore" :columns="columnsV2" rowKey="employeeId" size="middle" ></ef-table>
	
	// selectedConfig 全部配置
	data(){
		return {
			selectedConfigRadio: {
			  showSelectAll: false, // 是否开启全选
			  width: 50, // 多选列的宽度
			  selectedValue: [], // 控制选中的值 ，响应式
			  bindDataIndex: "employeeId", // checkbox 绑定的row-key
			  rowHighLighted: true, // td 高亮
			  rowClick: true, // 单击行选中
			},
		}
	}
	
	// methods
	methods:{
		oncheckboxChangeRadio(selectedValue, checked, value){
			if(checked===true){
				this.selectedConfigRadio.selectedValue = [value];
			}
		}
	},
	
```
:::
<!-- 单选 -->



<!-- 排序 -->
## 排序
设置列属性sort即可（可设置默认排序方向，asc=正序 desc=倒叙 unset=无），配合@sortChange事件使用

<div class="md-table-wrapper">
	<ef-table @sortChange="onSortChange" height="400" :fixedHeader="true" :dataSource="dataSourceMore" :columns="columsOrder" rowKey="employeeId" size="middle" ></ef-table>
</div>

::: details 点击查看代码
```vue{9}
	// 实例数据在基础表格
	<ef-table @sortChange="onSortChange" height="400" :fixedHeader="true" :dataSource="dataSourceMore" :columns="columsOrder" rowKey="employeeId" size="middle" ></ef-table>	
	
	// 列配置在基础表格，以下是排序的改动
	    {
	      dataIndex: 'employeeId',
	      key: 'employeeId',
	      title: "工号",
		  order:"unset", // asc=正序 desc=倒叙 unset=无
	    }
	//methods
	methods:{
		onSortChange(sort, col) {
			this.$message.success("请打开控制台查看");
			console.log(sort, col);
		},
	}
	
```
:::
<!-- 排序 -->


<!-- 自定义列 -->
## 自定义列
设置列属性customRowRender指定插槽（slot）配置使用

<div class="md-table-wrapper">
	<ef-table  height="400" :fixedHeader="true" :dataSource="dataSourceMore" :columns="columsRowRender" rowKey="employeeId" size="middle" >
		<template #order="{row,text,index}">{{index}}</template>
		<template #employeeId="{row,text,index}">
			<span style="color:red">{{text}}</span>
		</template>
		<template #op="{row,text,index}">
			<div class="flex-center">
				<ef-button size="medium" type="primary" @click="$message.success('编辑')">编辑</ef-button>	
				<ef-button class="margin-left" size="medium"  type="danger" @click="$message.error('删除')">删除</ef-button>	
			</div>
		</template>
	</ef-table>
</div>

::: details 点击查看代码
```vue{22,29}

	// 实例数据在基础表格
	<ef-table  height="400" :fixedHeader="true" :dataSource="dataSourceMore" :columns="columsRowRender" rowKey="employeeId" size="middle" >
		<template #order="{row,text,index}">{{index}}</template>
		<template #employeeId="{row,text,index}">
			<span style="color:red">{{text}}</span>
		</template>
		<template #op="{row,text,index}">
			<div class="flex-center">
				<ef-button size="medium" type="primary" @click="$message.success('编辑')">编辑</ef-button>	
				<ef-button class="margin-left" size="medium"  type="danger" @click="$message.error('删除')">删除</ef-button>	
			</div>
		</template>
	</ef-table>
	
	// 列配置在基础表格，以下是自定义列的改动，
		{
		 // dataIndex: 'employeeId',
		  key: 'order',
		  title: "序号",
		  fixed:"left",
		  customRowRender:"order"
		},
	    {
	      dataIndex: 'employeeId',
	      key: 'employeeId',
	      title: "工号",
		  fixed:"left",
		  customRowRender:"employeeId"
	    }

	
```
:::
<!-- 自定义列 -->


<!-- 自定义表头 -->
## 自定义表头
设置列属性customTitleRender指定插槽（slot）配置使用

<div class="md-table-wrapper">
	<ef-table  height="400" :fixedHeader="true" :dataSource="dataSourceMore" :columns="columsTitleRender" rowKey="employeeId" size="middle" >
		<template #order="{row,text,index}">{{index}}</template>
		<template #employeeId="{row,text,index}">
			<span style="color:red">{{text}}</span>
		</template>
		<template #op="{row,text,index}">
			<div class="flex-center">
				<ef-button size="medium" type="primary" @click="$message.success('编辑')">编辑</ef-button>	
				<ef-button class="margin-left" size="medium"  type="danger" @click="$message.error('删除')">删除</ef-button>	
			</div>
		</template>
		<!-- 表头插槽 -->
		<template #opTitle="{col,title}">
			<div class="flex-center" style="width:100%">
				<ef-button size="medium"  @click="$message.success('操作')">{{title}}</ef-button>
			</div>
		</template>
	</ef-table>
</div>

::: details 点击查看代码
```vue{29}

	// 实例数据在基础表格
	<ef-table  height="400" :fixedHeader="true" :dataSource="dataSourceMore" :columns="columsTitleRender" rowKey="employeeId" size="middle" >
		<template #order="{row,text,index}">{{index}}</template>
		<template #employeeId="{row,text,index}">
			<span style="color:red">{{text}}</span>
		</template>
		<template #op="{row,text,index}">
			<div class="flex-center">
				<ef-button size="medium" type="primary" @click="$message.success('编辑')">编辑</ef-button>	
				<ef-button class="margin-left" size="medium"  type="danger" @click="$message.error('删除')">删除</ef-button>	
			</div>
		</template>
		<!-- 表头插槽 -->
		<template #opTitle="{col,title}">
			<div class="flex-center" style="width:100%">
				<ef-button size="medium"  @click="$message.success('操作')">{{title}}</ef-button>
			</div>
		</template>
	</ef-table>
	
	// 列配置在基础表格，以下是自定义列的改动，
	    {
	      key: 'op',
	      title: "操作",
		  fixed:"right",
		  width:"200",
		  customRowRender:"op",
		  customTitleRender:"opTitle"
	    }

	
```
:::
<!-- 自定义表头 -->

<!-- 多级表头 -->
## 多级表头
设置列属性children

<div class="md-table-wrapper">
	<ef-table height="600" :bordered="true" :dataSource="rowspanData" :columns="rowspanColumns" rowKey="key" size="middle" :fixedHeader="true"></ef-table>
</div>
<!-- 多级表头 -->

::: details 点击查看代码
```vue

	<ef-table height="600" :bordered="true" :dataSource="rowspanData" :columns="rowspanColumns" rowKey="key" size="middle" :fixedHeader="true"></ef-table>
	
	// data
	data(){
		
		const getData2 = (num) => {
				  let dataSource = [];
				  for (let i = 1; i <=num; i++) {
					dataSource.push({
						  key: i,
						  name: 'John Brown',
						  age: i + 1,
						  street: 'Lake Park',
						  building: 'C',
						  number: 2035,
						  companyAddress: 'Lake Street 42',
						  companyName: 'SoftLake Co',
						  gender: 'M',
						});
				  }
				  return dataSource;
		}
		
		return {
			rowspanData:getData2(30),
			rowspanColumns:[
				{
						title: 'Name',
						dataIndex: 'name',
						key: 'name',
						width: 100,
						fixed: 'left',
					},
					{
						title: 'Other',
						// fixed:"left",
						children: [{
								title: 'Age',
								dataIndex: 'age',
								key: 'age',
								width: 200
							},
							{
								title: 'Address',
								// fixed: "left",
								children: [{
										title: 'Street',
										dataIndex: 'street',
										key: 'street',
										width: 200,
									},
									{
										title: 'Block',
										children: [{
												title: 'Building',
												dataIndex: 'building',
												key: 'building',
												width: 100,
											},
											{
												title: 'Door No.',
												dataIndex: 'number',
												key: 'number',
												width: 100,
											},
										],
									},
								],
							},
						],
					},
					{
						title: 'Company',
						children: [{
								title: 'Company Address',
								dataIndex: 'companyAddress',
								key: 'companyAddress',
								width: 200,
							},
							{
								title: 'Company Name',
								dataIndex: 'companyName',
								key: 'companyName',
							},
						],
					},
					{
						title: 'Gender',
						dataIndex: 'gender',
						key: 'gender',
						width: 80,
						fixed: 'right',
					},

			]
		}
	}

	
```
:::
<!-- 多级表头 -->

<!-- loading -->
## loading
设置属性loading,可通过name=loading的插槽自定义loading，详见代码
<div class="md-table-wrapper">
	<ef-table :loading="true" height="400" :fixedHeader="true" :dataSource="dataSourceMore" :columns="columnsV2" rowKey="employeeId" size="middle" >
	</ef-table>
</div>

::: details 点击查看代码
```vue
	// 实例数据在基础表格
	<ef-table :loading="true" height="400" :fixedHeader="true" :dataSource="dataSourceMore" :columns="columnsV2" rowKey="employeeId" size="middle" >
<!-- 		<template #loading>
			<span style="color:red">自定义加载中</span>
		</template> -->
	</ef-table>
```
:::
<!-- loading -->

## nodata
数据dataSource为空时,可通过name=nodata的插槽自定义nodata，详见代码
<div class="md-table-wrapper">
	<ef-table  height="400" :fixedHeader="true" :dataSource="[]" :columns="columnsV2" rowKey="employeeId" size="middle" >
	</ef-table>
</div>

::: details 点击查看代码
```vue
	// 实例数据在基础表格
	<ef-table  height="400" :fixedHeader="true" :dataSource="[]" :columns="columnsV2" rowKey="employeeId" size="middle" >
<!-- 		<template #nodata>
			<span style="color:red">暂无数据</span>
		</template> -->
	</ef-table>
```
:::

<!-- nodata -->

<!-- 列配置器 -->
## 列配置器
使用另外一种方式来配置列，详见代码
```js

data(){
	
	// map 给个key 都会生成列对象的一个属性，所以key的可选值是列所有配置项
	const columsMap = {
		key: 'employeeId|base2|base3|base4|base5|sxWage|wageTotal',
		title: "工号|基本工资2|基本工资3|基本工资4|基本工5|实习工资|总工资11",
		width: "120|200|200|200|200|200|---",
		// fixed: "--|--|--|--|--|--|--|right",
		// customRowRender: "name|---|---|---|---|--|--|--|",
		// customTitleRender: "",
		// sort: "unset|asc|--|desc|--|--|--"
	};
	
	// 已经全部导入组件，可以直接使用 Vue.prototype.$efUtil.genColumns
	const columnsV2 = this.$efUtil.genColumns(columsMap);
	
	/** 按需导入 
	 import * as Util from "@emmafgy/vue-components/lib/util";
	 Vue.prototype.$efUtil = Util;
	 const columnsV2 = this.$efUtil.genColumns(columsMap);
	 */
	
	
	// columnsV2
	/**
	[
		{
		      dataIndex: 'employeeId',
		      key: 'employeeId',
		      title: "工号",
			  width:"120"
		 },
		 ...
	]
	 */
	
	return {
		columnsV2
	}
	
}

```
<div class="md-table-wrapper">
	<ef-table  height="400" :fixedHeader="true" :dataSource="dataSourceMore" :columns="columnsV2" rowKey="employeeId" size="middle" >	</ef-table>
</div>

::: details 点击查看代码
```vue
	// 实例数据在基础表格
	<ef-table  height="400" :fixedHeader="true" :dataSource="dataSourceMore" :columns="columnsV2" rowKey="employeeId" size="middle" >	</ef-table>
	
	// data
	
	data(){
		// map 给个key 都会生成列对象的一个属性，所以key的可选值是列所有配置项
		const columsMap = {
			key: 'employeeId|base2|base3|base4|base5|sxWage|wageTotal',
			title: "工号|基本工资2|基本工资3|基本工资4|基本工5|实习工资|总工资11",
			width: "120|200|200|200|200|200|---",
			// fixed: "--|--|--|--|--|--|--|right",
			// customRowRender: "name|---|---|---|---|--|--|--|",
			// customTitleRender: "",
			// sort: "unset|asc|--|desc|--|--|--"
		};
		
		// 已经全部导入组件，可以直接使用 Vue.prototype.$efUtil.genColumns
		const columnsV2 = this.$efUtil.genColumns(columsMap);
		
		/** 按需导入
		 import * as Util from "@emmafgy/vue-components/lib/util";
		 Vue.prototype.$efUtil = Util;
		 const columnsV2 = this.$efUtil.genColumns(columsMap);
		 */
		
		// columnsV2
		/**
		[
			{
			      dataIndex: 'employeeId',
			      key: 'employeeId',
			      title: "工号",
				  width:"120"
			 },
			 ...
		]
		 */
		
		return {
			columnsV2
		}
		
	}
```
:::
<!-- 列配置器 -->


## Table Attributes 
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| dataSource | 表格数据列表,必须 | Array | — | — |
| columns | 列配置，必须 | Array | — | — |
| rowKey | 表格行 key 的取值，必须 | String | — | — |
| selectedConfig | 多选配置,详见SelectedConfig配置 | Object | — | — |
| size | 表格尺寸 | String | small,middle | — |
| width | 表格宽度,可以直接使用style属性控制 | String,Number | — | 100% |
| height | 表格高度,可以直接使用style属性控制 | String,Number | — | auto |
| showHeader | 是否展示头部 | Boolean | — | true |
| fixedHeader | 是否固定头部 | Boolean | — | false |
| stripe | 是否开启斑马纹 | Boolean | — | false |
| bordered | 是否开启边框 | Boolean | — | false |
| loading | 是否loading | Boolean | — | false |
| rowClassName | 每行的class | String，Function(row,index) | — | — |
| headRowClassName | 表头的class | String | — | — |

## SelectedConfig Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| bindDataIndex | checkbox 绑定的row-key,必须| String | — | false |
| showSelectAll | 是否开启全选| Boolean | — | false |
| width | 多选列的宽度 | Number | — | — |
| selectedValue | 控制选中的值 ，双向绑定，1.可以直接获取选中的值，2.可以直接设置，修改表格选中的状态 | Array | — | — |
| rowHighLighted | 是否行选中高亮 | Boolean | — | false |
| rowClick | 是否开启单击行选中 | Boolean | — | false |

## Columns Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| dataIndex | 列数据在数据项中对应的 key，必须 | String | — | — |
| dataIndex | Vue v-for需要的 key，必须 | String | — | — |
| title | 表头文字，必须 | String | — | — |
| width | 列宽 | String|Number | — | — |
| fixed | 是否国定 | String | left,right | — |
| customRowRender | 列数据插槽 | String | —  | — |
| customTitleRender | 列表头插槽 | String | —  | — |
| sort | 列排序 | String | unset,left,right  | — |


## Table Event
| 事件      | 说明          | 回调参数      | 
|---------- |-------------- |---------- |
| rowDbclick | 双击行事件 | Function(row) |
| rowClick | 单击行事件 | Function(row) |
| sortChange | 排序事件 | Function(sort,row) |
| checkboxChange | 多选事件 | Function(selectedValue, checked, currentValue) |

## Table Methods
| 方法      | 说明          | 
|---------- |-------------- |
| setupTableAttr | 重绘表格dom，防止固定列，表头有些场景出现行列未对齐，ref访问 |

## Table slot
| 插槽      | 说明          | 
|---------- |-------------- |
| loading | 自定义loading样式| Array | 
| nodata | 自定义无数据样式 | Array | 

<script>

import {
	rowspanConfig,
	columns,
	Adata,
	Acolumns,
	rowspanColumns,
	menuList,
	columsMap,
	columsMapOrder,
	columsMapRowRender,
	columsMapTitleRender
} from "../data.js";


const  genColumns = (columnsConfig) =>{

  // test
  if (!columnsConfig) {
    columnsConfig = {
      key: "aaa|bbb|ccc|ddd|fff",
      title: "工号|薪资1|薪资2|薪资3|总工资",
      fixed: "left|--|--|--|right",
      width: "150|200|-|150|-"
    }
  }

  if (!columnsConfig) {
    throw new Error("columnsConfig 不能为空");
  }

  let cols = columnsConfig.key;

  if (!cols) {
    throw new Error("columnsConfig.key 不能为空");
  }

  // 分割为数组
  let columnsConfigArrMap = {};
  for (let configkey in columnsConfig) {
    let configValue = columnsConfig[configkey];
    if (configValue) {
      let configArr = configValue.split("|");
      columnsConfigArrMap[configkey] = configArr;
    }
  }

  let colsArrLen = columnsConfigArrMap["key"].length;

  let res = [];
  for (let i = 0; i < colsArrLen; i++) {
    let item = {};
    for (let configkey in columnsConfigArrMap) {
      let configArr = columnsConfigArrMap[configkey];
      let val = configArr[i].trim().replace(/-/g, "");
      if (val) {
        item[configkey] = val;

        if (configkey == "key") {
          item["dataIndex"] = val || "";
        }

      }

    }
    res.push(item);
  }

  return res;

}


export default {
  data() {
	  
	  const columnsV2 = genColumns(columsMap);
	  const columsOrder = genColumns(columsMapOrder);
	  const columsRowRender = genColumns(columsMapRowRender);
	  const columsTitleRender = genColumns(columsMapTitleRender);
	  
	  console.log("columnsV2",columnsV2);
	  
	  const getRandomNumber = (min,max)=> Math.round(Math.random() * (max - min) + min) ;
	  
	  
	  const getData1 = (num) => {
		  let dataSource = [];
		  for (let i = 1; i <=num; i++) {
		    dataSource.push({
		      employeeId: "sx00" + i,
		      base2: getRandomNumber(100,1000),
		      base3: getRandomNumber(100,1000),
			  base4: getRandomNumber(100,1000),
			  base5: getRandomNumber(100,1000),
		      sxWage: getRandomNumber(100,1000),
		      wageTotal: getRandomNumber(100,1000)
		    });
		  }
		  return dataSource;
	  }
	  
	  const getData2 = (num) => {
		  let dataSource = [];
		  for (let i = 1; i <=num; i++) {
			dataSource.push({
				  key: i,
				  name: 'John Brown',
				  age: i + 1,
				  street: 'Lake Park',
				  building: 'C',
				  number: 2035,
				  companyAddress: 'Lake Street 42',
				  companyName: 'SoftLake Co',
				  gender: 'M',
				});
		  }
		  return dataSource;
	  }
	  
	  // 固定列 JSON.parse(JSON.stringify())
	  let columnsFixed = JSON.parse(JSON.stringify(columns));
	  console.log("columnsFixed",columnsFixed);
	  columnsFixed.forEach(col=>{
		  if(col.key=="employeeId"){
			  col.fixed="left";
		  }else if(col.key=="wageTotal"){
			  col.fixed="right";
		  }
	  });
	  
	  
    return {
		dataSourceMore:getData1(25),
		dataSource:getData1(5),
		rowspanConfig,
		columns,
		columnsV2,
		columsOrder,
		columsRowRender,
		columsTitleRender,
		columnsFixed,
		Adata,
		Acolumns,
		rowspanColumns,
		rowspanData: getData2(30),
		menuList,
		selectedConfig: {
		  showSelectAll: true, // 是否开启全选
		  width: 50, // 多选列的宽度
		  selectedValue: [], // 控制选中的值 ，响应式
		  bindDataIndex: "employeeId", // checkbox 绑定的row-key
		  rowHighLighted: true, // td 高亮
		  rowClick: true, // 单击行选中
		},
		selectedConfigRadio: {
		  showSelectAll: false, // 是否开启全选
		  width: 50, // 多选列的宽度
		  selectedValue: [], // 控制选中的值 ，响应式
		  bindDataIndex: "employeeId", // checkbox 绑定的row-key
		  rowHighLighted: true, // td 高亮
		  rowClick: true, // 单击行选中
		},
    }
  },
  methods:{
	onSortChange(sort, col) {
		this.$message.success("请打开控制台查看");
		console.log(sort, col);
	},
	onSelect12(){
		this.selectedConfig.selectedValue = ['sx001','sx002'];
	},
	onUnSelect(){
		this.selectedConfig.selectedValue = [];
	},
	onPrintSelectedValue(){
		this.$message.success("请打开控制台查看");
		console.log("selectedValue",this.selectedConfig.selectedValue);
	},
	/**
	 * @param {Array} selectedValue 选中的值 类型为数组
	 * @param {bool} checked 当前点击行的状态 true=选中 false=取消选中
	 * @param {Object} value 当前点击行绑定的value
	 */
	oncheckboxChange(selectedValue, checked, value) {
	  console.log(selectedValue, checked, value);
	},
	oncheckboxChangeRadio(selectedValue, checked, value){
		if(checked===true){
			this.selectedConfigRadio.selectedValue = [value];
		}
	}
  },
  mounted () {

  }
}

</script>
