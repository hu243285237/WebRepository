
// Vue 构造函数
function Vue(options) {
    // 使 data 里的属性都变为可侦测的
    observable(options.data, this);
    // 得到根元素，一般都是 <div id="app"></div>
    let node = document.getElementById(options.el);
    // 将根元素下的节点都移到 fragment 去编译，就是查找 v-model 和 {{ }}
    let fragment = nodeToFragment(node, this);
    // 再将这个 fragment 重新挂到根元素上
    node.appendChild(fragment);
}