/*

    深拷贝：指创建一块新的内存区域

    浅拷贝：指针指向的是同一块区域

*/

//-----------------------------------------------

// 浅拷贝例子：

var a1 = { name: "hwj", "age": 24 };
var b1 = a1;

b1.name = "hwj222";

console.log(a1.name); // "hwj222"
console.log(b1.name); // "hwj222"

//-----------------------------------------------

// 深拷贝例子：

var a2 = { name: "asd", age: 18 };
var b2 = { ...a2 };

b2.name = "asd222";

console.log(a2.name); // "asd"
console.log(b2.name); // "asd222"

//-----------------------------------------------

// 深拷贝例子：

var a3 = [1, 2, 3];
var b3 = a3.slice(0);

b3[0] = 666;

console.log(a3); // [1, 2, 3]
console.log(b3); // [666, 2, 3]

//-----------------------------------------------

// 完全深拷贝

function deepClone (obj) {
    if (typeof obj !== 'object') {
        return obj;
    }
    let copyObj = obj instanceof Array ? [] : {};
    for (let key in obj) {
        copyObj[key] = deepClone(obj[key]);
    }
    return copyObj;
}

var a4 = [{ class: '1-1' }, { class: '2-2' }];
var b4 = deepClone(a4);

a4[0].class = '5-5';
b4[1].class = '8-8';

console.log(a4); // [{ class: '5-5' }, { class: '2-2' }]
console.log(b4); // [{ class: '1-1' }, { class: '8-8' }]