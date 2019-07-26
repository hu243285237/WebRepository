/*
    使用 typeof 来检测一个变量的类型

    返回一个字符串，包含以下几种：

    'undefined'   'boolean'   'string'   'number'   'object'   'function'
*/

console.log(typeof a); // 'undefined'
console.log(typeof true); // 'boolean'
console.log(typeof '123'); // 'string'
console.log(typeof 12345); // 'number'
console.log(typeof NaN); // 'number'
console.log(typeof null); // 'object'
console.log(typeof {}); // 'object'
console.log(typeof new String()); // 'object'
console.log(typeof function(){}); // 'function'
console.log(typeof class c{}); // 'function'
console.log(typeof typeof 'abc'); // 'string'

/*
    typeof 运算符用于判断对象的类型，但是对于一些创建的对象，它们都会返回 'object'
    
    有时我们需要判断该实例是否为某个对象的实例，那么这个时候需要用到 instanceof 运算符

    返回一个 boolean 值，结果为 true 或者 false

    它用于判断一个变量是不是某个对象的子类，它会沿着原型链 __proto__ 向上找
    
    如果找到匹配的对象，就返回 true
*/

var a = new Array();
console.log(a instanceof Array); // true
console.log(a instanceof Object); // true

var b = function(){};
console.log(b instanceof Function); // true
console.log(b instanceof Object); // true
console.log(b instanceof Array); // false

var c = function(){};
var d = new c();
console.log(d instanceof c); // true
console.log(d instanceof Function); // false
console.log(d instanceof Object); // true
console.log(typeof (d instanceof Object)); // 'boolean'