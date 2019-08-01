///////////////////////////////////////////////////////////////////////////////////////
//                                   Object拥有的方法
///////////////////////////////////////////////////////////////////////////////////////

// object.hasOwnProperty(name)
// 如果这个对象包含一个名为name的属性，那返回true
// 原型链中的属性是不会被检查的
// 参数是一个字符串

var a1 = {}
a1.name = "hhhh"
console.log(a1.hasOwnProperty('name'));

///////////////////////////////////////////////////////////////////////////////////////

// Object.defineProperty(obj, prop, descriptor)
// 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回这个对象
// 返回一个被传递函数的对象
// 通过赋值操作添加的普通属性是可枚举的，能够在属性枚举期间呈现出来（for...in 或 Object.keys 方法），这些属性的值可以被改变，也可以被删除
// 这个方法允许修改默认的额外选项（或配置）。默认情况下，使用 Object.defineProperty() 添加的属性值是不可修改的
//
// configurable: 
// 当且仅当该属性的 configurable 为 true 时，该属性描述符才能够被改变，同时该属性也能从对应的对象上被删除，默认为 false
//
// enumerable:
// 当且仅当该属性的 enumerable 为 true 时，该属性才能够出现在对象的枚举属性中，默认为 false
//
// value:
// 该属性对应的值，可以是任何有效的 JavaScript 值（数值，对象，函数等），默认为 undefined
// 不能和 get set 同用
//
// writable:
// 当且仅当该属性的 writable 为 true 时，value 才能被赋值运算符改变，默认为 false
// 不能和 get set 同用
//
// get:
// 一个给属性提供 getter 的方法，如果没有 getter 则为 undefined
// 当访问该属性时，该方法会被执行，方法执行时没有参数传入，但是会传入this对象
// （由于继承关系，这里的this并不一定是定义该属性的对象），默认为 undefined
//
// set:
// 一个给属性提供 setter 的方法，如果没有 setter 则为 undefined
// 当属性值修改时，触发执行该方法，该方法将接受唯一参数，即该属性新的参数值，默认为 undefined

var a2 = {
    age: 24
}
Object.defineProperty(a2, "myName", {
    get: () => {
        return "hu_get";
    },
    set: () => {
        return "hu_set";
    }
});

Object.defineProperty(a2, "mySchool", {
    value: "SZDX",
    writable: false,
    enumerable: true,
    configurable: true
});

console.log(a2); // {...}
console.log(a2.myName); // hu_get

console.log(a2.mySchool); // SZDX
a2.mySchool = "SZDX222"; // 因为 writable = false，所以值没变
console.log(a2.mySchool); // SZDX

for (let prop in a2) { // age, mySchool，myName 没打印因为 enumerable 默认为 false
    console.log(prop);
}

delete a2.mySchool; // 删除成功，因为 configurable 为 true
console.log(a2.mySchool); // undefined

delete a2.myName; // 删除失败，因为 configurable 默认为 false
console.log(a2.myName); // hu_get

///////////////////////////////////////////////////////////////////////////////////////

var a3 = {
    name1: "qwe",
    name2: "asd"
}

Object.defineProperty(a3, "name3", {
    value: "zxc",
    enumerable: false
});

// Object.keys(obj)
// 返回一个所有元素为字符串的数组，其元素来自于从给定的 object 上面可直接枚举的属性
// 如果属性的 enumerable 为 false 则无法得到

console.log(Object.keys(a3)); // [ "name1", "name2" ]

// Object.values(obj)
// 返回一个数组，其元素是在对象上找到的可枚举属性值
// 如果属性的 enumerable 为 false 则无法得到

console.log(Object.values(a3)); // [ "qwe", "asd" ]

///////////////////////////////////////////////////////////////////////////////////////