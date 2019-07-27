
arr = [1, 2, 3, 4, 5];

var obj = { a: 1, b: 2, c: 3 };

var map = new Map();
map.set(1, "black");
map.set(3, "red");
map.set("colors", 99);
map.set({ x: 1 }, 1);

var set = new Set();
set.add(1).add("qwe").add(true);

var str = "I am string";

// 性能方面，大多数情况下：
//  
// for > forEach > for-of > for-in

//-------------------------------------------------------

/*
    第一种：
    
    最常用的 for 循环

    一般用来循环数组

    缺点是需要跟踪计数器和退出条件
*/

// 1 2 3 4 5
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//-------------------------------------------------------

/*
    第二种：

    自 ES5 之后使用数组内置的 forEach

    用来循环数组

    跟 for 循环相似，不过更优美

    缺点是不能中断循环（使用 break 或者 return）
*/

// 1 2 3 4 5
arr.forEach(value => {
    console.log(value);
});

// 1 0 arr  2 1 arr  3 2 arr  4 3 arr  5 4 arr
arr.forEach((value, index, arr) => {
    console.log(value, index, arr);
});

//-------------------------------------------------------

/*
    第三种：

    for-in 循环实际是为循环 enumerable 对象而设计的

    不但可以循环数组，还可以循环遍历对象

    不建议用来循环数组
*/

// a 1  b 2  c 3
for (let prop in obj) {
    console.log(prop, obj[prop]);
}

// 0 1 2 3 4
for (let index in arr) {
    console.log(index);
}

//-------------------------------------------------------

/*
    第四种：

    for-of 是 ES6 引入的一种新的循环方法

    它既比传统 for 循环简洁，同时弥补了 forEach 和 for-in 的短板

    可以与 break、continue 和 return 配合使用

    它不能循环普通对象

    但可以循环一个拥有 enumerable 属性的对象

    还可以循环字符串、Map、Set 等

    如果按对象拥有的属性进行循环，可以使用内置的 Object.keys() 方法

    如果按对象拥有的属性值进行循环，可以使用内置的 Object.values() 方法
*/

// 1 2 3 4 5
for (let value of arr) {
    console.log(value);
}

// a b c
for (let prop of Object.keys(obj)) {
    console.log(prop);
}

// 1 2 3
for (let value of Object.values(obj)) {
    console.log(value)
}

// [1, "black"]  [3, "red"]  ["colors", 99]  [{...}, 1]
for (let value of map) {
    console.log(value)
}

// 1 qwe true
for (let value of set) {
    console.log(value);
}

// I  a m  s t r i n g
for (let value of str) {
    console.log(value);
}