/////////////////////////////////////////////////////////////////
//                        包装对象
/////////////////////////////////////////////////////////////////

/*
    在针对字符串、数字和布尔值使用字面量时
    
    只有在该值被视为对象的情况下才会创建实际的复杂对象

    换句话说，在尝试使用与构造函数关联的方法或检索属性（如 var len = 'abc'.length）之前，一直在使用原始数据类型

    当这种情况发生时，js 会在幕后为字面量值创建一个包装器对象，以便将该值视为一个对象

    调用方法以后，js 即抛弃包装器对象，该值返回字面量类型

    这就是字符串、数字、布尔值被认为是原始数据类型的原因

    包装对象比如有 String、Number、Boolean

    null 和 undefined 没有包装对象
*/

String.prototype.sayHello = function () {
    console.log("hello~");
}

var a = "i am string";
a.sayHello();