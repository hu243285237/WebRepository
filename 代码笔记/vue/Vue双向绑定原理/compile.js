
// 将目标节点下的子节点都添加进 fragment
function nodeToFragment(node, vm) {
    let fragment = document.createDocumentFragment();
    let child = node.firstChild;
    while (child) {
        compile(child, vm);
        fragment.appendChild(child);
        child = node.firstChild;
    }
    return fragment;
}

function compile(node, vm) {
    // 如果是元素节点（input 标签）
    if (node.nodeType === 1) {
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
    // 如果元素是文本节点（无标签，比如"<div></div>{{ message }}"）
    else if (node.nodeType === 3) {
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
}