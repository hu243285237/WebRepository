///////////////////////////////////////////////////////////

// 简单的数组去重
// 使用 filter 来对数组每一项进行判断
// filter 根据返回值是 true 还是 false 决定保留还是丢弃该元素
// indexOf 会返回元素首次出现的位置
// 用 filter 不会改变原数组
let a1 = [1, 2, 2, 2, 3, 4, 5, 5];
let b1 = a1.filter((val, index, arr) => {
    return arr.indexOf(val) === index;
});
console.log(b1); // [1, 2, 3, 4, 5]

///////////////////////////////////////////////////////////

// 使用 Set 来数组去重
// new Set(array) 可以将数组变为 Set，会自动去重
// 可以使用 Array.from 或者 扩展运算符将 Set 转为数组
let a2 = [5, 5, 4, 8, 8, 4, 6, 7, 9, 9, 5];
let b2 = new Set(a2);
let c2 = Array.from(b2);
let d2 = [...b2];
console.log(c2); // [5, 4, 8, 6, 7, 9]
console.log(d2); // [5, 4, 8, 6, 7, 9]

///////////////////////////////////////////////////////////

// 最少代码的去重方法
// 其实就是上面的缩写版
let a3 = [7, 7, 7, 6, 5, 6, 1, 2, 7];
function b3 (arr) {
    return [...new Set(arr)]
}
console.log(b3(a3));

///////////////////////////////////////////////////////////