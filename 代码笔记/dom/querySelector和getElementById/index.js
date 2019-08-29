/*
    querySelector 属于 W3C 中的 Selectors API 规范
    
    而 getElementsBy 系列则属于 W3C 的 DOM 规范

    getXXXByXXX 获取的是动态集合
    
    querySelector 获取的是静态集合

    动态就是选出的元素会随文档改变，静态的不会，取出来之后就和文档的改变无关了
*/

var ul_1 = document.querySelector("ul");
var li_1_arr = document.querySelectorAll("li");

for (let i = 0; i < 3; i++) {
    ul_1.appendChild(document.createElement("li"));
}

console.log(li_1_arr.length); // 输出 3，但实际上有 6 个 li

//----------------------------------------------------------

var ul_2 = document.getElementsByTagName("ul")[0];
var li_2_arr = document.getElementsByTagName("li");

for (let i = 0; i < 3; i++) {
    ul_2.appendChild(document.createElement("li"));
}

console.log(li_2_arr.length); // 输出 9，一共 9 个 li