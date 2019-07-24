/////////////////////////////////////////////////////////////////////////////
//
//    Proxy 是 ES6 新加的
//
//    Proxy 用于修改某些操作的默认行为，即对编程语言层面进行修改，属于“元编程”，
//    
//    Proxy 意思为“代理”，即在访问对象之前建立一道“拦截”，
//    
//    任何访问该对象的操作之前都会通过这道“拦截”，即执行 Proxy 里面定义的方法
//
/////////////////////////////////////////////////////////////////////////////

// 创建的 target 对象为所要拦截的对象
let target = {
    name: 'yohehehe',
    age: 24
}

// handler 对象为拦截对象后执行的操作
let handler = {
    // 这里 get 方法为读取操作，即用户想要读取 pro 中的属性时执行的拦截操作
    get: () => {
        return console.log('get success');
    },
    set: () => {
        return console.log('set success');
    }
}

// 最后创建一个 Proxy 实例
let pro = new Proxy(target, handler);

// 输出为 get success
// 如果不写 get 方法，则 pro.name 等于 yohehehe
pro.name;

// 输出为 set success
pro.age = 18;

//----------------------------------------------------------------------

// zcg 给的一道题
// 关键点：
// pipe(3) 返回一个 oproxy 对象
// funcStack 数组存放 double, pow, reverseInt 这三个函数
// 最后 get 时通过 reduce 方法逐步执行上面三个函数
// "63" | 0 = 63
var pipe = (function () {
    return function (value) {
        var funcStack = [];
        var oproxy = new Proxy({}, {
            get: function (pipeObject, fnName) {
                if (fnName === 'get') {
                    return funcStack.reduce(function (val, fn) {
                        return fn(val);
                    }, value);
                }
                funcStack.push(window[fnName]);
                return oproxy;
            }
        });

        return oproxy;
    }
}());

var double = n => n * 2;
var pow = n => n * n;
var reverseInt = n => n.toString().split("").reverse().join("") | 0;

console.log(pipe(3).double.pow.reverseInt.get); // 63

//----------------------------------------------------------------------

// zcg 给的题目2
// 关键点：
// dom 是一个 proxy 对象
// 当 dom.div 时执行 get 方法
// get 方法返回的是一个函数，所以 dom.div 就可以当作函数来用
// 第一个参数是这个标签的属性值，后面的参数是这个标签的子标签
// 第一个 for 循环把属性值全部赋予这个标签
// 第二个 for 循环把子标签添加到这个父标签上
const dom = new Proxy({}, {
    get(target, property) {
        return function (attrs = {}, ...children) {
            const el = document.createElement(property);
            for (let prop of Object.keys(attrs)) {
                el.setAttribute(prop, attrs[prop]);
            }
            for (let child of children) {
                if (typeof child === 'string') {
                    child = document.createTextNode(child);
                }
                el.appendChild(child);
            }
            return el;
        }
    }
});

const el = dom.div({},
    'Hello, my name is ',
    dom.a({ href: '//example.com' }, 'Mark'),
    '. I like:',
    dom.ul({},
        dom.li({}, 'The web'),
        dom.li({}, 'Food'),
        dom.li({}, '…actually that\'s it')
    )
);

document.body.appendChild(el);

//----------------------------------------------------------------------