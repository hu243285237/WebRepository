
// 使一个属性变为可观察的
function defineReactive(obj, key, val) {
    let dep = new Dep();
    // 给这个 obj（vue 实例）添加三个属性，比如 message、set message、get message
    Object.defineProperty(obj, key, {
        get: function () {
            // console.log(`${key}属性被读取了，值为${val}`);
            dep.depend();
            return val;
        },
        set: function (newVal) {
            // console.log(`${key}属性被修改了，从${val}改到${newVal}`);
            val = newVal;
            dep.notify();
        }
    });
}

// 使一个对象的每一属性变为可侦测的，并且将属性添加到 vue 实例上
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
            // console.log("添加订阅");
            this.subs.push(Dep.target);
        }
    }
    // 通知订阅者更新
    notify() {
       this.subs.forEach(sub => {
            // console.log("该更新了");
            sub.update();
       });
    }
}