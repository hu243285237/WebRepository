/*
    模拟构造new关键字的能力
*/

function New(func) {

    // 声明一个中间对象，该对象为最终返回的实例
    var res = {};
    if (func.prototype != null) {
        // 将实例的原型指向构造函数的原型
        res.__proto__ = func.prototype;
    }

    // ret为构造函数执行结果，这里通过apply，
    // 将构造函数内部的this指向修改为指向res，即实例对象
    var ret = func.apply(res, Array.prototype.slice.call(arguments, 1));

    // 当我们在构造函数中明确指定了返回对象时，
    // 那么new的执行结果就是该返回对象
    if ((typeof ret === "object" || typeof ret === "function") && ret !== null) {
        return ret;
    }

    // 如果没有明确指定返回对象，则默认返回res，这个res就是实例对象
    return res;
}

var Person = function (name) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
}

var p1 = New(Person, 'Jake');
var p2 = New(Person, 'Tom');

console.log(p1.getName()); // Jake
console.log(p2.getName()); // Tom
