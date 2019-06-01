////////////////////////////////////////////////
//  
//  冒泡排序
//  
//  时间复杂度为O(N平方)，两个for循环
//  
//  第一遍循环将最大的数排到最后面
//  第二遍循环将第二大的数排到倒数第二的位置
//  以此类推
//  
//  大的数一个一个往上冒，故称冒泡排序
//  
///////////////////////////////////////////////

var arr = [24, 7, 29, 95, 5];

// 当页面加载时显示排序前的数组
window.onload = function () {
    document.getElementById("sort_before").innerText = arr;
}

// 点击按钮进行排序 并将数据显示在页面
function BubbleSort() {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    document.getElementById("sort_after").innerText = arr;
}