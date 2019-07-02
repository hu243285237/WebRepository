/* 
    用在数组前面，可以把数组的值全部打散，展开
*/

console.log(...[1, 2, 3]); // 1 2 3
console.log(...'ABCDEFG'); // A B C D E F G

function add(x, y) {
    return x + y;
}
var arr1 = [1, 2];
console.log(add(...arr1)); // 3

/*
    用在形参中，表示传递给他的参数集合，输入的参数会变为一组数组

    类似于arguments，可用作不定参，且只能放在最后面
*/
function add_N(x, y, ...values) {
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
        sum += values[i];
    }
    sum -= (x + y);
    return sum;
}
console.log(add_N(3, 4, 5, 6, 7)); // 11

/*
    对象中的扩展运算符(...)用于取出参数对象中的所有可遍历属性，拷贝到当前对象之中
*/

var obj1 = {
    a: 1,
    b: 'qwe',
    c: {
        cc: 99
    }
}
var obj2 = {
    ...obj1,
    d: 321,
    e: 'sdg'
}
obj2.a = 100; // a 是基础数据类型，所以改变 obj2.a 不会改变 obj1.a
obj2.c.cc = 9999; // c 是引用类型，所以 obj1 和 obj2 的 c.cc 都是 9999
console.log(obj1);
console.log(obj2);