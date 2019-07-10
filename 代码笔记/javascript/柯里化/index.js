/* 
    高阶函数：
    
    一个函数可以接收另一个函数作为参数

    柯里化（Currying）：
    
    把接受多个参数的函数变换成接受一个单一参数的函数
    并且返回（接受余下参数而且返回结果的）新函数的技术
*/

// 普通函数
var myAdd = function (a, b, c) {
    return a + b + c;
}

// 柯里化函数
var _myAdd = function (a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

var sum = myAdd(1, 2, 3);
var _sum = _myAdd(1)(2)(3);

console.log(sum); // 6
console.log(_sum); // 6

/////////////////////////////////////////////////////

// 案例 1
// 用于参数复用
// 写一个正则验证字符串

// 普通函数
function check(reg, txt) {
    return reg.test(txt);
}

console.log(check(/\d+/g, "test")); // false
console.log(check(/[a-z]+/g, "test")); // true

// 柯里化后
function _check(reg) {
    return function (txt) {
        return reg.test(txt);
    }
}

var hasNumber = _check(/\d+/g);
var hasLetter = _check(/[a-z]+/g)

console.log(hasNumber('test1')); // true
console.log(hasNumber('testasdasd')); // true
console.log(hasLetter('123124124')); // true

/////////////////////////////////////////////////////

// 案例 2
// 实现一个add方法，使计算结果能够满足如下预期：
// add(1)(2)(3) = 6;
// add(1, 2, 3)(4) = 10;
// add(1)(2)(3)(4)(5) = 15;

function add() {
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    // 其实本质就是 arguments 这个对象使用了数组的 slice 这个方法，得到了参数构成的数组
    var _args = Array.prototype.slice.call(arguments);

    // 在内部声明一个函数，利用闭包的特性保存 _args 并收集所有的参数值
    var _adder = function () {
        _args.push(...arguments);
        return _adder;
    };

    // 重写 toString，利用 toString 隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
    // 当 console.log 的时候才会执行 toString 方法
    _adder.toString = function () {
        return _args.reduce((a, b)=>{
            return a + b;
        });
    }

    return _adder;
}

var sum1 = add(1)(2)(3);
var sum2 = add(1, 2, 3)(4);
var sum3 = add(1)(2)(3)(4)(5);

console.log(sum1); // 6
console.log(sum2); // 10
console.log(sum3); // 15