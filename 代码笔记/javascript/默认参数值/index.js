/*

    ES6 允许函数参数具有默认值

*/

function add(x, y = 50, z = 100) {
    return x + y + z;
}

console.log(add(1)); // 151
console.log(add(1, 2, 3)); // 6