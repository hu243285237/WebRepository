/*
    作用域 scope

    作用域分为'全局作用域'和'函数作用域'

    ES6 的 let 和 const 给 javascript 添加了块级作用域
*/

var a = 1; // 属于全局作用域

function fn() {
    var b = 2; // 属于函数作用域
}

{
    var c = 3; // 属于全局作用域
    let d = 4; // 属于块级作用域
}

/*
console.log(a); // 1
console.log(b); // b is not defined
console.log(c); // 3
console.log(d); // d is not defined
*/

// 10 个 10 ，i 属于全局作用域
for (var i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000);
}

// 0 1 2 3 4 5 6 7 8 9 ，j 属于块级作用域
for (let j = 0; j < 10; j++) {
    setTimeout(() => {
        console.log(j)
    }, 1000);
}