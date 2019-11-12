/*

    ArrayBuffer 又称类型化数组，是 JavaScript 操作二进制数据的一个接口

    最初为了满足 JavaScript 与显卡之间大量的、实时的数据交换，它们之间的数据通信必须是二进制的

    ArrayBuffer 分配的是一段连续内存区域

    new ArrayBuffer(byteLength) 参数 byteLength 指分配的字节长度

    假如要分配的内存区域很大，则有可能分配失败（因为没有那么多连续空余内存），所以有必要检查是否分配成功

    -----------------------------------------------------------------------------------

    与 Array 的区别：

    1. 数组里可以放数字、字符串、布尔值、对象和数组等，ArrayBuffer 放 0 和 1 组成的二进制数据

    2. 数组放在堆中，ArrayBuffer 则把数组放在栈中（所以取数据时后者更快）

    3. ArrayBuffer 初始化后固定大小，数组则可以自由增减

    -----------------------------------------------------------------------------------

    arryBuffer 的 byteLength 属性表示分配的字节大小，只读

    arryBuffer 还有一个 slice 方法，允许将内存区域的一部分拷贝生成一个新的 arrayBuffer 对象

    slice 包含两个参数，第一个参数表示开始拷贝的序号（包含），第二个参数表示截至的序号（不包含），如果省略第二个参数，则默认指到结尾

    slice 方法其实包含两步，第一步先分配一段新内存，第二步将数据拷贝过去

    -----------------------------------------------------------------------------------

*/

var a1 = new ArrayBuffer(40);
var v1 = new Int32Array(a1); 
v1[0] = 22;
var b1 = a1.slice(0, 3);

console.log(a1);
console.log(b1);

console.log(a1.byteLength); // 40
console.log(b1.byteLength); // 3

/*
    -----------------------------------------------------------------------------------

    除了 slice 方法， arrayBuffer 对象不提供任何直接读写内存的方法

    只允许在其上方建立视图，然后通过视图读写

    （arrayBuffer 作为内存区域，可以存放多种类型的数据，不同数据有不同的存储方式，这就叫做 “视图”）

    JavaScript 提供以下类型的视图：

    Int8Array: 8 位有符号整数，长度 1 个字节
    Uint8Array: 8 位无符号整数，长度 1 个 字节
    Int16Array: 16 位有符号整数，长度 2 个字节
    Uint16Array: 16 位无符号整数，长度 2 个字节
    Int32Array: 32 位有符号整数，长度 4 个字节
    Uint32Array: 32 位无符号整数，长度 4 个字节
    Float32Array: 32 位浮点数，长度 4 个字节
    Float64Array: 64 位浮点数，长度 8 个字节

    每一种视图都有一个 BYTES_PER_ELEMENT 常数，表示这种数据类型占据的字节数

    每一种视图都是一个构造函数，可接受三个参数：

    参数一：必须，视图对应的底层 arrayBuffer 对象
    参数二：可选，视图开始的字节序号，默认从 0 开始
    参数三：可选，视图包含的数据个数，默认直到本段内存区域结束

    -----------------------------------------------------------------------------------

*/

// 创建一个 8 字节的 arrayBuffer
var a2 = new ArrayBuffer(8);

// 创建一个指向 a2 的 Int32Array 视图，开始于字节 0，直到缓冲区的末尾
var v2_1 = new Int32Array(a2); 

// 创建一个指向 a2 的 Uint8Array 视图，开始于字节 2，直到缓冲区的末尾
var v2_2 = new Uint8Array(a2, 2);

// 创建一个指向 a2 的 Int16Array 视图，开始于字节 2，长度为 2
var v2_3 = new Int16Array(a2, 2, 2);

v2_1[0] = 66;

console.log(a2)

//----------------------------------------

// 视图还可以不通过 arrayBuffer 对象，直接分配内存而生成
// 下面代码生成一个 8 个成员的 Float64Array 数组，共 64 字节
// 这时，视图构造函数的参数就是成员的个数
var v3 = new Float64Array(8);
v3[0] = 10;
v3[1] = 15;
v3[2] = v3[0] + v3[1];

console.log(v3); // [10, 15, 25, 0, 0, 0, 0, 0];