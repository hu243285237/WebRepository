/*
    js有三种数据存储方式：

    sessionStorage、localStorage、cookie

    sessionStorage、localStorage是H5提出来的

    相同点：
    
    都是保存在浏览器端，且同源

    不同点：

    1.传递方式不同

    sessionStorage、localStorage不会自动把数据发送给服务器，仅在本地保存

    cookie数据始终在同源的http请求中携带，即cookie在浏览器和服务器之间来回传递

    2.数据大小不同

    cookie数据不能超过4k，同时因为每次http请求都会携带cookie，所以只适合保存小数据

    sessionStorage、localStorage可达到5M或更大

    3.数据有效期不同

    sessionStorage仅在当前浏览器窗口关闭前有效

    localStorage始终有效，窗口或浏览器关闭也一直保存，可用于作持久数据

    cookie在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭

    4.作用域不同

    sessionStorage不在不同的浏览器和窗口中共享数据，即使是同一个页面

    cookie、localStorage在所有同源窗口中都是共享的
*/

//////////////////////////////////////////////////////////////////////////////////////

// localStorage案例
// 每次刷新浏览器时count都会+1，并打印出来
// 即使浏览器关闭，或者电脑重启也会保存着数据
// 只有手动清理浏览器缓存才会重新计数
if (localStorage.getItem('count01') === null) {
    localStorage.setItem('count01', 0);
}
var count01 = localStorage.getItem('count01');
count01++;
localStorage.setItem('count01', count01);
alert('localStorage: ' + count01);

//////////////////////////////////////////////////////////////////////////////////////

// sessionStorage案例
// 关闭窗口会重置数据，每个窗口独占一份数据
if (sessionStorage.getItem('count02') === null) {
    sessionStorage.setItem('count02', 0);
}
var count02 = sessionStorage.getItem('count02');
count02++;
sessionStorage.setItem('count02', count02);
alert('sessionStorage: ' + count02);

//////////////////////////////////////////////////////////////////////////////////////

// cookie案例
// cookie的作用就是用于解决“如何记录客户端的用户信息”的
// 浏览器关闭不会重置数据，并且不同窗口会共享数据
// cookie可记录账号密码，当下一次登录时可读取数据
// 在本地直接通过浏览器浏览的时候，并不能写入cookie
// 经过试验才发现，只有当用在服务器或者本地的服务器中的时候，才能使用这个方法写入cookie

// 创建cookie的方法，并设置过期时间，默认情况下cookie会在浏览器关闭时删除
function setCookie(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

// 读取cookie的方法
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
        return unescape(arr[2]);
    } else {
        return null;
    }
}