/* 
    Truthy (真值) 指的是在布尔值上下文中，转换后的值为真的值

    Falsy (虚值) 是在 Boolean 上下文中已认定可转换为 false 的值

    只有六种 Falsy 值

    undefined、null、NaN、0、''、false

    其余全都是 Truthy
*/

// 以下都为 false

if (!false) {
    console.log('false is Falsy');
}
if (!null) {
    console.log('null is Falsy');
}
if (!undefined) {
    console.log('undefined is Falsy');
}
if (!0) {
    console.log('0 is Falsy');
}
if (!NaN) {
    console.log('NaN is Falsy');
}
if (!'') {
    console.log('"" is Falsy');
}

// 以下都为 true

if (true) {
    console.log('true is Truthy');
}
if ({}) {
    console.log('{} is Truthy');
}
if ([]) {
    console.log('[] is Truthy');
}
if (42) {
    console.log('42 is Truthy');
}
if ("foo") {
    console.log('"foo" is Truthy');
}
if (new Date()) {
    console.log('new Date() is Truthy');
}
if (-42) {
    console.log('-42 is Truthy');
}
if (3.14) {
    console.log('3.14 is Truthy');
}
if (-3.14) {
    console.log('-3.14 is Truthy');
}
if (Infinity) {
    console.log('Infinity is Truthy');
}
if (-Infinity) {
    console.log('-Infinity is Truthy');
}