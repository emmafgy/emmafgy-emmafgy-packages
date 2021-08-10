# 简介

```javascript
原生js实现的json导出excel
支持 简单导出，复杂导出（多级表头），合并多个表格导出，详见下使用示例
有任何问题或建议联系QQ：760720981，或者直接发到邮箱760720981@qq.com

```

# 最新版本更新功能简介
> 20210730

1. defaultStart方法，去掉params.filterFileds和params.filterFiledsLabelObj,变成参数params.filedsMap


    ```javascript
	
       // ============= 现在 =======================
    
        import myExpoertExcel from '@emmafgy/jsontoexcel';
        
        let copyJsonToExcel = myExpoertExcel();
        
		copyJsonToExcel.defaultStart({
			list: list, // 必传
			fileName: "@emmafgy", // 非必传 有默认值
			filedsMap: {
				'wageTotal': "", // value不存在 == label=key
				'base1': "基本工资1",
				'base2': "",
				'base3': "",
				'base4': "",
				'base5': "",
				'sxDays': "实习天数"
			} // 配置 过滤的字段表头label，非必传，默认就是属性（key）
		});
        
        // ============= 以前 =======================
    
        import myExpoertExcel from '@emmafgy/jsontoexcel';
        
        let copyJsonToExcel = myExpoertExcel();
        
        copyJsonToExcel.defaultStart({
        	list: list, // 必传
        	fileName: "@emmafgy", // 非必传 有默认值
        	filterFileds: ['wageTotal', 'base1', 'base2', 'base3', 'base4', 'base5',
        		'sxDays'
        	], // 需要过滤的字段 注意是有序的，非必传，默认数据的keys
        	filterFiledsLabelObj: {
        		base1: "基本工资"
        	} // 配置 过滤的字段表头label，非必传，默认就是属性（key）
        });
		
    ```

> 20210729

1. 使用方法改变（import导入对象是引用，会造成全局污染，所以改成了函数获取实例）


    ```javascript
        // ============= 以前 =======================
    
        import myExpoertExcel from '@emmafgy/jsontoexcel';
        
        myExpoertExcel.defaultStart({
        	list: list, // 必传
        	fileName: "@emmafgy", // 非必传 有默认值
        	filterFileds: ['wageTotal', 'base1', 'base2', 'base3', 'base4', 'base5',
        		'sxDays'
        	], // 需要过滤的字段 注意是有序的，非必传，默认数据的keys
        	filterFiledsLabelObj: {
        		base1: "基本工资"
        	} // 配置 过滤的字段表头label，非必传，默认就是属性（key）
        });
    
    
    // ============= 现在 =======================
    
        import myExpoertExcel from '@emmafgy/jsontoexcel';
        
        let copyJsonToExcel = myExpoertExcel();
        
        copyJsonToExcel.defaultStart({
        	list: list, // 必传
        	fileName: "@emmafgy", // 非必传 有默认值
        	filterFileds: ['wageTotal', 'base1', 'base2', 'base3', 'base4', 'base5',
        		'sxDays'
        	], // 需要过滤的字段 注意是有序的，非必传，默认数据的keys
        	filterFiledsLabelObj: {
        		base1: "基本工资"
        	} // 配置 过滤的字段表头label，非必传，默认就是属性（key）
        });
    ```
	
2. 取消fileds函数类型元素，增加customRowFunctionMap配置实现对应filed自定义，使用方法详解复杂使用示例

> 20210513
1. 配置fileds增加函数类型元素，可自定义返回的value，使用方法详解复杂使用示例

> 20210313
1. 增加defaultStart函数（简单导出），使用方法详解使用示例
2. 增加配置enableOrder（配置是否开启序号），详见配置说明
3. 增加配置nodata(配置无数据内容),详解配置说明
4. 增加数据的样式配置，详见使用示例

#  使用示例

1. npm 安装

```
npm install -S @emmafgy/jsontoexcel
```

2. 引入

```
import myExpoertExcel from '@emmafgy/jsontoexcel';
```

3. 简单使用示例（使用defaultStart方法,一般可以满足简单的导出需求了）

```javascript
            handleClick(){
				let list = [{
						// 需要给值设置样式，类型为Object即可 默认value属性对应数据值，style属性对应样式字符串（样式中引号不能使用单引号，每个样式需要加“;”
						base1: {
							value: 1,
							style: "color:red;background:yellow;"
						},
						base2: 1000,
						base3: 1000,
						base4: 1000,
						base5: 1000,
						sxDays: 5,
						sxWage: 500,
						wageTotal: 500
					},
					{
						base1: 1000,
						base2: 1000,
						base3: 1000,
						base4: 1000,
						base5: 1000,
						sxDays: 5,
						sxWage: 500,
						wageTotal: 500
					},
					{
						base1: 1000,
						base2: 1000,
						base3: 1000,
						base4: "", // 值为空 或者 base4 属性不存在 可以配置 nodata 显示
						base5: 1000,
						sxDays: 5,
						sxWage: 500,
						wageTotal: 500
					}
				];


				//    myExpoertExcel.enableOrder = true; // 增加序号列
				//    myExpoertExcel.nodata = "无数据"; // 配置无数据显示内容
				
				let copyJsonToExcel = myExpoertExcel();
				
				copyJsonToExcel.defaultStart({
					list: list, // 必传
					fileName: "@emmafgy", // 非必传 有默认值
					filedsMap: {
						'wageTotal': "", // value不存在 == label=key
						'base1': "基本工资1",
						'base2': "",
						'base3': "",
						'base4': "",
						'base5': "",
						'sxDays': "实习天数",
						'custom':""
					}, // 配置 过滤的字段表头label，非必传，默认就是属性（key）
					customRowFunctionMap:{ // 非必须, 配置filterFileds参数 元素的自定义渲染函数
					    custom:(text,row)=>{
					        return `自定义列（filed）${text}`;
					    }
					}
				});

			}
```

