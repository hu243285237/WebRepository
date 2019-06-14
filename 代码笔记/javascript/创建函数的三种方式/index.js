/*
    创建函数的三种方式
*/

// 第一种：直接定义函数
function a() {}

// 第二种：定义一个匿名函数，通过一个变量引用它
var b = function () {}

// 第三种：使用函数来创建函数，也是一个匿名函数，需要通过一个变量引用它
// 除了new Function的类型是function外，其他new XXX都是object
// 所以在编辑器它为浅蓝色（变量），通过编译之后才知道它其实是function
var c = new Function()

// 它们仨都是函数
console.log(typeof a); // function
console.log(typeof b); // function
console.log(typeof c); // function

// 通过打印会发现它们长的都不一样
console.log(a);
console.log(b);
console.log(c);

/*
    new Function 在引擎内部创建对象时调用 SetFunctionName(F, "anonymous")
    
    而正常的函数声明如 function somefun(){} 在引擎内部调用 SetFunctionName(value, bindingId), bindingId 就是somefun
*/