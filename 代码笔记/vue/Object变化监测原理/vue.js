
function Vue(data, el, exp) {
    this.data = data;
    console.log(1);
    observable(data); // 将数据变得可观测
    console.log(2);
    // el.innerHTML = this.data[exp]; // 初始化模板数据的值
    console.log(3);
    new Watcher(this, exp, value => {
        el.innerHTML = value;
    });
    return this;
}