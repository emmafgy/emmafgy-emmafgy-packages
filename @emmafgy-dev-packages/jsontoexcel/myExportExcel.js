/**
 *  原生js导出excel
 */
let excelObj = {

	list: [],
	headerConfig: [],
	fileds: [],
	tableId: "@emmafgyTable",
	fileName: "@emmafgy",
	fileSuffix: ".xls",
	tableBorderWidth: 1,
	filedsOtherConfig: {
		style: {
			// filed1:'mso-number-format:"\@";'
		}
	},
	nodata: "", // 配置无数据显示内容
	tdDataObjTemplate: {
		styleFiled: "style",
		valueFiled: "value"
	}, // json  row data set style
	enableOrder: false, // 是否开启序号
	customRowFunctionMap: {}, // 自定义行value 函数

	/**
	 *
	 */
	exportByJson: function(fileName = "", list = [], headerConfig = [], fileds = [], filedsOtherConfig = {}) {

		this.list = list;
		this.headerConfig = headerConfig;
		this.fileds = fileds;
		this.filedsOtherConfig = filedsOtherConfig;
		fileName && (this.fileName = fileName);

		this.start();
	},
	start: function() {
		this.check();
		var tableHtml = this.createTableHtml();
		// console.log(tableHtml);
		this.exportByDomString(tableHtml);
	},
	defaultStart: function({
		list,
		fileName,
		// filterFileds = null, // 废弃
		// filterFiledsLabelObj = null, // 废弃
		filedsMap = null,
		customRowFunctionMap = null,
	}) {

		if (!Array.isArray(list) || list.length < 1) {
			throw new Error("list必须是数组，list 参数的长度必须大于1");
		}

		let keys = (filedsMap && Object.keys(filedsMap)) || Object.keys(list[0]);
		let headerConfig = [];
		let fileds = keys;
		let tmpArr = keys.map(key => {
			let label = key;
			if (filedsMap.hasOwnProperty(key) && filedsMap[key]) {
				label = filedsMap[key];
			}
			return {
				label
			};
		});
		headerConfig[0] = tmpArr;

		this.list = list;
		this.headerConfig = headerConfig;
		this.fileds = fileds;
		this.fileName = fileName || this.fileName;
		customRowFunctionMap && (this.customRowFunctionMap = customRowFunctionMap);

		this.start();

	},
	/**
	 * 通过dom Sting 导出
	 * @param {Object} tableHtml
	 * @param {Object} fileName
	 */
	exportByDomString: function(tableHtml) {

		//判断是否IE浏览器
		const isIE = () => {
			if (!!window.ActiveXObject || "ActiveXObject" in window) {
				return true;
			} else {
				return false;
			}
		}

		var htm =
			`
					<html xmlns:x="urn:schemas-microsoft-com:office:excel">
						<head><meta charset="UTF-8">
							 <x:ExcelWorkbook>
									<x:ExcelWorksheets>
										<x:ExcelWorksheet>
											<x:WorksheetOptions>
												<x:Print>
													<x:ValidPrinterInfo />
												</x:Print>
											</x:WorksheetOptions>
										</x:ExcelWorksheet>
									</x:ExcelWorksheets>
								</x:ExcelWorkbook>
							</xml>
						</head>
						<style>table{vnd.ms-excel.numberformat:@;}</style>
					<body>
			`;
		htm += tableHtml;
		htm += '</body></html>';

		var excelBlob = new Blob([htm], {
			type: 'application/vnd.ms-excel'
		});
		if (isIE()) {
			window.navigator.msSaveOrOpenBlob(excelBlob, this.fileName + this.fileSuffix);
		} else {
			var oa = document.createElement('a');
			var href = window.URL.createObjectURL(excelBlob);
			oa.href = href;
			oa.download = this.fileName + this.fileSuffix;
			document.body.appendChild(oa);
			oa.click();
			document.body.removeChild(oa); // 下载完成移除元素
			window.URL.revokeObjectURL(href); // 释放掉blob对象
		}

	},

	// ==================

	check: function() {
		// throw new Error("test");
		if (!Array.isArray(this.list) || this.list.length < 1) {
			throw new Error("list必须是数组，list 参数的长度必须大于1");
		}
		if (!Array.isArray(this.fileds) || this.fileds.length < 1) {
			throw new Error("fileds必须是数组，fileds 参数的长度必须大于1");
		}
		if (!Array.isArray(this.headerConfig) || this.headerConfig.length < 1) {
			throw new Error("headerConfig必须是数组，headerConfig 参数的长度必须大于1");
		} else {
			if (!Array.isArray(this.headerConfig[0])) {
				throw new Error("headerConfig 必须是二维数组");
			}
		}
	},

	createTableHtml: function() {
		var tableHtml = `<table border="${this.tableBorderWidth}" id="${this.tableId}">`;
		tableHtml += this.createTableHeader();
		tableHtml += this.createTableBody();
		tableHtml += "</table>";
		// console.log(tableHtml);
		return tableHtml;
	},

	createTableHeader: function() {

		// 设置序号
		if (this.enableOrder === true) {
			this.headerConfig[0].unshift({
				label: '序号',
				colspan: 1,
				rowspan: this.headerConfig.length
			});
		}

		var res = "";
		this.headerConfig.forEach(tr => {
			var trDom = "<tr>";
			tr.forEach(td => {
				var {
					colspan = 1, rowspan = 1, label = ""
				} = td;
				var tdDom = `<th rowspan="${rowspan}" colspan="${colspan}">${label}</th>`;
				trDom += tdDom;
			});
			trDom += "</tr>";
			res += trDom;
		});
		return res;
	},

	createTableBody: function() {
		var res = "";
		this.list.forEach((trData, index) => {
			var trDom = "<tr>";
			var row = index + 1;
			// 设置序号
			if (this.enableOrder === true) {
				trDom += `<td style=''>${row}</td>`;
			}
			this.fileds.forEach(filed => {
				var tdData = "";
				var styleString = "";

				// set sourceValue
				var sourceValue = "";
				if (Object.prototype.toString.call(filed) == "[object String]") {
					// 设置field 样式
					if (this.filedsOtherConfig.style.hasOwnProperty(filed)) {
						styleString += this.filedsOtherConfig.style[filed];
					}
					// 设置td值
					// if (trData.hasOwnProperty(filed)) {
					if (this.customRowFunctionMap.hasOwnProperty(filed)) { // 传入了该字段自定义函数
						let customRowFunc = this.customRowFunctionMap[filed];
						if (Object.prototype.toString.call(customRowFunc) ==
							"[object Function]") {
							sourceValue = customRowFunc(trData[filed], trData);
						} else {
							throw new Error(filed +
								"_customRowFunctionMap type error，only function");
						}
					} else {
						sourceValue = trData[filed];
					}

					// }
				} else {
					throw new Error("filed type error，only string/function");
				}

				// else if (Object.prototype.toString.call(filed) == "[object Function]") { // 自定义值
				// 	sourceValue = filed(trData);
				// }

				// set tdData
				if ((sourceValue || sourceValue == 0)) {
					// 判断数据类型
					if (Object.prototype.toString.call(sourceValue) == "[object Array]") {
						tdData = sourceValue.toString();
					} else if (Object.prototype.toString.call(sourceValue) ==
						"[object Object]") {
						// 如果类型是Object 则设置改td值的样式
						let data = sourceValue[this.tdDataObjTemplate.valueFiled];
						let style = sourceValue[this.tdDataObjTemplate.styleFiled];
						tdData = data;
						styleString += style;
					} else {
						tdData = sourceValue || this.nodata;
					}
				} else {
					tdData = this.nodata;
				}

				var tdDom = `<td style='${styleString}'>${tdData}</td>`;
				trDom += tdDom;
			});
			trDom += "</tr>";
			res += trDom;
		})
		return res;

	},

};


/**
 * 深拷贝
 * @param {Object} obj
 */
const clone = (obj) => {
	let res;
	if (typeof obj == 'object' && obj != null) {
		res = obj instanceof Array ? [] : {};
		for (let i in obj) {
			res[i] = clone(obj[i]);
		}
	} else {
		res = obj;
	}
	return res;
}

const getExcelObj = _ => clone(excelObj);

export default getExcelObj;
