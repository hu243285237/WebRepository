/*
    首先来了解 instanceof 实现的功能

    instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上
*/

var a = [];

console.log(a instanceof Object); // true
console.log(a instanceof Array); // true
console.log(a instanceof Function); // false

//----------------------------------------------

/*
    模拟 instanceof
*/

function myInstanceof(left, right) {
    let m_proto = left.__proto__;
    let m_prototype = right.prototype;
    while (true) {
        if (m_proto === null) {
            return false;
        } else if (m_proto === m_prototype) {
            return true
        }
        m_proto = m_proto.__proto__;
    }
}

console.log(myInstanceof(a, Object)); // true
console.log(myInstanceof(a, Array)); // true
console.log(myInstanceof(a, Function)); // false