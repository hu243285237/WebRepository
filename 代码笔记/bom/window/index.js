/*

    window 对象代表浏览器的窗口
    
    window 对象既是 ECMAScript 规范中的 Global 对象，也是 BOM 中的顶级对象

    document 对象既是 BOM 顶级对象的一个属性，也是 DOM 模型中的顶级对象

    location 对象既是 window 对象的属性，同时也是 document 对象的属性

    ----------------------------------------------------------------------

    引用 window 对象的属性和方法时，可以省略 window

    在全局作用域中 this 和 window 指向同一个对象，另外，还可以使用 self 来引用 window 对象
    
    全等关系即：this === window === self

    ----------------------------------------------------------------------

    location 对象：     提供了与当前窗口中加载的文档有关的信息以及一些导航功能

    history 对象：      保存着从窗口被打开起的历史记录

    navigator 对象：    用来描述浏览器本身，包括浏览器的名称、版本、语言、系统平台、用户特性字符串等信息

    screen 对象：       用来表明客户端显示器的能力，包括浏览器窗口外部的显示器的信息，如像素宽度和高度等

    document 对象：     每个载入浏览器的 HTML 文档都会成为 document 对象，使我们可以从脚本中对 HTML 页面中的所有元素进行访问
    
*/

console.log(this === window); // true
console.log(window === self); // true
console.log(self === this); // true

console.log(window.location);
console.log(window.history);
console.log(window.navigator);
console.log(window.screen);
console.log(window.document);