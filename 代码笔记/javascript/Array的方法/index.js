
// Array.from(arrayLike[, mapFn[, thisArg]])
// 此方法从一个类似数组或可迭代对象创建一个新的、浅拷贝的数组实例
// 参数 arrayLike 表示想要转换成数组的伪数组或可迭代对象
// 参数 mapFn 可选，数组中每个元素都会执行该回调函数
// 参数 thisArg 可选，表示执行回调函数 mapFn 时的 this 对象
var a1 = "123";
console.log(Array.from(a1)); // ['1', '2', '3']
console.log(Array.from(a1, x => x * 5 )); // [5, 10, 15]
console.log(a1); // "123"

//-------------------------------------------------------------

// Array.isArray(obj)
// 检测一个值是否是数组类型，返回一个布尔值
var a2 = [3, 5, 6];
var b2 = "888";
var c2 = {};
console.log(Array.isArray(a2)); // true
console.log(Array.isArray(b2)); // false
console.log(Array.isArray(c2)); // false
console.log(Array.isArray(Array.prototype)); // true
console.log(Array.isArray(new Uint8Array(32))); // false

//-------------------------------------------------------------

// Array.of(element0[, element1[, ...[, elementN]]])
// 此方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型
// 参数 elementN，任意个参数，将按顺序成为数组中的元素
// Array.of 和 Array 构造函数之间的区别在于处理整数参数
// Array.of(7) 创建一个具有单个元素 7 的数组
// 而 Array(7) 创建一个长度为 7 的空数组（这里是指有 7 个空位，即 [,,,,,,,]，而不是 7 个 undefined）
console.log(Array(7)); // [,,,,,,,]
console.log(Array(1, 2, 3)); // [1, 2, 3]
console.log(Array.of(7)); // [7]
console.log(Array.of(1, 2, 3)); // [1, 2, 3]