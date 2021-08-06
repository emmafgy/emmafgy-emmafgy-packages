function MyPromiseV2(executor) {

	this.value = undefined; // success value

	this.reason = undefined; // error value

	this.fnSuccess = []; // 成功回调 

	this.fnError = []; // 错误回调

	// resolve
	const resolve = value => {

		setTimeout(_ => {

			//alert('resolve == 开始调用成功回调函数');
			this.value = value;
			this.fnSuccess.forEach(func => {
				func();
			});

		}, 0);
		
	}

	// reject
	const reject = reason => {
		// setTimeout(_ => {
		this.reason = reason;
		this.fnError.forEach(func => {
			func();
		})
		// }, 0);
	}

	try {
		executor(resolve, reject);
	} catch (err) {
		reject(err);
	}

}


// then 存入成功回调
MyPromiseV2.prototype.then = function(fnSuccess, fnError) {

	//alert('then == 注册成功回调函数');

	let _this = this;

	// 如果fnSuccess不是函数，其必须被忽略
	fnSuccess = typeof fnSuccess === 'function' ?
		fnSuccess : function(value) {
			return value
		};


	// 如果fnError不是函数，其必须被忽略
	fnError = typeof fnError === 'function' ?
		fnError : function(err) {
			throw err
		};

	this.fnSuccess.push(_ => {
		setTimeout(_=>{
			let x = fnSuccess(this.value);
		})
	});
	this.fnError.push(_ => {
		// Q1 确保调 resolve 、 reject 时 回调函数 已经注入
		let x = fnError(this.reason);
	});

	// return this; // Q2 简单实现then的链式调用 return this  Q3 实现完整版then的链式调用 return new Promise (resolve 的 value 是成功回调的返回值)
}

// catch 存入失败回调
MyPromiseV2.prototype.catch = function(fnError) {
	this.then(null, fnError);
}
