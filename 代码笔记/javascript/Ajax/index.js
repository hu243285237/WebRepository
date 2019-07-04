/*
    Asynchronous Javascript And XML

    异步 JavaScript 和 XML

    是一种用于创建快速动态网页的技术

    是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术

    通过在后台与服务器进行少量数据交换，Ajax 可以使网页实现异步更新
    
    这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新

    传统的网页（不使用 Ajax）如果需要更新内容，必须重载整个网页页面

    Ajax 相当于在用户和服务器之间加了一个中间层，使用户操作与服务器响应异步化

    Ajax 的原理简单来说通过 XmlHttpRequest 对象来向服务器发送异步请求，从服务器获得数据

    然后用 javascript 来操作DOM而更新页面

    Ajax 的核心是 XMLHttpRequest 对象，它是在 IE5 中首先引入的，是一种支持异步请求的技术

    IE5 是 1999 年发布的
    
    2005 年 Google 让 Ajax 流行了起来
*/

function loadInfo() {
    var xmlhttp;

    // 创建 XMLHttpRequest 对象
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest(); // IE7+, Firefox, Chrome...
    }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); // IE6, IE5
    }

    // 每当 readyState 属性改变时，就会调用 onreadystatechange 函数
    // readyState 存有 XMLHttpRequest 的状态，
    // 0: 请求未初始化
    // 1: 服务器连接已建立
    // 2: 请求已接收
    // 3: 请求处理中
    // 4: 请求已完成，且响应已就绪
    // status 存请求的返回值
    // 200: "OK"
    // 404: 未找到页面
    // 这个 function 就是回调函数
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            // responseText 是获取字符串形式的相应数据
            // responseXML 是获取 XML 形式的响应数据
            console.log(xmlhttp.responseText);
        }
    }

     // 设置请求方式，地址，是否异步
    xmlhttp.open("GET","info.txt", true);
    xmlhttp.send(); // Chrome 和 IE 会报跨域错误，Firefox 貌似不会
}

// 当加载完成后执行 loadInfo 方法
window.onload = function() {
    loadInfo();
}