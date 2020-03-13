
// 将目标节点下的子节点都添加进 fragment
function nodeToFragment(node, vm) {
    // 创建 fragment（轻量级的 document 对象）
    let fragment = document.createDocumentFragment();
    let child = node.firstChild;
    // 遍历根节点下的所有一级节点
    while (child) {
        compile(child, vm);
        fragment.appendChild(child);
        child = node.firstChild;
    }
    return fragment;
}

function compile(node, vm) {
    // 如果是元素节点，比如 input、div、p 标签等
    if (node.nodeType === 1) {
        compileElement(node, vm);
    }
    // 如果元素是文本节点（比如"<div>{{ xxx }}</div> 的 {{ xxx }}"）
    else if (node.nodeType === 3) {
        compileText(node, vm);
    }
}

// 解析元素节点
function compileElement(node, vm) {
    // 如果是 input 标签
    if (node.tagName === 'INPUT') {
        // 解析这个元素的所有属性
        for (let attr of node.attributes) {
            // 如果这个属性是 v-model
            if (attr.nodeName === 'v-model') {
                // 检测绑定的数据名称，即 v-model="name" 的 name
                let name = attr.nodeValue;
                // 给这个 input 添加事件
                node.addEventListener('input', e => {
                    // 更改 vue 实例上的数据为这个 input 里的数据
                    vm[name] = e.target.value;
                });
                // 将 data 中的值赋予给该 node
                node.value = vm[name];
                // 移除 v-model 这个属性
                node.removeAttribute('v-model');
            }
        }
    }
    // 如果是其他标签，比如 div、p 等
    else {
        // 编译他们的子节点
        for (let child of node.childNodes) {
            compile(child, vm);
        }
    }
}

// 解析文本节点
function compileText(node, vm) {
    // 来匹配 {{ xxx }} 中的 xxx
    let reg = /\{\{(.*)\}\}/;
    // 如果这个文本里有 {{ xxx }} 这样的文本
    if (reg.test(node.nodeValue)) {
        // 获取匹配到的第一个字符串
        let name = RegExp.$1;
        // 去掉字符串的首尾空格
        name = name.trim();
        // 初始化文本节点的值
        node.nodeValue = vm[name];
        // 绑定一个订阅者
        new Watcher(vm, node, name);
    }
}