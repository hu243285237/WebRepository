/////////////////////////////////////////////////////////////////
//                        Number拥有的方法
/////////////////////////////////////////////////////////////////

// number.toExponential(fractionDigits)
// Exponential意思是指数的，fractionDigits意思是小数点后面的位数
// 这个方法把number转换成一个指数形式的字符串
var a1 = (354861).toExponential(2);
var b1 = 14.135481.toExponential(2)
var c1 = (-4000).toExponential(2)
console.log(a1);
console.log(b1);
console.log(c1);

/////////////////////////////////////////////////////////////////

// number.toFixed(fractionDigits)
// 这个方法把数字转换成一个十进制数形式的字符串
// 参数控制小数点后面的位数，其值为0~20，默认为0
var a2 = (999).toFixed(2);
var b2 = (-123.45).toFixed();
console.log(a2);
console.log(b2);

/////////////////////////////////////////////////////////////////

// number.toPrecision(precision)
// Precision的意思是精度
// 这个方法把数字转为一个十进制数形式的字符串，但与toFixed不同
// precision参数表示整个数字的位数，小数点前的位数加上小数点后的位数
// 不够显示的位数会用指数来表示（例如a2 = 1.0e+3）
// 参数控制数字的精度，值在1~21之间，默认值为数字的最大位数
var a3 = (999).toPrecision(1);
var b3 = (999).toPrecision(2);
var c3 = (999).toPrecision(3);
var d3 = (-1234.5324).toPrecision();
console.log(a3);
console.log(b3);
console.log(c3);
console.log(d3);

/////////////////////////////////////////////////////////////////

// number.toString(radix)
// radix的意思是进制
// 这个方法把数字转为一个字符串
// 参数控制基数，值为2~36之间，默认值是10
// 参数除了可以是整数外，也可以是任意数字
var a4 = (24).toString();
var b4 = (24).toString(2);
var c4 = (24).toString(16);
console.log(a4);
console.log(b4);
console.log(c4);