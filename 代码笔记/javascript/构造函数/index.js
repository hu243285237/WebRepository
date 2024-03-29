/* 
    p1、p2都是构造函数Person的实例

    两个实例都有一个constructor（构造函数）属性

    该属性（是一个指针）指向Person

    实例的构造函数属性（constructor）指向构造函数

    即 p1.constructor == Person

    JS中的函数即可以是构造函数又可以当作普通函数来调用

    当使用new来创建对象时，对应的函数就是构造函数

    通过对象来调用时就是普通函数

    一般构造函数首字母为大写，普通函数首字母为小写
*/

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function () { alert(this.name) }
}

var p1 = new Person('pp1', 21);
var p2 = new Person('pp2', 22);

console.log(p1.constructor);
console.log(p2.constructor);