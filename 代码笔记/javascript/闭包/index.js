/*
    闭包就是能够读取其他函数内部变量的函数
    
    例如在javascript中，只有函数内部的子函数才能读取局部变量
    
    所以闭包可以理解成'定义在一个函数内部的函数'
    
    在本质上，闭包是将函数内部和函数外部连接起来的桥梁

    在 Javascript 中，如果一个对象不再被引用，那么这个对象就会被 GC 回收，否则这个对象一直会保存在内存中

    由于闭包会使得函数中的变量被保存在内存中，内存消耗很大
    
    所以不能滥用闭包，否则会造成网页的性能问题

    闭包保护了函数内的变量安全

    通过保护变量的安全实现 Javascript 私有属性和私有方法
*/

// 最简单的实例

function fn() {
    let a = 100;
    return function get_a() {
        console.log(++a);
    }
}

var get_a = fn();
get_a(); // 101
get_a(); // 102

// 闭包的应用 Counter（计算器）

var Counter = (function(){
    var privateCounter = 0; // 私有变量
    function changeBy(val) { // 私有方法
        privateCounter += val;
    }
    return { // 公有方法
        increment: function(val) {
            changeBy(val);
        },
        decrement: function(val) {
            changeBy(-val);
        },
        getValue: function() {
            return privateCounter;
        }
    }
})();

console.log(Counter.getValue());
Counter.increment(1000);
console.log(Counter.getValue());
Counter.decrement(20);
console.log(Counter.getValue());