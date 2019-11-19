//////////////////////////////////////////////////
//
//  数组扁平化是指将一个多维数组变为一维数组
//
//  比如：  [1, [2, 3, [4, 5]]] => [1, 2, 3, 4, 5]
//
//////////////////////////////////////////////////

var arr = [1, [2, 3, [4, 5]]];

//------------------------------------------

// 方法一：递归
function flatten1(arr) {
    let res = [];
    arr.map(item => {
        if (Array.isArray(item)) {
            res = res.concat(flatten1(item));
        } else {
            res.push(item);
        }
    });
    return res;
}
console.log(flatten1(arr));

//------------------------------------------

// 方法二：reduce
function flatten2(arr) {
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flatten2(cur) : cur);
    }, []);
}
console.log(flatten2(arr));

//------------------------------------------

// 方法三：toString & split
function flatten3(arr) {
    return arr.toString().split(",").map(item => {
        return parseInt(item);
    });
}
console.log(flatten3(arr));

//------------------------------------------

// 方法四：join & split
function flatten4(arr) {
    return arr.join().split(',').map(item => {
        return parseInt(item);
    });
}
console.log(flatten4(arr));

//------------------------------------------

// 方法五：扩展运算符
function flatten5(arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}
console.log(flatten5(arr));

//------------------------------------------

// 方法六：flat 函数
function flatten6(arr) {
    return arr.flat(Infinity);
}
console.log(flatten6(arr));

//------------------------------------------