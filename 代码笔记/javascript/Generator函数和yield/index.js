/*

    一个 Generator（遍历器、生成器） 函数与普通 function 的区别就是函数名前面多了一个星号 * 

    是 ES6 提出来的
    
    但是执行时有很大不同，与 yield 命令配合，可以实现暂停执行的功能

    yield 这个关键字是用来暂停和恢复一个遍历器函数（的运行）的

    yield 关键字使生成器函数执行暂停，yield 关键字后面的表达式的值返回给生成器的调用者
    
    它可以被认为是一个基于生成器的版本的 return 关键字

    yield 关键字实际返回一个 IteratorResult 对象，它有两个属性，value 和 done
    
    value 属性是对 yield 表达式求值的结果，而 done 是 false，表示生成器函数尚未完全完成

    一旦遇到 yield 表达式，生成器的代码将被暂停运行，直到生成器的 next() 方法被调用
    
    每次调用生成器的 next() 方法时，生成器都会恢复执行，直到达到以下某个值

    `yield，导致生成器再次暂停并返回生成器的新值。 下一次调用 next() 时，在 yield 之后紧接着的语句继续执行
    `throw，用于从生成器中抛出异常，这让生成器完全停止执行，并在调用者中继续执行，正如通常情况下抛出异常一样
    `到达生成器函数的结尾，在这种情况下，生成器的执行结束，并且 IteratorResult 给调用者返回 undefined 并且 done 为 true
    `到达 return 语句。在这种情况下，生成器的执行结束，并将 IteratorResult 返回给调用者，其值是由 return 语句指定的，并且 done 为 true

    如果将参数传递给生成器的 next() 方法，则该值将成为生成器当前 yield 操作返回的值
*/

// 一个遍历器函数的声明
function* countAppleSacles() {
    var saleList = [3, 7, 5];
    for (let i = 0; i < saleList.length; i++) {
        yield saleList[i];
    }
}

var appleStore = countAppleSacles(); // Generator { }
console.log(appleStore.next()); // { value: 3, done: false }
console.log(appleStore.next()); // { value: 7, done: false }
console.log(appleStore.next()); // { value: 5, done: false }
console.log(appleStore.next()); // { value: undefined, done: true }

//---------------------------------------------------------------------------------------

// 案例

function* foo(x) {
    var y = 2 * (yield(x + 1));
    var z = yield(y / 3);
    return x + y + z;
}

// 第一次运行 a.next() 时，yield 返回的 value 为 5 + 1 = 6，
// 遍历器未执行完毕，所以 done 为 false
// 第二次运行 a.next() 时没有带参数，所以第一个 yield 的值为 undefined，y = 2 * undefined = NaN
// 遍历器未执行完毕，done 为 false
// 第三次运行 a.next() 时也没有带参数，所以第二个 yield 的值也为 undefined，z = undefined
// 最后 return 时 x + y + z = 5 + NaN + undefined = NaN
// 同时有了 return 值，遍历器执行完毕，所以 done 为 true

var a =  foo(5);
console.log(a.next()); // {value: 6, done: false}
console.log(a.next()); // {value: NaN, done: false}
console.log(a.next()); // {value: NaN, done: true}

//---------------------------------------------------------------------------------------