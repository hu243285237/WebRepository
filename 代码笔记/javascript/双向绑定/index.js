/* 
    简单的双向绑定

    Vue 是通过数据劫持结合发布订阅模式来实现双向绑定的

    通过 Object.defineProperty 的 get 和 set 来数据劫持

    当 Model 数据发生变化时，触发 set 函数来更新视图层 View
*/

//-----------------------------------------------------


var people01 = {};

Object.defineProperty (people01, "name", {
    get: function () {
        console.log("Get name");
        return name;
    },
    set: function (newVal) {
        console.log("Set name");
        name = newVal;
    }
});

people01.name; // "Get name"
people01.name = "Yohehehe"; // "Set name"

// Observer 监听器：用来监听属性的变化通知订阅者
//
// Watcher 订阅者：收到属性的变化，然后更新视图
//
// Compile 解析器：解析指令，初始化模版，绑定订阅者

//-----------------------------------------------------

// 1. 监听器 Observer

function observer (data) {
    if (!data || typeof data !== "object") {
        return;
    }
    Object.keys(data).forEach(key => {
        defineReactive(data, key, data[key]);
    });
}

function defineReactive (data, key, value) {
    observer(value); // 递归调用，监听所有属性
    var dep = new Dep();
    Object.defineProperty(data, key, {
        get: function () {
            if (Dep.target) {
                dep.addSub(Dep.target);
            }
            return value;
        },
        set: function (newVal) {
            if (value !== newVal) {
                value = newVal;
                dep.notify(); // 通知订阅器
            }
        }
    });
}

// 容器 Dep 做统一管理
function Dep() {
    this.subs = [];
}
Dep.prototype.addSub = function (sub) {
    this.subs.push(sub);
}
Dep.prototype.notify = function () {
    console.log("To notify Watcher update view");
    this.subs.forEach(sub => {
        sub.update();
    })
}
Dep.target = null;

// 测试
var people02 = {
    name: "Yolalala"
}
observer(people02);
people02.name = "Youououo";

//-----------------------------------------------------