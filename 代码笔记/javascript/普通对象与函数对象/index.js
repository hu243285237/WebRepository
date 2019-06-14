/*
    对象是通过函数创建的，而函数又是一种对象
*/

var o1 = {}; // 使用{}其实就是new Object的一种语法糖
var o2 = new Object(); // 通过函数创建对象
var o3 = new f1(); // f1在这里是构造函数

function f1() {};
var f2 = function () {};
var f3 = new Function();



console.log(o1); // object
console.log(o2); // object
console.log(typeof o3); // object

console.log(typeof f1); // function
console.log(typeof f2); // function
console.log(typeof f3); // function

console.log(typeof Object); // function
console.log(typeof Function); // function