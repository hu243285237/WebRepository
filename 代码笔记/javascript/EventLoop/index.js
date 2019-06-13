/*
    这篇文章很不错，虽然是复制粘贴的

    https://www.cnblogs.com/MasterYao/p/5563725.html

    （1）所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）

    （2）主线程之外，还存在一个"任务队列"（task queue）

    只要异步任务有了运行结果，就在"任务队列"之中放置一个事件（callback）
    
    （3）一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，

    看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行

    （4）主线程不断重复上面的第三步

    主线程从"任务队列"中读取事件，这个过程是循环不断的
    
    所以整个的这种运行机制又称为Event Loop（事件循环）

    宏任务：主代码块、setTimeout、setInterval

    微任务：Promise

    先执行主线程执行栈，再执行微任务，再执行宏任务

    Promise对象用于异步操作，它表示一个尚未完成且预计在未来完成的异步操作
*/

// 案例，执行顺序为 promise、console、then、setTimeout

setTimeout(function() {
    console.log('setTimeout');
}, 0)

new Promise((resolve, reject) => {
    resolve();
    reject();
    console.log('promise');
}).then(() => {
    console.log('then');
}).catch(() => {
    console.log('catch');
})

console.log('console');