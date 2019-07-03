/* 
    事件冒泡，从里往外

    当一个元素接收到事件的时候，会把他接收到的事件传给自己的父级，一直到 window

    注意这里传递的仅仅是事件，并不传递所绑定的事件函数
    
    所以如果父级没有绑定事件函数，就算传递了事件也不会有什么表现，但事件确实传递了

    点击事件跟 css 的位置没有关系，只跟 html 层级有关系
*/

var div01 = document.getElementById("div01");
var div02 = document.getElementById("div02");
var div03 = document.getElementById("div03");

// 点击 div03 时，先执行 div03 再执行 div02 div01
div01.onclick = () => console.log("div01");
div03.onclick = () => console.log("div03");
// 如果在 div02 后面取消事件冒泡，则 div01 不会执行
div01.onclick = (event) => {
    console.log("div02");
    stopBubble(event);
}
// 取消事件冒泡
function stopBubble(e) {
    if (e && e.stopPropagation) { // 非 ie 浏览器
        e.stopPropagation();
    } else if (e.cancelBubble) { // ie 浏览器
        e.cancelBubble = true;
    }
}

/*
    事件捕获

    鼠标点击或者触发 DOM 事件时（被触发事件的这个元素被叫作事件源）
    
    浏览器会从根节点 => 事件源（由外到内）进行事件传播

    无论是事件捕获还是事件冒泡，它们都有一个共同的行为，就是事件传播

    DOM 标准事件流的触发的先后顺序为：先捕获再冒泡

    在我们平常用的 addEventListener 方法中，一般只会用到两个参数
    
    一个是需要绑定的事件，另一个是触发事件后要执行的函数

    然而，addEventListener 还可以传入第三个参数，来决定是否进行事件捕获
*/

var div04 = document.getElementById("div04");
var div05 = document.getElementById("div05");
var div06 = document.getElementById("div06");

// 当点击 div06 时，因为 div05 进行了事件捕获
// 所以执行顺序为 div05 div06 div04
div04.addEventListener("click", function(){
    console.log("div04");
}, false);
div05.addEventListener("click", function(){
    console.log("div05");
}, true);
div06.addEventListener("click", function(){
    console.log("div06");
}, false);