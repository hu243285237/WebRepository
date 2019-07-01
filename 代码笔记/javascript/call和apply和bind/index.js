/* 
    js 内部提供了一种可以手动设置函数内部 this 指向的方法

    所有的函数都可以调用这三个方法 （call、apply、bind）

    调用一个对象的方法，以另一个对象替换当前对象

    都是在特定的作用域中调用函数，能改变函数的作用域
    
    实际上是改变函数体内 this 的值

    call 和 apply 差不多

    只不过 apply 第二个参数必须传入的是一个数组

    而 call 第二个参数可以是任意类型

    call (thisObject, arg1, arg2 ...)

    apply (thisObject, [args])

    bind 方法也可以指定函数内部的 this 指向，但它与 call / apply 不同

    当用 call 和 apply 时，函数内部 this 被显示指定，并且函数会立刻执行

    而当函数调用 bind 时，函数不会立刻执行，而是返回一个新的函数

    这个新的函数与原函数有共同的函数体，但它并非原函数

    而且新函数的参数与 this 指向都已经被绑定，参数为 bind 的后续参数
*/

var a = 20;
var obj = {
    a: 50
}
function fn(arg1, arg2, arg3) {
    console.log(this.a);
    console.log(arg1 + arg2 + arg3);
}

// 20 正常调用函数，this指向window
fn(1, 1, 1);

// 第一个参数指定this为obj对象，后面跟随参数，一个个传递
fn.call(obj, 1, 1, 1);

// 第一个参数指定this为obj对象，第二个参数为数组
fn.apply(obj, [1, 1, 1]);

// bindFn 的 this 被绑定为 obj
var bindFn = fn.bind(obj, 1, 2, 3);
bindFn();