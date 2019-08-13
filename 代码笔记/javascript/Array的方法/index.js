/////////////////////////////////////////////////////////////////
//                        Array拥有的方法
/////////////////////////////////////////////////////////////////

// array.concat(item...)
// concat的意思是连接
// 数组连接，返回一个新数组，多个参数就跟着也连接在一起
// 不会对原来的数组产生影响
var a1 = [1, 2, 3];
var b1 = ['x', 'y', 'z'];
var c1 = a1.concat(b1, true, null, 24);
console.log(a1);
console.log(c1);

/////////////////////////////////////////////////////////////////

// array.join(separator)
// join的意思也是连接，separator的意思是分离器
// 把每个数组元素构造成字符串，然后把它们连接起来，返回一个字符串
// separator默认值是逗号','
// 想要做无缝连接，可以把separator改为空字符串
var a2 = ['x', 'yy', 'zzz'];
var b2 = a2.join();
var c2 = a2.join('');
console.log(b2);
console.log(c2);

/////////////////////////////////////////////////////////////////

// array.push(item...)
// push和pop让数组可以像堆栈（stack）一样工作
// 把一个或多个参数的item附加到数组的尾部，会改变本数组
// 返回这个数组的新长度
// （如果参数是一个数组，则添加的就是一个数组）
var a3 = ['asd', 321, true];
var b3 = ['u', 'qwe', null];
var c3 = a3.push(b3, 999, 'ert');
console.log(a3);
console.log(c3);

/////////////////////////////////////////////////////////////////

// array.pop()
// 方法会移除数组中最后一个元素，并返回该元素
// 如果该数组为空，它会返回undefined
var a4 = [123, 'wer', 312];
var b4 = a4.pop();
console.log(a4);
console.log(b4);

/////////////////////////////////////////////////////////////////

// array.shift()
// 该方法移除数组的第一个元素，并返回该元素
// 如果该数组为空，它会返回undefined
// shift通常比pop慢得多
var a5 = ['gscv', 'asd', 354];
var b5 = a5.shift();
console.log(a5);
console.log(b5);

/////////////////////////////////////////////////////////////////

// array.unshift(item...)
// 把一个或多个参数添加到数组的开始部分
// 返回这个数组的新长度
var a6 = [null, true, undefined, 123, 'sgs'];
var b6 = [321, false, '123'];
var c6 = a6.unshift(b6, a6, 666);
console.log(a6);
console.log(c6);

/////////////////////////////////////////////////////////////////

// array.reverse()
// 此方法用于反转数组里的元素顺序，并返回数组本身
var a7 = [1, 2, 3];
var b7 = a7.reverse();
console.log(a7);
console.log(b7);

/////////////////////////////////////////////////////////////////

// array.slice(start, end)
// end参数是可选的，默认值是数组的长度
// slice的意思是切下
// 此方法对array中的一段做深拷贝，元素数组不会被改变
// （测试出来是深拷贝，但书上写的是浅拷贝，不知道为啥）
// 深拷贝：创建了新内存
// 浅拷贝：是引用
var a8 = ['14', 'vxvf', 546, 1354];
var b8 = a8.slice(1, 3);
b8[0] = 'asdsd';
console.log(a8);
console.log(b8);

/////////////////////////////////////////////////////////////////

// array.splice(start, deleteCount, item...)
// splice的意思是粘接
// 此方法从数组中移除一个或多个元素，并用新item替换它们
// start是开始移除元素的位置，deleteCount是要移除的个数
// 返回一个被移除元素的数组
// splice最主要的用处是从一个数组中删除元素
var a9 = ['a', 'b', 'c', 'd', 'e'];
var b9 = a9.splice(1, 2, 'qweqwe', 'sdg', true, 35421);
console.log(a9);
console.log(b9);

/////////////////////////////////////////////////////////////////

// array.sort(comparefn)
// 此方法是对数组中的内容进行排序
// 比较复杂，请出门右转Google
var a10 = [21, 35, 65, 12, 32];
var b10 = a10.sort();
console.log(a10);
console.log(b10);

/////////////////////////////////////////////////////////////////

// array.map(function(currentValue, index, arr), thisValue)
// 第一个参数（函数）必选，数组中的每个元素都会执行这个函数，
// currentValue必选，当前元素的值
// index可选，当前元素的索引值
// arr可选，当前元素属于的数组对象
// 第二个参数（thisValue）可选，对象作为该执行回调时使用，传递给函数，用作 "this" 的值
// 如果省略了 thisValue，或者传入 null、undefined，那么回调函数的 this 为全局对象
// 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值
// 方法按照原始数组元素顺序依次处理元素
// 注意：方法不会对空数组进行检测
// 注意：方法不会改变原始数组
var a11 = [1, 2, 3, 4, 5];
var b11 = a11.map((item)=>{
    return item * item;
});
console.log(a11);
console.log(b11); // [1, 4, 9, 16, 25]

/////////////////////////////////////////////////////////////////

// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值
// reduce() 可以作为一个高阶函数，用于函数的 compose
// 注意: reduce() 对于空数组是不会执行回调函数的
// reduceRight() 遍历顺序与 reduce() 相反
var a12 = [1, 2, 3, 4, 5];
var b12 = a12.reduce((pre, cur)=>{
    return pre + cur;
});
console.log(a12);
console.log(b12); // 15

/////////////////////////////////////////////////////////////////

// array.filter(function(currentValue, index, arr), thisValue)
// filter 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素
// 注意：filter 不会对空数组进行检测
// 注意：filter 不会改变原始数组
var a13 = [1, 2, 3, 2, 3, 5, 2, 2];
console.log(a13.filter((val) => {
    return val >= 3;
})); // [3, 3, 5]