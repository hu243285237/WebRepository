/*

    给列表添加事件的两种方法

    1. addEventListener

    2. onClick

*/


// 方法一
var list1 = document.querySelectorAll('.l_1');
list1.forEach(element => {
    element.addEventListener('click', () => {
        console.log(111);
    });
});

// 方法二
var list2 = document.querySelectorAll('.l_2');
list2.forEach(element => {
    element.onclick = function () {
        console.log(222);
    }
});