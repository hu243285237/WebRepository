
// 订阅者 Watcher
class Watcher {
    constructor(vm, node, name) {
        this.vm = vm; // vue 实例
        this.node = node; // 监听绑定的节点，比如监听的是 {{ }} 文本或者是 input 标签的值等
        this.name = name; // 绑定的数据名称，v-model="name" 的 name
        
        // 把这个 watcher 添加进 dep
        Dep.target = this;
        this.vm[this.name]; // 会自动调用绑定好的 get 方法
        Dep.target = undefined;
    }

    // 当数据更新时 dep 会通知所有 watcher 执行这个 update 函数
    update() {
        // 如果是元素节点
        if (this.node.nodeType === 1) {
            this.node.value = this.vm[this.name];
        }
        // 如果是文本节点
        else if (this.node.nodeType === 3){
            this.node.nodeValue = this.vm[this.name];
        }
    }
}