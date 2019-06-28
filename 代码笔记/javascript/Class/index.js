/* 
    ES6 中引入的 JavaScript 类实质上是 JavaScript 现有的基于原型的继承的语法糖

    类语法不会为JavaScript引入新的面向对象的继承模型

    函数声明和类声明之间的一个重要区别是函数声明会提升，类声明不会
    
    你首先需要声明你的类，然后访问它，否则代码会抛出一个ReferenceError

    class在语法上更贴近面向对象的写法

    class实现继承更加易读易理解

    类可以命名也可以匿名

    一个类的类体是一对大括号 {} 中的部分。这是你定义类成员的位置，如方法或构造函数

    constructor方法是一个特殊的方法，这种方法用于创建和初始化一个由class创建的对象
    
    一个类只能拥有一个名为 “constructor”的特殊方法
    
    如果类包含多个constructor的方法，则将抛出 一个SyntaxError

    一个构造函数可以使用 super 关键字来调用一个父类的构造函数

    super 关键字用于调用对象的父对象上的函数

    static 关键字用来定义一个类的一个静态方法，调用静态方法不需要实例化该类
    
    但不能通过一个类实例调用静态方法，静态方法通常用于为一个应用程序创建工具函数

    extends 关键字在类声明或类表达式中用于创建一个类作为另一个类的一个子类

    如果子类中存在构造函数，则需要在使用“this”之前首先调用 super()
*/

// 命名类
class MyFunction01 {
    constructor() {
    }
}

// 匿名类
var MyFunction02 = class {
    constructor() {
    }
}

//////////////////////////////////////////////////////////////////////////

// 静态方法的使用
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        var dx = a.x - b.x;
        var dy = a.y - b.y;
        return Math.hypot(dx, dy);
    }
}

var p1 = new Point(2, 5);
var p2 = new Point(6, 10);
console.log(Point.distance(p1, p2));

//////////////////////////////////////////////////////////////////////////

// 父类
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + " make a noise");
    }
}

// 子类01
class Dog01 extends Animal {
    speak() {
        console.log(this.name + " barks"); // 覆盖了父类的speak方法
    }
}
var dog01 = new Dog01("zcg");
dog01.speak();

// 子类02
class Dog02 extends Animal {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    speak() {
        super.speak();
        console.log(this.name + " ao~~~");
    }
}
var dog02 = new Dog02("yjf");
dog02.speak();

//////////////////////////////////////////////////////////////////////////