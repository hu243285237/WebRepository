/*
    js对象分为普通对象和函数对象

    Object、Function是js自带的函数对象

    凡是通过new Function创建的对象都是函数对象，其他都是普通对象

    f1、f2归根结底都是通过new Function()的方式进行创建的

    Function、Object也都是通过new Function()创建的
*/

var o1 = {};
var o2 = new Object();
var o3 = new f1();

function f1() { };
var f2 = function () { };
var f3 = new Function('str', 'console.log(str)');

console.log(typeof Object); // function
console.log(typeof Function); // function

console.log(typeof f1); // function
console.log(typeof f2); // function
console.log(typeof f3); // function

console.log(typeof o1); // object
console.log(typeof o2); // object
console.log(typeof o3); // object



// 创建函数的三种方式（推荐第二种）：

function sum1(a, b) {
    return a + b;
}

var sum2 = function (a, b) {
    return a + b;
}

var sum3 = new Function('a', 'b', 'return a + b;')

console.log(typeof sum1); // function
console.log(typeof sum2); // function
console.log(typeof sum3); // function