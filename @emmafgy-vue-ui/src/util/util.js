export function isPromise(obj) {
  return !!obj //有实际含义的变量才执行方法，变量null，undefined和''空串都为false
    &&
    (typeof obj === 'object' || typeof obj === 'function') // 初始promise 或 promise.then返回的
    &&
    typeof obj.then === 'function';
}


export function setStyle(obj = {}, el) {
  for (let item in obj) {
    el.style[item] = obj[item]
  }
}

export function getNoneStyle(el) {
  // 获取隐藏元素
  let node = el;

  setStyle({
    display: 'block',
    visibility: 'hidden',
    position: 'absolute'
  }, node);

  const {
    clientHeight,
    clientWidth
  } = el;

  setStyle({
    display: '',
    visibility: '',
    position: ''
  }, node);

  return {
    width: clientWidth,
    height: clientHeight
  }

}

export function getNearEle(ele, type) {
  type = (type == 1) ? 'previousSibling' : 'nextSibling';
  var nearEle = ele[type];
  while (nearEle) {
    if (nearEle.nodeType == 1) { // 节点类型是元素时返回该元素，排除文本节点（空格）、注释
      return nearEle;
    } else {
      nearEle = nearEle[type];
    }
  }
  return null;
}
