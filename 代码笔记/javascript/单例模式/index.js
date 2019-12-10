/*

    单例模式

    定义：保证一个类仅仅只有一个实例，并提供一个访问它的全局访问点

    意义：有的时候，一些对象我们仅仅只需要一个，比如线程池、全局缓存等

*/

//------------------------------------

// ES5

var People = function (name) {
    this.name = name;
}

var MakeSingleton = function (obj) {
    var instance = null;
    return function () {
        if (instance) {
            return instance;
        }
        return instance = new obj(arguments);
    }
}

People = MakeSingleton(People);
var a = new People("a");
var b = new People("b");
console.log(a);
console.log(b);
console.log(a===b);

//------------------------------------

// ES6

class People2 {
    constructor(name) {
        if (typeof People2.instance === "object") {
            return People2.instance;
        }
        People2.instance = this;
        this.name = name;
        return this;
    }
}

var a2 = new People2("a2");
var b2 = new People2("b2");
console.log(a2);
console.log(b2);
console.log(a2===b2);