<img src="https://pic.liesio.com/2021/03/31/a3588cc3b2a8c.png" alt="err" />

3. 复杂使用示例

```javascript
            handleClick() {

				// == test ===
				let headerConfig = [
					[{
							label: '工资构成',
							colspan: 5,
							rowspan: 1
						},
						{
							label: '试用期工资',
							colspan: 2,
							rowspan: 1
						},
						{
							label: '当月工资总额',
							rowspan: 2
						},
						{
							label: '函数自定义字段',
							rowspan: 2
						}
					],
					[{
							label: '基本工资1'
						},
						{
							label: '基本工资2'
						},
						{
							label: '基本工资3'
						},
						{
							label: '基本工资4'
						},
						{
							label: '基本工资5'
						},
						{
							label: '实习期天数'
						},
						{
							label: '实习期工资'
						}
					]
				];

				let list = [{
						base1: {
							myvalue: 1,
							mystyle: "color:red;background:yellow;"
						},
						base2: 1000,
						base3: 1000,
						base4: 1000,
						base5: 1000,
						sxDays: 5,
						sxWage: 500,
						wageTotal: 500
					},
					{
						base1: 1000,
						base2: 1000,
						base3: {
							myvalue: 1000,
							mystyle: "color:green;"
						},
						base4: 1000,
						base5: 1000,
						sxDays: 5,
						sxWage: 500,
						wageTotal: 500
					},
					{
						base1: 1000,
						base2: 1000,
						base3: 1000,
						base4: "",
						base5: 1000,
						sxDays: 5,
						sxWage: 500,
						wageTotal: 500
					}
				];

				// 每行需要展示的字段，使用自定义字段务必在customRowFunctionMap配置好对应的回调函数，例如：custom字段
				let fileds = ['base1', 'base2', 'base3', 'base4', 'base5', 'sxDays', 'sxWage', 'wageTotal', "custom"];

				let customRowFunctionMap = {
					custom: (text, rowData) => {
						// 1 - return string
						//return `自定义字段：${rowData.wageTotal}`;

						// 2 - object
						// 需要给值设置样式，return 类型为Object即可 默认value属性对应数据值，style属性对应样式字符串（样式中引号不能使用单引号，每个样式需要加“;”
						let obj = {
							myvalue: `自定义字段：${rowData.wageTotal}`,
							mystyle: "color:red;"
						};
						return obj;
					}
				};
				
				let exportExcelInstance = myExpoertExcel();
				exportExcelInstance.list = list; // 配置数据
				exportExcelInstance.headerConfig = headerConfig; // 配置头部
				exportExcelInstance.fileds = fileds; // 配置过滤字段
				exportExcelInstance.fileName = '@emmafgy'; // 配置名字
				exportExcelInstance.enableOrder = true; // 增加序号列
				exportExcelInstance.nodata = "无数据"; // 配置无数据显示内容
				exportExcelInstance.tableBorderWidth = 1; // 配置border 0=无 默认 1
				exportExcelInstance.customRowFunctionMap = customRowFunctionMap;
				exportExcelInstance.tdDataObjTemplate = {
					styleFiled: "mystyle",
					valueFiled: "myvalue"
				}; // 配置值样式 取的属性 默认style=样式 value=值 如上list变量 
				exportExcelInstance.filedsOtherConfig = {
					style: {
						base1: 'mso-number-format:"\@";', // 每个style需要加属性 mso-number-format:"\@" = 该单元格为文本 可以解决 000111这种需要保留0的需求（默认excel会当成数字去掉0）
						wageTotal: 'background:yellow;'
					}
				}; // 配置导出字段列的style

				exportExcelInstance.start(); // start
			}
```

<img src="https://pic.liesio.com/2021/05/13/47245d95148e6.png" alt="err" />

4. 合并多个表（exportByDomString方法的灵活使用）

