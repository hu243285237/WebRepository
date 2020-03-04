
//---------------------------------------

// 封装方法一：构建队列

function executePromises1 (...promises) {
    let result = Promise.resolve();
    promises.forEach(item => {
        result = result.then(item);
    });
    return result;
}

// 封装方法二：使用 async 和 await
async function executePromises2 (...promises) {
    let result = null;
    for (let item of promises) {
        result = await item();
    }
    return result;
}

//---------------------------------------

// 调用

function p1 () {
    return new Promise((resole, reject) => {
        setTimeout(() => {
            console.log('p1 success!');
            resole('p1 success!');
        }, 1000);
    });
}

function p2 () {
    return new Promise((resole, reject) => {
        setTimeout(() => {
            console.log('p2 success!');
            resole('p2 success!');
        }, 2000);
    });
}

function p3 () {
    return new Promise((resole, reject) => {
        setTimeout(() => {
            console.log('p3 success!');
            resole('p3 success!');
        }, 3000);
    });
}

executePromises1(p2, p3, p1); // 2 3 1

// executePromises2(p2, p3, p1); // 2 3 1
