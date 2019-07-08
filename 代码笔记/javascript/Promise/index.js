/*
    Promise 对象用于异步操作
    
    它表示一个尚未完成且预计在未来完成的异步操作

    它有三种状态：

    pending 代表初始值 （不是fulfilled，也不是rejected）
    fulfilled 代表操作成功
    rejected 代表操作失败

    Promise 有两种状态改变的方式，既可以从 pending 转变为 fulfilled ，也可以从 pending 转变为 rejected
    
    一旦状态改变，就「凝固」了，会一直保持这个状态，不会再发生变化

    当状态发生变化，promise.then 绑定的函数就会被调用

    Promise 接受一个「函数」作为参数，该函数的两个参数分别是 resolve 和 reject
    
    这两个函数就是就是「回调函数」

    resolve 函数的作用：在异步操作成功时调用，并将异步操作的结果，作为参数传递出去

    reject 函数的作用：在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去

    Promise 实例生成以后，可以用 then 方法指定 resolved 状态和 reject 状态的回调函数
*/

// 在 new 的时候给指定的回调函数 （这里 resolve 和 reject 还未定义）
var promise01 = new Promise(function (resolve, reject) {
    
});

// 通过 then 方法指定回调函数
// then 方法会返回一个 Promise 对象
var promise02 = new Promise();
promise02.then(function(){
    console.log("success");
}, function(){
    console.log("fail");
});