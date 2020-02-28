/*

    addEventListener 可以给一个事件注册多个 listener

    addEventListener 对任何 DOM 都是有效的，而 onclick 仅限于 HTML

    addEventListener 的第一个参数可以指定别的，而不只是 click

    addEventListener 可以选择捕获或者冒泡

*/

// 点击一下会出现 1 2 3
var p1 = document.querySelector('#p1');
p1.addEventListener('click', () => {
    console.log(1);
});
p1.addEventListener('click', () => {
    console.log(2);
});
p1.addEventListener('click', () => {
    console.log(3);
});

// 点击一下只出现 33
var p2 = document.querySelector('#p2');
p2.onclick = function () {
    console.log(11);
}
p2.onclick = function () {
    console.log(22);
}
p2.onclick = function () {
    console.log(33);
}