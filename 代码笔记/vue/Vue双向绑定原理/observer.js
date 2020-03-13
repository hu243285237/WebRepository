
// 使一个属性变为可观察的
function defineReactive(obj, key, val) {
    // 收集 watcher 的容器
    let dep = new Dep();
    // 在这里，一个 defineProperty 会给 obj 添加三个属性
    // 比如 message、set message、get message
    Object.defineProperty(obj, key, {
        get: function () {
            dep.depend();
            return val;
        },
        set: function (newVal) {
            val = newVal;
            dep.notify();
        }
    });
}

// 使一个对象的每一属性都变为可侦测的
function observable(obj, vm) {
    Object.keys(obj).forEach(key => {
        defineReactive(vm, key, obj[key]);
    });
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
            this.subs.push(Dep.target);
        }
    }
    // 通知订阅者更新
    notify() {
       this.subs.forEach(sub => {
            sub.update();
       });
    }
}