
let isSuccessP1 = true;
let isSuccessP2 = false;

let promiseCreator1 = () => new Promise((resole, reject) => {
    setTimeout(() => {
        if (isSuccessP1) {
            resole('p1 success!');
        } else {
            reject('p1 fail!');
        }
    }, 3000);
});

let promiseCreator2 = () => new Promise((resole, reject) => {
    setTimeout(() => {
        if (isSuccessP2) {
            resole('p2 success!');
        } else {
            reject('p2 fail!');
        }
    }, 1000);
});

// Promise.all([promiseCreator1(), promiseCreator2()]).then((fulfilled) => {
//     console.log(fulfilled); // ['p1 success!', 'p2 success!']
// }).catch((rejected) => {
//     console.log(rejected); // 返回最先被 reject 的值
// });

// ----------------------

Promise.myAll = (promiseArr) => {
    return new Promise((resolve, reject) => {

        const resArr = [];
        promiseArr.forEach(promise => {
            promise.then(res => {
                resArr.push(res);
                if (resArr.length === promiseArr.length) resolve(resArr);
            }).catch(e => {
                reject(e);
            });
        });

    });
};

Promise.myAll([promiseCreator1(), promiseCreator2()]).then((fulfilled) => {
    console.log(fulfilled); // ['p1 success!', 'p2 success!']
}).catch((rejected) => {
    console.log(rejected); // 返回最先被 reject 的值
});