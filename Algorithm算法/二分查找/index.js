//////////////////////////////////////////////////////////////////////
//  
//  二分查找
//
//  给定一个 n 个元素有序的（升序）整型数组 arr 和一个目标值 target
//
//  写一个函数搜索 arr 中的 target，如果目标值存在返回下标，否则返回 -1
//
//  时间复杂度为O(log2N)
//
/////////////////////////////////////////////////////////////////////

// 一个有序数组
var arr = [-1, 0, 3, 5, 9, 12];
// 要查找的目标值
var target = 9;

// 二分查找算法
var search = function (arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        var mid = Number.parseInt((left + right) / 2);
        if (arr[mid] > target) {
            right = mid - 1;
        } else if (arr[mid] < target) {
            left = mid + 1;
        }
        else {
            return mid;
        }
    }

    return -1;
};

//  当页面加载时显示要查找的数组
window.onload = function () {
    document.getElementById("input_arr").innerText = arr;
    document.getElementById("input_target").innerText = target;
}

// 将结果显示在页面
function PressButton() {
    document.getElementById("output_index").innerText = search(arr, target);
}