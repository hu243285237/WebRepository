/*
    在函数代码中，使用特殊对象 arguments，开发者无需明确指出参数名，就能访问它们
*/

//-------------------------------------------------------------------------

// 在 fn 没有指定参数，但是 arguments 会得到传过来的参数
// 下面这例子也是函数重载的一种方式
// 重载就是一组具有相同名字、不同参数列表的函数
function fn1() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

fn1('asd', 321, 'sf23'); // 遍历输出
fn1(true, false, 341, undefined, null); // 遍历输出

//-------------------------------------------------------------------------

// 另一个简单的函数重载
// 根据参数数量的不同，执行不同的 case 语句
function fn2() {
    switch (arguments.length) {
        case 0:
            console.log("zero");
            break;
        case 1:
            console.log("one");
            break;
        case 2:
            console.log("two");
            break;
    }
}

fn2(); // zero
fn2(1); // one
fn2(1, 2); // two

//-------------------------------------------------------------------------

// 尝试用静态语言的重载写 js
// 但 js 不行，后面的 fn3 会覆盖掉前面 fn3
function fn3() {
    console.log("fn3 first");
}

function fn3(num) {
    console.log("fn3 last")
}

fn3(); // fn3 last
fn3(123); // fn3 last

//-------------------------------------------------------------------------

// 最优的 js 重载方法

// https://www.cnblogs.com/yugege/p/5539020.html

// 存放数据的对象，希望给它一个 find 方法，当参数不同时返回不同的数据
var people = {
    values: ["Dean Edwards", "Sam Stephenson", "Alex Russell", "Dean Tom"]
}

// 第一个参数为要绑定方法的对象
// 第二个参数为绑定的方法名称
// 第三个为需要绑定的方法
//
// 当执行 people.find() 的时候，输出为 2 2 1
// 当执行 people.find("Dean") 的时候，输出为 2 1
// 当执行 people.find("Dean", "Edwards") 的时候，输出为 1
// addMethod 充分用到了闭包的特性
// arguments.length 就是实际传过来参数的个数
//
// 假如调用 people.find() 方法
// 这时候 fn 还等于最后添加两个参数的那个函数
// 第一步：fn.length = 2, arguments.length = 0
// 第二步：fn.length = 1, arguments.length = 0
// 第三步：fn.length = 0, arguments.length = 0
// 通过 old 找到上一次 addMethod 传过来的那个函数
//
function addMethod(object, name, fn) {
    // 将前一次添加的方法存在一个临时变量 old 里面
    var old = object[name];
    // 重写了 object[name] 的方法
    object[name] = function() {
        // 如果调用 object[name] 方法时，传入的参数个数跟预期的一致，则直接调用
        // fn.length 可以得到函数形参的个数，注意是形参
        if (fn.length === arguments.length) {
            console.log(1);
            return fn.apply(this, arguments);
        }
        // 否则，判断 old 是否为函数，如果是则调用 old
        else if (typeof old === "function") {
            console.log(2);
            return old.apply(this, arguments);
        }
    }
}

// 通过 addMethod 来实现对 people.find 方法的重载
// 注意：第三个参数不能使用箭头函数，否则输出为 undefined
// 箭头函数的 this 就是箭头函数外的那个 this
// 因为箭头函数没有自己的 this
// 这里使用箭头函数的话 this 会指向 window 对象


// 当不传参时返回 people.values 的所有元素
addMethod(people, "find", function() {
    return this.values;
});

// 当传一个参数时，按 first-Name 的匹配进行返回
addMethod(people, "find", function(firstName) {
    var ret = [];
    for (let i = 0; i < this.values.length; i++) {
        if (this.values[i].indexOf(firstName) === 0) {
            ret.push(this.values[i]);
        }
    }
    return ret;
});

// 当传两个参数时，返回 first-Name 和 last-Name 都匹配的元素
addMethod(people, "find", function(firstName, lastName) {
    var ret = [];
    for (let i = 0; i < this.values.length; i++) {
        if (this.values[i] === (firstName + " " + lastName)) {
            ret.push(this.values[i]);
        }
    }
    return ret;
});

// 输出测试
console.log(people.find()); // ["Dean Edwards", "Sam Stephenson", "Alex Russell", "Dean Tom"]
console.log(people.find("Dean")); // ["Dean Edwards", "Dean Tom"]
console.log(people.find("Dean", "Edwards")); // ["Dean Edwards"]

//-------------------------------------------------------------------------