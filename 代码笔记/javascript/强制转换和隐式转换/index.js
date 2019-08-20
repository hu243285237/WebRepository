////////////////////////////////////////////////////////////////
//
//                          强制转换
//
////////////////////////////////////////////////////////////////

// 通过 String(), Number(), Boolean() 函数强制转换

var a = 123;
var a1 = String(a);
var a2 = Number(a1);
var a3 = Boolean(a);

console.log(typeof a); // number
console.log(typeof a1); // string
console.log(typeof a2); // number
console.log(typeof a3); // boolean

////////////////////////////////////////////////////////////////
//
//                          隐式转换
//
////////////////////////////////////////////////////////////////

// 通常发生在运算符加减乘除、大于、小于、等于等

// 字符串加数字，数字就会转成字符串

// 数字减字符串，字符串转成数字。如果字符串不是纯数字就会转成NaN。字符串减数字也一样。两个字符串相减也先转成数字

// 乘，除，大于，小于跟减的转换也是一样

console.log(10 + '20'); // 1020 string
console.log(10 - '20'); // -10 number
console.log(10 + 'one'); // 10one string
console.log(10 - 'one'); // NaN
console.log(10 * '20'); // 200 number
console.log('10' * '20'); // 200 number
console.log('10' * 'one'); // NaN
console.log('10' - '20'); // -10 number
console.log(10 + null); // 10 number
console.log('10' + null); // 10null string
console.log('one' + undefined); // oneundefined string
console.log(null + false); // 0 number
console.log(NaN + '10'); // NaN10 string
console.log(NaN + 10); // NaN
console.log(null + undefined); // NaN
console.log(10 + undefined); // NaN

// 关于 ==

// undefined 等于 null

// 字符串和数字比较时，字符串转数字

// 数字和布尔比较时，布尔转数字

// 字符串和布尔比较时，两者转数字

console.log(undefined == null); // true
console.log('0' == 0); // true
console.log(0 == false); // true
console.log('0' == false); // true
console.log(undefined == '0'); // false
console.log(null == false); // false
console.log(null == 0); // false
console.log(undefined == '0'); // false