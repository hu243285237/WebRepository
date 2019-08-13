
///////////////////////////////////////////////////////////

// 简单的数组去重
// 使用 filter 来对数组每一项进行判断
// filter 根据返回值是 true 还是 false 决定保留还是丢弃该元素
// indexOf 会返回元素首次出现的位置
let a = [1, 2, 2, 2, 3, 4, 5, 5];
let b = a.filter((val, index, arr) => {
    return arr.indexOf(val) === index;
});
console.log(b);

///////////////////////////////////////////////////////////