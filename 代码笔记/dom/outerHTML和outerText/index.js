/*
    outerHTML 除了包含 innerHTML 的全部内容外，还包含对象标签本身

    outerText 可获取或设置指定元素标签内的全部文本内容 ( 不包含 html 标签 )

    innerText 和 outerText 在读取的时候是一样的，只是在设置的时候 outerText 会连带标签一起替换成目标文本
*/

var one = document.querySelector("#one");
console.log(one.outerText); // one two
console.log(one.outerHTML); // <div>one<div>two</div></div>

var two = document.querySelector("#two");
console.log(two.outerText); // two
console.log(two.outerHTML); // <div>two</div>