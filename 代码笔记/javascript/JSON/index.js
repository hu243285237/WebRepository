/*
    JavaScript Object Notation

    JavaScript 对象简谱

    是一种轻量级的数据交换格式

    JSON 可以将 JavaScript 对象中表示的一组数据转换为字符串
    
    然后就可以在函数之间轻松地传递这个字符串
    
    或者在异步应用程序中将字符串从 Web 客户端传递给服务端程序

    两个关键的方法：

    stringify 将对象转为字符串，ify 是动态的意思

    parse 将字符串转为对象，parse 是解析的意思
*/

// 将对象转为字符串 使用JSON.stringify(xxx)
var json = {
    a: 123,
    b: 'asd',
    c: true
}
var json_string = JSON.stringify(json);
console.log(json_string);
console.log(typeof(json_string)); // string

// 将字符串转为对象 使用JSON.parse(xxx)
var str = '{ "d": "rty", "e": 321 }';
var json_object = JSON.parse(str);
console.log(json_object);
console.log(typeof(json_object)); // object