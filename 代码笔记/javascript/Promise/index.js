/*
    Promise 对象用于异步操作
    
    它表示一个尚未完成且预计在未来完成的异步操作

    它有三种状态：
    pending 代表初始值，还未完成
    fulfilled 代表操作成功
    rejected 代表操作失败

    Promise 只有两种状态改变的方式：
    可以从 pending 转变为 fulfilled
    也可以从 pending 转变为 rejected
    
    一旦状态改变，就「凝固」了，会一直保持这个状态，不会再发生变化

    当状态发生变化，promise.then 绑定的函数就会被调用

    Promise 接受一个「函数」作为参数，该函数的两个参数分别是 resolve 和 reject
    
    这两个函数就是「回调函数」

    resolve 函数的作用：在异步操作成功时调用，并将异步操作的结果，作为参数传递出去

    reject 函数的作用：在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去

    Promise 实例生成以后，可以用 then 方法指定 resolved 状态和 reject 状态的回调函数

    .then 的第二个参数和 .catch 是一样的，当两个都写了的时候只会执行 .then 的第二个参数
*/

/////////////////////////////////////////////////////////////////////////////////

/*
    https://blog.csdn.net/qq_37860963/article/details/81539118
*/

var isBuyCloth = false;

var getCloth = new Promise(function (resolve, reject) {
    if (isBuyCloth) {
        var cloth = {
            color: 'red',
            price: 199
        }
        resolve(cloth);
    } else {
        var err = new Error('No Buy Cloth');
        reject(err);
    }
});

getCloth.then((fulfilled) => {
    console.log(fulfilled);
}).catch((rejected) => {
    console.log(rejected);
});

/////////////////////////////////////////////////////////////////////////////////

/*
    Promise.all 可以将多个 Promise 实例包装成一个新的 Promise 实例

    同时，成功和失败的返回值是不同的，成功的时候返回的是一个结果数组

    而失败的时候则返回最先被 reject 失败状态的值

    Promse.all 在处理多个异步处理时非常有用
    
    比如说一个页面上需要等两个或多个 ajax 的数据回来以后才正常显示，在此之前只显示 loading 图标

    需要特别注意的是，Promise.all 获得的成功结果的数组里面的数据顺序和 Promise.all 接收到的数组顺序是一致的
    
    即 p1 的结果在前，即便 p1 的结果获取的比 p2 要晚
*/

let isSuccessP1 = true;
let isSuccessP2 = true;

let p1 = new Promise((resole, reject) => {
    if (isSuccessP1) {
        resole('p1 success!');
    } else {
        reject('p1 fail!');
    }
});

let p2 = new Promise((resole, reject) => {
    if (isSuccessP2) {
        resole('p2 success!');
    } else {
        reject('p2 fail!');
    }
});

Promise.all([p1, p2]).then((fulfilled)=>{
    console.log(fulfilled); // ['p1 success!', 'p2 success!']
}).catch((rejected) => {
    console.log(rejected); // 返回最先被 reject 的值
});

/////////////////////////////////////////////////////////////////////////////////

/*
    顾名思义，Promse.race 就是赛跑的意思
    
    意思就是说，Promise.race([p1, p2])，里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态
*/

let isSuccessP3 = true;
let isSuccessP4 = false;

let p3 = new Promise((resole, reject) => {
    setTimeout(() => {
        if (isSuccessP3) {
            resole('p3 success!');
        } else {
            reject('p3 fail!');
        }
    }, 4000)
});

let p4 = new Promise((resole, reject) => {
    setTimeout(() => {
        if (isSuccessP4) {
            resole('p4 success!');
        } else {
            reject('p4 fail!');
        }
    }, 2000)
});

Promise.race([p3, p4]).then((fulfilled) => {
    console.log(fulfilled);
}).catch((rejected)=>{
    console.log(rejected); // 两秒后出现 'p4 fail!'
});

/////////////////////////////////////////////////////////////////////////////////