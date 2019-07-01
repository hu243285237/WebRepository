/* 
    setInterval() 方法会不停地调用函数，
    直到 clearInterval() 被调用或窗口被关闭
    第一个参数为执行的函数，第二个参数为周期（毫秒）
    方法返回的是一个唯一 id ，用于 clearInterval 函数来取消定时
*/

var a = setInterval(() => {
    console.log('abc')
}, 1000)

var b = setInterval(() => {
    console.log('qwe')
}, 1000)

console.log(a); // 第一个 setInterval 的 id 为 1
console.log(b); // 第二个 setInterval 的 id 为 2

clearInterval(a); // 根据 id 号取消定时