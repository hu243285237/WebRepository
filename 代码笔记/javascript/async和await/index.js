/*

    async（异步）: 后面接一个函数，代表这个函数里面有异步操作

    无论 async 函数有无 await 操作，其总是返回一个 promise

    1. 没有显示 return，相当于 return Promise.resolve(undefined)

    2. return 非 promise 的数据 data，相当于 return Promise.resolve(data)

    3. return promise，会得到 promise 对象本身

    由于 async 总是返回 promise，因此，其后面可以直接调用 then 方法

    函数内部 return 返回的值会成为 then 回调函数的参数

    函数内部抛出错误，会被 then 的第二个函数或 catch 方法捕获到

    ----------------------------------------------------------
    
    await（等待）: 只能放在异步函数里

    可以使我们的异步代码看起来更像同步代码

    await 后面跟一个 promise 对象，如果不是的话就会阻塞后面的代码

*/

//-------------------------

// 返回正常值

async function sayHello1() {
    return 'hello1';
}

console.log(sayHello1()); // 函数返回的是一个 promise

sayHello1().then(v => {
    console.log(v);
});

//--------------------------

// 抛出错误

async function sayHello2() {
    throw new Error('error');
}

sayHello2().then(v => {
    console.log(v);
}).catch(e => {
    console.log(e);
});

//--------------------------

function waitSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            console.log('2');
        }, 2000);
    });
}

// '1' 然后等两秒显示 '2' 和 '3'
async function sayHello3() {
    console.log(1);
    await waitSecond();
    console.log(3);
}

sayHello3();