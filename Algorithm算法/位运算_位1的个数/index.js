////////////////////////////////////////////////
//  
//  编写一个函数，输入是一个无符号整数
//  
//  返回其二进制表达式中数字位数为 ‘1’ 的个数
//
//  （也被称为汉明重量）
//  
///////////////////////////////////////////////

function mClick () {
    let inputNum = document.getElementById("input_num").value;
    let count = hammingWeight(inputNum);
    document.getElementById("res_text").innerText = "共有 " + count + " 位为'1'";
};

// 汉明重量算法
var hammingWeight = function (n) {
    let count = 0;
    for (let i = 0; i < 32; i++) {
        if (n & 1) {
            count++;
        }
        n = n >> 1;
    }
    return count;
};