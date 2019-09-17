/*

    location.href 相当于打开一个新页面，跳转后浏览器可以按返回键

    location.replace 相当于替换当前页面，replace 其实是将当前 URL 替换了，并非跳转页面，所以不会保存记录
    
    这里打开页面都是针对历史记录来说，在页面上看完全相同，只是浏览器的 history 表现不同

    如果在 1.html 中点击链接到 2.html，然后 2.html 中使用 href 跳转到 3.html，这时按浏览器后退按钮将返回 2.html

    但如果上面在 2.html 中调用 replace 进入 3.html，再点击后退按钮的时候，会退回到 1.html
*/

document.querySelector("#button01").addEventListener("click", () => {
    location.href = "http://www.baidu.com";
});

document.querySelector("#button02").addEventListener("click", () => {
    location.replace("http://www.qq.com");
});