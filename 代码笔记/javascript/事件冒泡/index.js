/* 
    事件冒泡，从里往外

    当一个元素接收到事件的时候，会把他接收到的事件传给自己的父级，一直到 window

    注意这里传递的仅仅是事件，并不传递所绑定的事件函数
    
    所以如果父级没有绑定事件函数，就算传递了事件也不会有什么表现，但事件确实传递了

    点击事件跟 css 的位置没有关系，只跟 html 层级有关系
*/

// 点击 div03 时，先执行 div03 再执行 div02 div01
function clickDiv01() { console.log("div01"); }
function clickDiv03() { console.log("div03"); }

// 如果在 div02 后面取消事件冒泡，则 div01 不会执行
function clickDiv02(e) { 
    console.log("div02");
    stopBubble(e);
}

// 取消事件冒泡
function stopBubble(e) {
    if (e && e.stopPropagation) { // 非 ie 浏览器
        e.stopPropagation();
    } else if (e.cancelBubble) { // ie 浏览器
        e.cancelBubble = true;
    }
}