/*

    Math 对象提供了很多数学方面的操作

*/

console.log(Math);

///////////////////////////////////////////////////////////
//
//                         属性
//
///////////////////////////////////////////////////////////

// 圆周率，约等于 3.1415926
console.log(Math.PI);

// 算术常量 e，约等于 2.718
console.log(Math.E);

// 2 的自然对数，约等于 0.693
console.log(Math.LN2);

// 10 的自然对数，约等于 2.302
console.log(Math.LN10);

// 以 2 为底 e 的对数，约等于 1.442
console.log(Math.LOG2E);

// 以 10 为底 e 的对数，约等于 0.434
console.log(Math.LOG10E);

// 2 的平方根，约等于 1.414
console.log(Math.SQRT2);

// 2 的平方根的倒数，约等于 0.707
console.log(Math.SQRT1_2);

///////////////////////////////////////////////////////////
//
//                         方法
//
///////////////////////////////////////////////////////////

// 返回最大的值，可接受不定参
console.log(Math.max(1, 2, 100, -999));

// 返回最小的值，可接受不定餐
console.log(Math.min(1, 2, 100, -999));

// 返回数的绝对值
console.log(Math.abs(-10));

// 返回 x 的 y 次幂
console.log(Math.pow(2, 10));

// 返回数的平方根
console.log(Math.sqrt(2));

// 返回 0 到 1 之间的随机数
console.log(Math.random());

// 对数进行上舍入
console.log(Math.ceil(6.8));

// 对数进行下舍入
console.log(Math.floor(6.8));

// 把数四舍五入为最接近的整数
console.log(Math.round(4.499));

// 返回数的正弦
console.log(Math.sin(0.2));

// 返回数的余弦
console.log(Math.cos(0.2));

// 返回数的正切
console.log(Math.tan(0.2));

// 返回数的反正弦值
console.log(Math.asin(0.2));

// 返回数的反余弦值
console.log(Math.acos(0.2));

// 以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值
console.log(Math.atan(0.2));

// 返回数的自然对数，以 e 为底
console.log(Math.log(3));

// 返回 e 的指数
console.log(Math.exp(2));