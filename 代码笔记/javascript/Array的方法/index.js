
// Array.from(arrayLike[, mapFn[, thisArg]])
// 此方法从一个类似数组或可迭代对象创建一个新的、浅拷贝的数组实例
// 参数 arrayLike 表示想要转换成数组的伪数组或可迭代对象
// 参数 mapFn 可选，数组中每个元素都会执行该回调函数
// 参数 thisArg 可选，表示执行回调函数 mapFn 时的 this 对象
var a1 = "123";
console.log(Array.from(a1)); // ['1', '2', '3']
console.log(Array.from(a1, x => x * 5 )); // [5, 10, 15]
console.log(a1); // "123"