/*

    getComputedStyle 是一个可以获取当前元素所有最终使用的 CSS 的方法

    返回的是一个 CSS 样式声明对象（[object CSSStyleDeclaration]）

    示例：

    let el = document.getElementById("elementID");
    
    let style = window.getComputedStyle(el, null);

    第二个参数可以是伪类，比如

    let style = window.getComputedStyle(el, ":after");

    ------

    style 和 getComputedStyle 的相同点：

    都是返回一个 CSSStyleDeclaration 对象

    CSSStyleDeclaration 对象可以调用 getPropertyValue 方法获取该属性的值

    比如 style.getPropertyValue("background-color");
    
    返回一个 rgb(245, 245, 220)

    ------

    style 和 getComputedStyle 的不同点：

    1. 

    getComputedStyle 方法是只读的，只能获取样式，不能设置
    
    style 能读能写

    2.

    getComputedStyle 会返回应用在该元素的所有 CSS 属性对象
    
    style 读取的只是元素的内联样式

*/

let el = document.getElementById("myId");
let style = getComputedStyle(el, null);
let property = style.getPropertyValue("background-color");

console.log(el.style); // CSSStyleDeclaration
console.log(style); // CSSStyleDeclaration
console.log(property); // rgb(245, 245, 220)