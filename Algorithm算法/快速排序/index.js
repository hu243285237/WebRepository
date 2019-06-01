////////////////////////////////////////////////
//  
//  快速排序
//
//  是冒泡排序的改进版
//  
//  最差时间复杂度为O(N²)
//  平均时间复杂度为O(Nlog2(N))
//  
//  通过一轮的排序将序列分为独立的两部分，右边部分均比左边大
//  重复上述步骤，对序列不断分割，以达到排序
//  由于已经分开的两部分元素不需要再进行比较
//  故减少了比较次数，降低了排序时间
//	
//  经过快速排序后两个相同值的相对位置可能会发生改变
//  所以快速排序是一种不稳定排序
//  
///////////////////////////////////////////////

var arr = [67, 12, 129, 945, 1, 32, -74, 66];

//  当页面加载时显示排序前的数组
window.onload = function () {
    document.getElementById("sort_before").innerText = arr;
}

//  点击排序按钮 将排序结果显示在页面
function SortButton() {
    QuickSort(arr, 0, arr.length - 1);
    document.getElementById("sort_after").innerText = arr;
}

//  快速排序算法
function QuickSort(arr, originLeft, originRight) {
    var left = originLeft;
    var right = originRight;

    if (originLeft < originRight) {
        var base = arr[left];

        while (left != right) {
            while (right > left && arr[right] >= base) right--;
            arr[left] = arr[right];
            while (right > left && arr[left] <= base) left++;
            arr[right] = arr[left];
        }

        arr[left] = base;

        QuickSort(arr, originLeft, left - 1);
        QuickSort(arr, right + 1, originRight);
    }
}