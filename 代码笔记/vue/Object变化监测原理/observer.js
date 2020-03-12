
// 使一个对象变为可观察的
function defineReactive(obj, key, val) {
    let dep = new Dep();
    Object.defineProperty(obj, key, {
        get: function () {
            console.log(`${key}属性被读取了，值为${val}`);
            dep.depend();
            return val;
        },
        set: function (newVal) {
            console.log(`${key}属性被修改了，从${val}改到${newVal}`);
            val = newVal;
            dep.notify();
        }
    });
}

// 使一个对象的每一属性变为可观测的
function observable(obj) {
    if (!obj || typeof obj !== 'object') {
        return;
    }
    let keys = Object.keys(obj);
    keys.forEach(key => {
        console.log(`~`);
        defineReactive(obj, key, obj[key]);
        console.log(`~~`);
    });
    return obj;
}

//----------------------------------------------

// 订阅器（依赖收集） Dep
class Dep {
    constructor() {
        this.subs = [];
    }
    // 添加订阅者
    depend() {
        if (Dep.target) {
            console.log("添加订阅");
            this.subs.push(Dep.target);
        }
    }
    // 通知订阅者更新
    notify() {
       this.subs.forEach(sub => {
           console.log("该更新了");
           sub.update();
       });
    }
}