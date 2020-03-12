
// 订阅者 Watcher
class Watcher {
    // vm: 一个 Vue 实例对象
    // exp: 如 v-model="name" 里的 name
    // cb: Watcher 绑定的更新函数
    constructor(vm, exp, cb) {
        this.vm = vm;
        this.exp = exp;
        this.cb = cb;
        this.value = this.get(); // 将自己添加到订阅器
    }
    get() {
        Dep.target = this; // 缓存自己
        let value = this.vm.data[this.exp]; // 执行监听器里的 get 函数
        Dep.target = undefined; // 释放自己
        return value;
    }
    update() {
        let oldValue = this.value;
        let value = this.vm.data[this.exp];
        if (value !== oldValue) {
            this.value = value;
            this.cb.call(this.vm, value, oldValue);
        }
    }
}