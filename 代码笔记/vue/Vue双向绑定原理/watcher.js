
// 订阅者 Watcher
class Watcher {
    constructor(vm, node, name) {
        this.vm = vm; // vue 实例
        this.node = node; // 监听绑定的节点
        this.name = name; // 绑定的数据名称
        
        // 把这个 watcher 添加进 dep
        Dep.target = this;
        this.vm[this.name];
        Dep.target = undefined;
    }

    // 当数据更新时 dep 会通知所有 watcher 执行这个 update 函数
    update() {
        // 更新这个监听节点的值（视图）
        this.node.nodeValue = this.vm[this.name];
    }
}