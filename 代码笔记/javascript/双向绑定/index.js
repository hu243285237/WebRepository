/* 
    简单的双向绑定

    Vue 是通过数据劫持结合发布订阅模式来实现双向绑定的

    通过 Object.defineProperty 的 get 和 set 来数据劫持

    当 Model 数据发生变化时，触发 set 函数来更新视图层 View
*/

//-----------------------------------------------------

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
    Object.keys(data).forEach(key => { // 取出所有属性遍历
        defineReactive(data, key, data[key]);
    });
}

function defineReactive (data, key, value) {
    observer(value); // 递归调用，监听子属性
    var dep = new Dep();
    Object.defineProperty(data, key, {
        enumerable: true, // 可枚举
        configurable: false, // 不能再 define
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
function mVue(options) {
    this.$options = options;
    this.$data = options.data;
    this.$el = document.querySelector(options.el);
    this.init();
}
mVue.prototype.init = function () {
    observer(this.$data);
    new Compile(this);
}

const vm = new mVue({
    el: "#app",
    data: {
        name: "HWJ"
    }
});

//-----------------------------------------------------

// 3. 解析器 Compile

function Compile (el) {
    this.$el = this.isElementNode(el) ? el : document.querySelector(el);
    if (this.$el) {
        this.$fragment = this.node2Fragment(this.$el);
        this.init();
        this.$el.appendChild(this.$fragment);
    }
}
Compile.prototype.init = function () {
    this.compileElement(this.$fragment);
}
Compile.prototype.node2Fragment = function (el) {
    const fragment = document.createDocumentFragment(), child;
    let child = el.firstChild;
    while (child) { // 将子节点，全部移动到 fragment
        fragment.appendChild(child);
        child = el.firstChild;
    }
    return fragment;
}
Compile.prototype.compileElement = function (el) {
    let childNodes = el.childNodes, me = this;
    [].slice.call(childNodes).forEach(node => {
        let reg = /\{\{(.*)\}\}/;
        let text = node.textContent;
        if (me.isElementNode(node)) {
            me.compile(node); // 渲染指令模板
        }
        else if (me.isTextNode(node) && reg.test(text)) {
            me.compileText(node, RegExp.$1); // 渲染 {{ }} 模板
        }
        if (node.childNodes && node.childNodes.length) { // 遍历编译子节点
            me.compileElement(node);
        }
    });
}
Compile.prototype.compile = function (node) {
    let nodeAttrs = node.attributes, me = this;
    [].slice.call(nodeAttrs).forEach(attr => {
        let attrName = attr.name;
        if (this.isDirective(attrName)) {
            let exp = attr.value; // content
            var dir = attrName.substring(2); // text
            if (me.isEventDirective(dir)) { // 事件指令，如 v-on:click
                compileUtil.eventHandler(node, me.$vm, exp, dir);
            } else { // 普通指令
                compileUtil[dir] && compileUtil[dir](node, me.$vm, exp);
            }
        }
    });
}

// 指令处理集合
var compileUtil = {
    text: function (node, vm, exp) {
        this.bind(node, vm, exp, 'text');
    },
    bind: function (node, vm, exp, dir) {
        var updaterFn = updater[dir + 'Updater'];
        updaterFn && updaterFn(node, vm[exp]); // 第一次初始化视图
        new Watcher(vm, exp, function (value, oldValue) { // 实例化订阅者，此操作会在对应的属性消息订阅器中添加该订阅者 watcher
            updaterFn && updaterFn(node, value, oldValue); // 一旦属性值有变化，会收到通知执行此更新函数，更新视图
        });
    }
}

var updater = {
    textUpdater: function (node, value) {
        node.textContent = typeof value == 'undefined' ? '' : value;
    }
}

//-----------------------------------------------------