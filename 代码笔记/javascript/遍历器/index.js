/*

    JavaScript 原有的表示 “集合” 的数据结构，主要是数组和对象，ES6 又添加了 Map 和 Set

    遍历器（Iterator）是一种接口，也是一个对象，为各种不同的数据结构提供统一的访问机制

    任何数据结构只要部署 Iterator 接口，就可以完成遍历操作

    Iterator 接口的目的，是为了所有数据结构提供一种统一的访问机制，即 for...of 循环

    当使用 for...of 循环遍历某种数据结构时，该循环会自动去寻找 Iterator 接口

    ---------------------------------------------------------------------------------

    Iterator 遍历过程：

    1. 创建一个指针对象，指向当前数据结构的起始位置。（也就是说，遍历器对象本质上就是一个指针对象）

    2. 第一次调用指针对象的 next 方法，可以将指针指向数据结构的第一个成员

    3. 第二个调用 next 方法，指针指向第二个成员

    4. 不断地调用 next 方法，直至它指向数据结构的结束位置

    每次调用 next 方法，都会返回当前成员的信息，具体来说就是返回一个包含 value 和 done 两个属性的对象

    其中 value 属性是当前成员的值，done 属性是一个布尔值，代表遍历是否结束

    ---------------------------------------------------------------------------------

    ES6 规定，默认的 iterator 接口部署在数据结构的 Symbol.iterator 属性

    一个数据结构只要具有 Symbol.iterator 属性，就可以认为是 “可遍历的（iterable）”

    Symbol.iterator 属性本身是一个函数，就是当前数据结构默认的遍历器生成函数，执行这个函数会返回一个遍历器

    具有 iterable 类型的集合可以通过新的 for...of 循环来遍历

    for...of 是 ES6 引入的新语法，其实就是调用 Symbol.iterator 方法得到一个 iterator 对象，然后调用 next 方法直到结束

    原生具备 iterator 接口的数据结构如下：

    Array、Map、Set、String、TypedArray、函数的 arguments 对象、NodeList 对象、Generator

    Array 的 iterator 是 Array Iterator {}

    Map 的 iterator 是 MapIterator {}

    Set 的 iterator 是 SetIterator {}

    String 的 iterator 是 StringIterator {}

    它们的 __proto__ 都有一个 next 方法

    ---------------------------------------------------------------------------------

*/

// array.keys() array.values() array.entries() 都会返回一个 iterator 对象
// keys() 返回键，values() 返回值，entries() 返回键值对
var a = ["abc", 321, true];
console.log(a.keys());
console.log(a.values());
console.log(a.entries());
console.log(a[Symbol.iterator]()); // Array Iterator {}

var b = new Map([['mm1', 1], ['mm2', 2], ['mm3', 3]]);
console.log(b[Symbol.iterator]()); // MapIterator {}

var c = new Set([1, 2, 3]);
console.log(c[Symbol.iterator]()); // SetIterator {}

var d = new String("987654321");
console.log(d[Symbol.iterator]()); // StringIterator {}

var e = "654321987";
console.log(e[Symbol.iterator]()); // StringIterator {}

////////////////////////////////////////
//
//          模拟 next 方法
//
////////////////////////////////////////

function makeIterator(arr) {
    var nextIndex = 0;
    return {
        next: function () {
            return nextIndex < arr.length ? { value: arr[nextIndex++], done: false } : { value: undefined, done: true };
        }
    };
}
var m_iterator01 = makeIterator([321, 456]);
var m_iterator02 = makeIterator([1, 2, 5, 4, 3]);
console.log(m_iterator01);
console.log(m_iterator02);

////////////////////////////////////////
//
//          模拟 Iterator
//
////////////////////////////////////////

// a1 这个对象是可遍历的，可以使用 for..of 循环，因为具有 Symbol.iterator 属性
var a1 = {
    data: [ 'zxc', 'asd'],
    [Symbol.iterator]: function () {
        const self = this;
        let nextIndex = 0;
        return {
            next: function () {
                return nextIndex < self.data.length ? { value: self.data[nextIndex++], done: false } : { value: undefined, done: true };
            }
        };
    }
};
for (let value of a1) {
    console.log(value);
}