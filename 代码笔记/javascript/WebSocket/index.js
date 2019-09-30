/*
    WebSocket 是 HTML5 开始提供的一种在单个 TCP 连接上进行全双工通讯的协议

    WebSocket 使得客户端和服务器之间的数据交换变得更加简单，允许服务端主动向客户端推送数据
    
    在 WebSocket API 中，浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接，并进行双向数据传输
*/

var webSocket = new WebSocket("ws://121.40.165.18:8800");

webSocket.onopen = function () {
    console.log("WebSocket 已连接");
}

webSocket.onmessage = function (event) {
    console.log("接收到数据：" + event.data);
}

webSocket.onclose = function () {
    console.log("WebSocket 已关闭");
}