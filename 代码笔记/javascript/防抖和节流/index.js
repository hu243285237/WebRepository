///////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  比如搜索框，用户在输入的时候使用 change 事件去调用搜索，如果用户每一次输入都去搜索的话，那得消耗大量的服务器资源
//
//  防抖（debounce）：
//
//  其中一种解决方案就是每次用户停止输入后，延迟超过 500ms 时，才去搜索此时的 String，这就是防抖
//    
//  原理：将若干个函数调用合成为一次，并在给定时间过去之后仅被调用一次
//
//  1. debounce 函数封装后，返回内部函数
//
//  2. 每一次事件被触发，都会清除当前的 timer 然后重新设置超时并调用。这会导致每一次高频事件都会取消前一次的超时调用，导致事件处理不能被触发
//
//  3. 只有当高频事件停止，最后一次事件触发的超时调用才能在 delay 时间后执行
//
//  当滚动的时候会不断地执行内部函数，不断地 clearTimeout 和 setTimeout
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////

function debounce(fn, delay) {
    // 维护一个 timer，用于记录当前执行函数的状态
    let timer = null;

    return function () {
        // 通过 'this' 和 'arguments'，获取函数的作用域和变量
        let context = this;
        let args = arguments;
        // 清理掉正在执行的函数，并重新执行
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(context, args)
        }, delay);
    }
}

// 记录当前函数调用的次数
let flag = 0;

// 当用户滚动时被调用的函数
function foo() {
    console.log("scroll %d times", ++flag);
}

// 在 debounce 中包装我们的函数，过 2 秒触发一次
window.addEventListener("scroll", debounce(foo, 2000));

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  节流（throttle）：
//
//  另一种解决方案比 '防抖' 要宽松些，这时我们不想用户一味的输入，而是给用户一些搜索提示
//  
//  所以在当中限制每过 500ms 就查询一次此时的 String，这就是节流
//
//  原理：节流函数不管事件触发有多频繁，都会保证在规定时间内一定会执行一次真正的事件处理函数
//
//  代码实现有两种，一种是时间戳，另一种是定时器
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// 时间戳
function throttle01(fn, delay) {
    let prev = Date.now();
    return function () {
        const context = this;
        const args = arguments;
        const now = Date.now();
        if (now - prev >= delay) {
            fn.apply(context, args);
            prev = Date.now();
        }
    }
}

// 定时器
function throttle02(fn, delay) {
    let timer = null;
    return function () {
        let context = this;
        let args = arguments;
        if (!timer) {
            timer = setTimeout(function () {
                fn,apply(context, args);
                timer = null;
            }, delay)
        }
    }
}

// 综合使用时间戳和定时器
function throttle(fn, delay) {
    let timer = null;
    let startTime = Date.now();
    return function () {
        let curTime = Date.now();
        let remaining = delay - (curTime - startTime);
        const context = this;
        const args = arguments;
        clearTimeout(timer);
        if (remaining <= 0) {
            fn.apply(context, args);
            startTime = Date.now();
        } else {
            timer = setTimeout(fn, remaining);
        }
    }
}