/*
    先去理解作用域再来看这个

    一个变量初始化分为两个步骤

    第一步是声明变量，第二步是给变量赋值

    es5中的作用域有两种，全局作用域和函数作用域

    es6中let为js新加入了块级作用域，这表示外层代码块不受内层代码块的影响

    let命令只在当前块级作用域内有效

    const以上跟let差不多

    const一旦声明，不可改变，且必须赋值

    const常量名一般为大写字母

    通过 let 和 const 关键字声明的变量也会提升，但是和 var 不同，它们不会被初始化
    
    在我们声明（初始化）之前是不能访问它们的。这个行为被称之为暂时性死区
    
    当我们试图在声明之前访问它们时，JavaScript 将会抛出一个 ReferenceError 错误
*/

//////////////////////////////////////////////////////////

// var声明的变量由于不存在块级作用域所以可以在全局环境中调用
// 而let声明的变量由于存在块级作用域所以不能在全局环境中调用
{
    var a1 = 11;
    let b1 = 22;
}
//console.log(a1); // 11
//console.log(b1); // Uncaught ReferenceError: b1 is not defined

//////////////////////////////////////////////////////////

var a2 = [];
for (var i = 0; i < 10; i++) {
    a2[i] = function() {
        console.log(i);
    }
}
a2[6](); // 10

var a3 = [];
for (let j = 0; j < 10; j++) {
    a3[j] = function() {
        console.log(j);
    }
}
a3[6](); // 6

//////////////////////////////////////////////////////////

// const定义的基本类型不能改变，但是定义的对象是可以通过修改对象属性等方法来改变的
const a4 = {
    name: "qwe"
}
const b4 = 321;

a4.name = "asdasd";
//b4 = 456; // 报错

console.log(a4); // "asdasd"

//////////////////////////////////////////////////////////

console.log(a5); // undefined
console.log(b5); // Uncaught ReferenceError:Cannot access 'b5' before initialization

var a5 = 5;
let b5 = 5;

//////////////////////////////////////////////////////////