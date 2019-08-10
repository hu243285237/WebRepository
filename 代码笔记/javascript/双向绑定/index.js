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

//-----------------------------------------------------

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

// 2. 订阅者 Watcher

function Watcher(vm, prop, callback) {
    this.vm = vm;
    this.prop = prop;
    this.callback = callback;
    this.value = this.get();
}
Watcher.prototype.update = function () {
    const value = this.vm.$data[this.prop];
    const oldVal = this.value;
    if (value !== oldVal) {
        this.value = value;
        this.callback(value);
    }
}
Watcher.prototype.get = function () {
    Dep.target = this; // 储存订阅器
    const value = this.vm.$data[this.prop]; // 因为属性被监听，这一步会执行监听器里的 get 方法
    Dep.target = null;
    return value;
}

//-----------------------------------------------------

// 测试
function mVue(options, prop) {
    this.$options = options;
    this.$data = options.data;
    this.$prop = prop;
    this.$el = document.querySelector(options.el);
    this.init();
}
mVue.prototype.init = function () {
    observer(this.$data);
    this.$el.textContent = this.$data[this.$prop];
    new Watcher(this, this.$prop, value => {
        this.$el.textContent = value;
    });
}

const vm = new mVue({
    el: "#app",
    data: {
        name: "HWJ"
    }
}, "name");

//-----------------------------------------------------
/*
// 3. 解析器 Compile

function Compile (vm) {
    this.vm = vm;
    this.el = vm.$el;
    this.fragment = null;
    this.init();
}
Compile.prototype.init = function () {
    this.fragment = this.nodeFragment(this.el);
}
Compile.prototype.nodeFragment = function (el) {
    const fragment = document.createDocumentFragment();
    let child = el.firstChild;
    while (child) { // 将子节点，全部移动文档片段里
        fragment.appendChild(child);
        child = el.firstChild;
    }
    return fragment;
}
*/
//-----------------------------------------------------