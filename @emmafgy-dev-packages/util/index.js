let util = {};



// 一般用于导出txt文件
util.export1 = (name, data) => {

	const fakeClick = (obj) => {
		var ev = document.createEvent('MouseEvents')
		ev.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
		obj.dispatchEvent(ev)
	}

	var urlObject = window.URL || window.webkitURL || window
	var export_blob = new Blob([data])
	var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a')
	save_link.href = urlObject.createObjectURL(export_blob)
	save_link.download = name
	fakeClick(save_link)
}

/**
 * 获取 location.search 参数
 * 从问号 (?) 开始的 URL（查询部分）
 */
util.getLocationSearchParam = (sProp) => {
	var re = new RegExp(sProp + "=([^\&]*)", "i");
	var a = re.exec(document.location.search);
	return a == null ? null : a[1];
};

//金钱格式 9,999,999.99
util.formatPay = (num, symbol = "", fixedNum = 2) => {
	return (
		symbol + parseFloat(num).toFixed(fixedNum).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, "$&,")
	);
}

// 多维数组转一维 [1,2,[3],[4,[5]]]
util.flatten = arr => [].concat(...arr.map(x => Array.isArray(x) ? flatten(x) : x));

/**
 * 防抖函数
 * @param func 事件触发的操作
 * @param delay 多少毫秒内连续触发事件，不会执行
 * @returns {Function}
 */
util.debounce = (func, delay) => {
	let timer = null;
	return function() {
		timer && clearTimeout(timer);
		// setTimeOut 务必使用箭头函数 确保 this ，arguments 作用域是父级函数
		timer = setTimeout(_ => {
			func(arguments);
		}, delay);
	}
}

/**
 * 节流函数
 * @param func 事件触发的操作
 * @param mustRunDelay 间隔多少毫秒需要触发一次事件
 */
util.throttle = (func, wait, mustRun) => {
	let timeout,
		startTime = new Date();
	return function() {
		let curTime = new Date();
		timeout && clearTimeout(timeout);
		// 如果达到了规定的触发时间间隔，触发 handler
		if (curTime - startTime >= mustRun) {
			func(arguments);
			startTime = curTime;
			// 没达到触发间隔，重新设定定时器
		} else {
			// setTimeOut 务必使用箭头函数 确保 this ，arguments 作用域是父级函数
			timeout = setTimeout(_ => {
				func(arguments);
			}, wait);
		}
	};
};

/**
 * 深拷贝
 * @param {Object} obj
 */
util.clone = (obj) => {
	let res;
	if (typeof obj == 'object' && obj != null) {
		res = obj instanceof Array ? [] : {};
		for (let i in obj) {
			res[i] = util.clone(obj[i]);
		}
	} else {
		res = obj;
	}
	return res;
}

/**
 * 首字母 大写
 */
util.firstToUpperCase = str => str.charAt(0).toUpperCase() + str.slice(1);


//计算指定日期后几天
util.getNextDate = (date, num, type = 'day') => {

	try {
		var dd = date ? new Date(date) : new Date();
		if (type == 'month') {
			dd.setMonth(dd.getMonth() + num);
		} else {
			dd.setDate(dd.getDate() + num);
		}
		var y = dd.getFullYear();
		var m = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
		var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
		return y + "-" + m + "-" + d;
	} catch (e) {
		return "1970-00-00";
	}

};

// 获取当月天数
util.getCurrentMonthDays = (date) => {
	var date = date ? new Date(date) : new Date(); //0 表示1月
	date.setDate(28); // 防止setMOnth + 1 c超出（+1 是加上当月天数 来计算下个月份的）
	date.setMonth(date.getMonth() + 1);
	// 日期设置为0号, 0表示1号的前一天
	date.setDate(0);
	return date.getDate();
	//console.log(date.getDate())
}

// return function 注意 compose 中函数执行的顺序是从右到左, 每次函数运行结果作为下个函数的参数
util.compose = (...funcs) => {
	if (funcs.length === 0) {
		return arg => arg;
	}
	if (funcs.length === 1) {
		return funcs[0];
	}
	return funcs.reduce((a, b) => (...args) => a(b(...args)));
}


// ================== reg  start ==================

/**
 * 检测是否为NUMBER
 */
util.checkNumber = val => /^[0-9]+$/.test(val);

// 手机号检查
util.checkPhone = (mobile) => {
	let reg = /^1[0-9]{10}$/;
	return reg.test(mobile);
};

// 身份证校验
util.checkID = (id_number) => {
	if (id_number && id_number.length === 18) {
		let nums = id_number.split('');
		let weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
		let sum = 0;
		weights.forEach(function(weight, index) {
			sum += weight * nums[index];
		});
		let checkNum = 12 - sum % 11;
		if (checkNum === 10) {
			checkNum = 'X';
		} else if (checkNum > 10) {
			checkNum = checkNum - 11;
		}
		//console.log('check num: ' + checkNum);
		return checkNum.toString() === nums[17].toUpperCase();
	} else {
		return false;
	}
};


// ================== reg  end ==================



export default util;
