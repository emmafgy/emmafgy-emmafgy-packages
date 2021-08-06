function MyPromise(executor) {
	// 初始状态
	this.state = 'pending';

	// 成功后必须有一个终值
	this.value = undefined;
	// 失败后必须有一个据因
	this.reason = undefined;
	// 成功时的回调函数集
	this.onFulfilledSucc = [];
	// 失败的回调函数集
	this.onRejectedFail = [];

	// resolve
	const resolve = value => {

		if (this.state === 'pending') {
			this.state = 'fulfilled'
			this.value = value;
			// 执行回调函数集中的函数
			this.onFulfilledSucc.forEach(function(fun) {
				fun();
			});
		}

	}

	// reject
	const reject = reason => {
		if (this.state === 'pending') {
			this.state = 'rejected';
			this.reason = reason;
			// 执行回调函数集中的函数
			this.onRejectedFail.forEach(function(fun) {
				fun();
			});
		}
	}


	// executor执行发生错，则直接reject
	try {
		executor(resolve, reject);
	} catch (err) {
		reject(err);
	}
}


// resolvePromise
function resolvePromise(promise2, x, resolve, reject) {


	// 如果 x === promise2，则会造成循环引用 
	if (x === promise2) {
		return reject(new TypeError('Chaining cycle detected for promise!'))
	}


	// 防止多次调用
	var called;


	// x不是null 且x是对象或者函数
	if (x != null && (typeof x === 'object') || (typeof x === 'function')) {
		try {
			// 把 x.then 赋值给 then
			var then = x.then;


			// 如果then是函数，就默认是x是promise了
			if (typeof then === 'function') {
				// 如果 then 是函数，将 x 作为函数的作用域 this 调用之。
				then.call(x, function(y) {
					// 成功和失败只能调用一个
					if (called) return;
					called = true;
					// 如果 resolvePromise 以值 y 为参数被调用，则运行 [[Resolve]](promise, y)
					resolvePromise(promise2, y, resolve, reject);
				}, function(r) {
					if (called) return;
					called = true;
					// 如果 rejectPromise 以据因 r 为参数被调用，则以据因 r 拒绝 promise
					reject(r);
				});
			} else {
				resolve(x);
			}
		} catch (e) {
			// 如果取 x.then 的值时抛出错误 e ，则以 e 为据因拒绝 promise
			if (called) return;
			called = true;
			reject(e);
		}
	} else {
		// 如果 x 不为对象或者函数，以 x 为参数执行 promise
		resolve(x);
	}
}


// then
MyPromise.prototype.then = function(onFulfilled, onRejected) {


	// alert('then');

	// 如果onFulfilled不是函数，其必须被忽略
	onFulfilled = typeof onFulfilled === 'function' ?
		onFulfilled : function(value) {
			return value
		};


	// 如果onRejected不是函数，其必须被忽略
	onRejected = typeof onRejected === 'function' ?
		onRejected : function(err) {
			throw err
		};

	var _this = this;


	var promise2 = new MyPromise(function(resolve, reject) {


		if (_this.state === 'fulfilled') {
			// 规定onFulfilled或onRejected不能同步被调用，必须异步调用。 调用 resolve 时，回调函数已经注入
			// setTimeout(function() {
			try {
				var x = onFulfilled(_this.value);
				// 根据x的值修改promise2的状态
				resolvePromise(promise2, x, resolve, reject);
			} catch (e) {
				reject(e);
			}
			// }, 0);
		}


		if (_this.state === 'rejected') {
			// setTimeout(function() {
			try {
				var x = onRejected(_this.reason);
				// 根据x的值修改promise2的状态
				resolvePromise(promise2, x, resolve, reject);
			} catch (e) {
				reject(e);
			}
			// }, 0);
		}


		if (_this.state === 'pending') {
			// onFulfilled传入到成功时的回调函数集
			_this.onFulfilledSucc.push(function() {
				// setTimeout(function() {
				try {
					var x = onFulfilled(_this.value);
					// 根据x的值修改promise2的状态
					resolvePromise(promise2, x, resolve, reject);
				} catch (e) {
					reject(e);
				}
				// }, 0);
			});


			// onRejectedFail传入到失败时的回调函数集
			_this.onRejectedFail.push(function() {
				// setTimeout(function() {
				try {
					var x = onRejected(_this.reason);
					// 根据x的值修改promise2的状态
					resolvePromise(promise2, x, resolve, reject);
				} catch (e) {
					reject(e);
				}
				// })
			});
		}
	});


	return promise2;
}


MyPromise.prototype.catch = function(fn) {
	return this.then(null, fn);
}


MyPromise.resolve = function(value) {
	return new MyPromise(function(resolve, reject) {
		resolve(value);
	});
}


MyPromise.reject = function(reason) {
	return new MyPromise(function(resolve, reject) {
		reject(reason);
	});
}


MyPromise.all = function(promises) {
	return new MyPromise(function(resolve, reject) {
		var promiseLen = promises.length;
		var resolvedCounter = 0;
		var resolvedValues = new Array(promiseLen);


		for (var i = 0; i < promiseLen; i++) {
			(function(i) {
				MyPromise.resolve(promises[i]).then(function(value) {
					resolvedCounter++;
					resolvedValues[i] = value;
					if (resolvedCounter == promiseLen) {
						return resolve(resolvedValues);
					}
				}, function(reason) {
					return reject(reason);
				});
			})(i);
		}
	});
}


MyPromise.race = function(promises) {
	return new MyPromise(function(resolve, reject) {
		for (var i = 0; i < promises.length; i++) {
			MyPromise.resolve(promises[i]).then(function(value) {
				return resolve(value);
			}, function(reason) {
				return reject(reason);
			});
		}
	});
}
