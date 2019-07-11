/*
    Set：有序列表，其中含一些相互独立的非重复值

    这是 ES6 新加的

    Set 对象是值的集合，你可以按照插入的顺序迭代它的元素
    
    Set 中的元素只会出现一次，即 Set 中的元素是唯一的
*/

// 创建 Set 对象
var s = new Set();

// add方法，向 Set 集合加入成员，返回 Set 集合本身
s.add(1);
s.add({}).add("qwe").add(true);

// delete方法，移除 Set 中与这个值相等的元素，（即如果该元素存在，返回true，否则返回false）
console.log(s.delete("qwe"));

// forEach方法，对集合中的每个元素执行指定操作
s.forEach((value)=>{
    console.log("value: " + value.toString());
    console.log("");
});

// has方法，返回一个布尔值，表示该值在Set中存在与否
console.log(s.has(3));

// toString方法，返回集合的字符串表示形式 [Object Set]
console.log(s.toString());

// valueOf方法，返回指定对象的原始值，跟直接打印 s 是一样的
console.log(s.valueOf());

// entries方法，返回一个新的 Iterator 对象，它按插入顺序包含了 Set 对象中每个元素的 [value, value] 数组
// 为了使这个方法和 Map 对象保持相似， 每个值的键和值相等
console.log(s.entries());

// values方法，返回一个新的迭代器对象，该对象包含 Set 对象中的按插入顺序排列的所有元素的值
console.log(s.values());

// keys方法，与 values() 方法相同，返回一个新的迭代器对象，该对象包含 Set 对象中的按插入顺序排列的所有元素的值
console.log(s.keys());


// clear方法，移除 Set 对象内的所有元素
s.clear();

// size属性，返回 Set 对象的值的个数
console.log(s.size);