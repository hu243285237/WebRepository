/*
    innerHTML 可获取或设置指定元素标签内的全部 html 内容

    innerText 可获取或设置指定元素标签内的全部文本内容 ( 不包含 html 标签 )
*/

var out = document.querySelector("#out");
console.log(out.innerText); // out inner
console.log(out.innerHTML); // out <div>inner</div>

var inner = document.querySelector("#inner");
console.log(inner.innerText); // inner
console.log(inner.innerHTML); // inner