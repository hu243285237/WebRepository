/*
    变量分为基本数据类型和复杂数据类型

    基本数据类型：Number,String,Boolean,Undefined,Null,Symbol(ES6新添)

    复杂数据类型：Object

    对于基本数据类型
    他们的值在内存中占据着固定大小的空间，并被保存在栈内存中
    当一个变量向另一个变量复制基本类型的值，会创建这个值的副本

    对于引用类型
    复杂的数据类型即是引用类型，它的值是对象，保存在堆内存中
    包含引用类型值的变量实际上包含的不是对象本身，而是一个指向该对象的指针
    从一个变量向另一个变量复制引用类型的值，复制的其实是指针地址而已，因此两个变量最终都指向同一个对象
*/

var a = 0;
var b = '';
var c = true;
var d = undefined;
var e = null;
var f = Symbol("id");
var g = {};

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);