```javascript
handleClick(){

                // == test ===
                let headerConfig = [
                    [{
                            label: '工资构成',
                            colspan: 5,
                            rowspan: 1
                        },
                        {
                            label: '试用期工资',
                            colspan: 2,
                            rowspan: 1
                        },
                        {
                            label: '当月工资总额',
                            rowspan: 2
                        }
                    ],
                    [{
                            label: '基本工资1'
                        },
                        {
                            label: '基本工资2'
                        },
                        {
                            label: '基本工资3'
                        },
                        {
                            label: '基本工资4'
                        },
                        {
                            label: '基本工资5'
                        },
                        {
                            label: '实习期天数'
                        },
                        {
                            label: '实习期工资'
                        }
                    ]
                ];

                let headerConfig2 = [
                    [{
                            label: '基本工资1'
                        },
                        {
                            label: '基本工资2'
                        },
                        {
                            label: '基本工资3'
                        },
                        {
                            label: '基本工资4'
                        },
                        {
                            label: '基本工资5'
                        },
                        {
                            label: '实习期天数'
                        },
                        {
                            label: '实习期工资'
                        }
                    ]
                ];

                let list = [{
                        base1: {
                            value: 1,
                            style: "color:red;background:yellow;"
                        },
                        base2: 1000,
                        base3: 1000,
                        base4: 1000,
                        base5: 1000,
                        sxDays: 5,
                        sxWage: 500,
                        wageTotal: 500
                    },
                    {
                        base1: 1000,
                        base2: 1000,
                        base3: {
                            value: 1000,
                            style: "color:green;"
                        },
                        base4: 1000,
                        base5: 1000,
                        sxDays: 5,
                        sxWage: 500,
                        wageTotal: 500
                    },
                    {
                        base1: 1000,
                        base2: 1000,
                        base3: 1000,
                        base4: "",
                        base5: 1000,
                        sxDays: 5,
                        sxWage: 500,
                        wageTotal: 500
                    }
                ];


                let list2 = [{
                        base1: 1000,
                        base2: 1000,
                        base3: 1000,
                        base4: 1000,
                        base5: 1000,
                        sxDays: 5,
                        sxWage: 500,
                    },
                    {
                        base1: 1000,
                        base2: 1000,
                        base3: 999,
                        base4: 1000,
                        base5: 1000,
                        sxDays: 5,
                        sxWage: 500,
                    },
                    {
                        base1: 1000,
                        base2: 1000,
                        base3: 1000,
                        base4: "",
                        base5: 1000,
                        sxDays: 5,
                        sxWage: 500,
                    }
                ]

                let fileds = ['base1', 'base2', 'base3', 'base4', 'base5', 'sxDays', 'sxWage', 'wageTotal'];

                let fileds2 = ['base1', 'base2', 'base3', 'base4', 'base5', 'sxDays', 'sxWage'];

                // 生成第一个表格 dom
                myExpoertExcel.list = list; // 配置数据
                myExpoertExcel.headerConfig = headerConfig; // 配置头部
                myExpoertExcel.fileds = fileds; // 配置过滤字段
                let dom1 = myExpoertExcel.createTableHtml();

                // 生成第二个表格 dom
                myExpoertExcel.list = list2; // 配置数据
                myExpoertExcel.headerConfig = headerConfig2; // 配置头部
                myExpoertExcel.fileds = fileds2; // 配置过滤字段
                let dom2 = myExpoertExcel.createTableHtml();

                myExpoertExcel.exportByDomString(`
                ${dom1}
                <table></table>
                ${dom2}
                `); // start <table></table> 只是用来换行的



}
```

![示例](https://pic.liesio.com/2021/03/31/2fb19d0231ca0.png)

# 配置

|参数|是否必传|默认值|说明|类型|
|--|--|--|--|--|
|headerConfig|是|/|headerConfig配置表头生成规则，是一个二维数组，每个一维数组代表一行表头的配置，一维数组的一个对象表示每列的配置（一个列对象 ， colspan属性 = 跨列 rowspan = 跨行 label = 列名字）|Array|
|list|是|/|一维数组，数组元素是json对象|Array|
|fileds|是|/|一维数组，数组元素是字符串，代表list中json对象里面需要导出的字段，注意是有序的，要和表头的配置对应上|Array|
|fileName|否|@emmafgy|导出的文件名，注意不用加后缀|String|
|enableOrder|否|false|是否增加序号列||
|nodata|否|""|配置无数据显示内容||
|tableBorderWidth|否|1|配置borderWidth 0=无||
|tdDataObjTemplate|否|{<br/>|配置 值 样式 取的属性 默认style=样式 value=值 ，详见复杂使用示例||
|filedsOtherConfig|否|/|配置导出字段列的style,详见复杂使用示例||

# 方法

|方法名|说明|参数|返回值|
|--|--|--|--|
|defaultStart|导出excel，详见简单示例|{list,filename,filterFileds,filterFiledsLabelObj}详见简单示例|/|
|start|导出excel，详见复杂示例|无，（通过配置，直接调用，详见复杂示例）|/|
|exportByDomString|根据dom字符串，导出excel|（domString）（详见多个表合并示例，如果已经拿到table dom，直接调用该方法即可）|/|
|createTableHtml|返回生成的tableHtml|无，（通过配置，直接调用，详见多个表合并示例）|String|
