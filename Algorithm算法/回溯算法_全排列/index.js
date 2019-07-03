//////////////////////////////////////////////////////////////
//  
//  回溯算法_全排列
//
//  问题描述：给定一个没有重复数字的序列，返回其所有可能的全排列
//
//  回溯法是一种通过探索所有可能的候选解来找出所有的解的算法
//
//  如果候选解被确认不是一个解的话（或者至少不是最后一个解）
//
//  回溯算法会通过在上一步进行一些变化抛弃该解，即 回溯 并且再次尝试
//  
/////////////////////////////////////////////////////////////

var arr = [1, 2, 3];

//  当页面加载时显示输入的数组
window.onload = function () {
    document.getElementById("input_arr").innerText = arr;
}

// 将结果显示在页面
function PressButton() {
    document.getElementById("output_arr").innerText = permute(arr);
}

//  全排列算法
var permute = function(nums) {
    var res = [];
    toPermute(res, nums, []);
    return res;

    function toPermute(res, origin, temp) {
        if (temp.length === origin.length) {
            res.push(temp.slice(0, temp.length) + '\n');
            return;
        }
        
        for (let i = 0; i < origin.length; i++) {
            if (temp.indexOf(origin[i]) !== -1) {
                continue;
            }
            temp.push(origin[i]);
            toPermute(res, origin, temp);
            temp.pop();
        }
    }
};