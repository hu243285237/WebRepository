/* 
    每当定义一个对象（函数也是对象）时，对象重都会包含一些预定的属性

    每个函数对象都有一个prototype属性

    这个属性指向函数的原型对象

    原型对象就是Person.prototype

    Person的原型对象有三个属性

    name、age、sayName，其实还有一个默认的属性：constructor

    在默认情况下，所有的原型对象都会自动获得一个constructor属性

    这个constructor属性指向prototype属性所在的函数（Person）

    只有prototype有constructor属性，__proto__属于上一父级的prototype，所以也有constructor

    即 Person.prototype.constructor === Person

    每个prototype的属性 = 自己添加的属性 + constructor + __proto__

    一直到Object.prototype为终点，Object.prototype没有__proto__属性

    可以把原型对象（Person.prototype）看成是构造函数（Person）的一个实例

    每个对象都有__proto__属性，但只有函数对象才有prototype

    p1.__proto__ = Person.prototype

    p2 = Person里的属性（多个属性独立列出来） + Person.prototype里的属性（显示为一个__proto__）

    Person.prototype不包含Person里的属性

    通过Person.prototype.__proto__可知，Person.prototype是基于Object创建的

    即Person.prototype.__proto__ === Object.prototype

    别忘了构造函数也是对象，除了有prototype属性，还有__proto__属性和自己添加的属性

    即Person = 自己添加的属性 + prototype + __proto__

    然后会发现Person.__proto__ === Function.prototype

    然后又会发现Function.prototype.__proto__ === Object.prototype

    这可以证明Function是Object继承下来的

    然后又发现Object.__proto__等于Function.prototype，这很容易理解，Object也是个构造函数

    最后的终点还是到了Object.prototype，它没有__proto__属性
*/

function Person(aa, bb) { 
    this.vv = aa;
    this.qq = bb;
}
Person.prototype.name = 'hh123';
Person.prototype.age = 24;
Person.prototype.sayName = function () { alert(this.name) }

var p1 = new Person();
var p2 = new Person(32, '2sg');

console.log(Person);
console.log(Person.prototype);
console.log(Person.prototype.constructor);
console.log(Person.prototype.__proto__);
console.log(Person.__proto__);
console.log(Function.prototype);
console.log(Object.prototype);
console.log(Function.prototype.__proto__);
console.log(Object);
console.log(Object.__proto__ === Function.prototype);

console.log(p1.__proto__);
console.log(p2);