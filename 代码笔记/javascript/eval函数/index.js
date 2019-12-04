/*

    eval 是 evaluate “评价” 的缩写

    eval 是一个全局对象的一个函数属性
    
    eval 函数会将传入的字符串当作 JavaScript 代码进行执行

    eval(string)

    如果参数是一个表达式，比如 eval(`1 + 2`)，eval 会对表达式进行求值

    如果参数是一个或多个 JavaScript 语句，则 eval 就会执行这些语句

    返回字符串中代码的返回值，如果返回值为空，则返回 undefined

    如果 eval 的参数不是字符串，则 eval 会将参数原封不动地返回

    出于安全考虑，不应该使用它

    而且 eval 通常比其他替代方法更慢，因为它必须调用 JavaScript 解释器

*/

console.log(eval(`
    console.log(123);
`));

eval(`
    let i = 10;
    i = i + 100;
    console.log(i);
`);

console.log(eval(`
    let j = 0;
    j = j + 5;
`));

console.log(eval(`
    1 + 2
`));

console.log(eval(
    66 + 33
));

console.log(eval(
    new String(`7 + 7`)
));


// 输出结果为

/*

123
undefined

110

5

3

99

String 对象，值为 `7 + 7`

*/