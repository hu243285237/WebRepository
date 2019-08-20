///////////////////////////////////////////////////////////////////////
//
//  应用场景一：使用 Symbol 来作为对象属性名(key)
//
///////////////////////////////////////////////////////////////////////

/*

    Symbol 是由 ES6 规范引入的一项新特性，它的功能类似于一种标识唯一性的 ID

    可用 Symbol(string) 函数创建一个 symbol 类型的变量

    注意每个 symbol 都是唯一的

    可用 symbol 设置为对象的属性名



    Symbol 类型的 key 不能通过 for...in 和 Object.keys() 的枚举

    它未被包含在自身的属性名集合之中

    利用该特性，我们可以把一些不需要对外操作和访问的属性使用 Symbol 来定义

    也正因为这样一个特性，当使用 JSON.stringify() 将对象转换成 JSON 字符串的时候，Symbol 属性也会被排除在输出内容之外

    我们可以利用这一特点来更好的设计我们的数据对象，让 “对内操作” 和 “对外选择性输出” 变得更加优雅

    使用 Object.getOwnPropertySymbols(obj) 或者 Reflect.ownKeys(obj) 可以得到对象的 Symbol 属性
*/

var symbol01 = Symbol("my description");
var symbol02 = Symbol("my description");

console.log(typeof symbol01); // symbol
console.log(symbol01 === symbol02); // false

var obj = {
    name: "huhu",
    age: 24,
    [symbol01]: 100,
    [symbol02]: "my string"
}

console.log(obj);

obj[symbol01] = 999;
obj[symbol02] = "my string change";

console.log(obj);

for (var prop in obj) {
    console.log(prop); // name age
}

console.log(Object.getOwnPropertySymbols(obj)); // 得到一个 symbol 数组，只包含 symbol 属性
console.log(Reflect.ownKeys(obj)); // 得到一个数组，包含 name、age 和两个 symbol




///////////////////////////////////////////////////////////////////////
//
//  应用场景二：使用 Symbol 来替代常量
//
///////////////////////////////////////////////////////////////////////

/*
    以前我们经常定义一组常量来代表一种业务逻辑下的几个不同类型

    我们通常希望这几个常量之间是唯一的关系，用 Symbol 可以确保它是唯一的
*/

// 以前定义常量的方法
const TYPE_AUDIO = "AUDIO";
const TYPE_VIDEO = "VIDEO";
const TYPE_IMAGE = "IMAGE";

// 使用 symbol
const TYPE_DOC = Symbol("DOC");
const TYPE_EXE = Symbol("EXE");

var res = {
    type: TYPE_DOC
}

function handleFile (res) {
    switch (res.type) {
        case TYPE_AUDIO: console.log("TYPE_AUDIO"); break;
        case TYPE_VIDEO: console.log("TYPE_VIDEO"); break;
        case TYPE_IMAGE: console.log("TYPE_IMAGE"); break;
        case TYPE_DOC: console.log("TYPE_DOC"); break;
        case TYPE_EXE: console.log("TYPE_EXE"); break;
        default: throw new Error("Unknow Type");
    }
}

handleFile(res); // TYPE_DOC