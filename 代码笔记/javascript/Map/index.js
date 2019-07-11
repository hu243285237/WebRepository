/*
    Map：键值对的集合，具有极快的查找速度

    这是 ES6 新加的

    集合中的键和值可以是任何类型，如果使用现有密钥向集合添加值，则新值会替换旧值

    和 Object 的区别：

    1.  一个Object的键只能是字符串或者 Symbols
        但一个 Map 的键可以是任意值，包括函数、对象、基本类型

    2.  Map 中的键值是有序的，而添加到对象中的键则不是
        因此，当对它进行遍历时，Map 对象是按插入的顺序返回键值

    3.  你可以通过 size 属性直接获取一个 Map 的键值对个数，而 Object 的键值对个数只能手动计算

    4.  Map 可直接进行迭代，而 Object 的迭代需要先获取它的键数组，然后再进行迭代

    5.  Object 都有自己的原型，原型链上的键名有可能和你自己在对象上的设置的键名产生冲突
        虽然 ES5 开始可以用 map = Object.create(null) 来创建一个没有原型的对象，但是这种用法不太常见
    
    6.  Map 在涉及频繁增删键值对的场景下会有些性能优势
*/

// 创建 Map 对象
var m = new Map();

// set方法，添加一个新建元素到映射
m.set(1, "black");
m.set(3, "red");
m.set("colors", 99);
m.set({ x: 1 }, 1);

// get方法，返回映射中的指定元素
console.log(m.get(1));

// delete方法，从映射中移除指定元素
m.delete(1);

// forEach方法，对映射中的每个元素执行指定操作
m.forEach((value, key)=>{
    console.log("key: " + key.toString());
    console.log("value: " + value.toString());
    console.log("");
});

// has方法，如果映射包含指定元素，返回true
console.log(m.has(3));

// toString方法，返回映射的字符串表示形式 [Object Map]
console.log(m.toString());

// valueOf方法，返回指定对象的原始值，跟直接打印 m 是一样的
console.log(m.valueOf());

// entries方法，返回一个新的 Iterator 对象，它按插入顺序包含了 Map 对象中每个元素的 [key, value] 数组
console.log(m.entries());

// keys方法，返回一个新的 Iterator 对象，它按插入顺序包含了 Map 对象中每个元素的键
console.log(m.keys());

// values方法，返回一个新的 Iterator 对象，它按插入顺序包含了 Map 对象中每个元素的值
console.log(m.values());

// clear方法，移除所有键值对
m.clear();

// size属性，返回映射中的元素个数
console.log(m.size);