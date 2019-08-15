////////////////////////////////////////////////
//  
//  给定一个非负整数数组 A，返回一个数组
//  
//  在该数组中，A 的所有偶数元素之后跟着所有奇数元素
//  
///////////////////////////////////////////////

const A = [10, 6, 5, 4, 8, 1, 3, 2];

window.onload = function () {
    document.getElementById("sort_before").innerText = "排序前: " + A;
};

function mClick () {
    document.getElementById("sort_after").innerText = "排序后: " + sortArrayByParity(A);
};

// 算法
var sortArrayByParity = function(A) {
    let arr = [];
    A.forEach(value => {
        if (value % 2) {
            arr.push(value);
        } else {
            arr.unshift(value);
        }
    });
    return arr;
};