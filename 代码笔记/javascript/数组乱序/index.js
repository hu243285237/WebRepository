///////////////////////////////////////////////
//
//  著名的洗牌算法 Fisher-Yates shuffle
//
//  Fisher-Yates 费雪 耶兹 两个人一起提出的
//
//  shuffle 的意思是洗牌
//
//  时间复杂度 O(n)
//
//  空间复杂度 O(1)
//
//  下面的 [arr[index], arr[m]] = [arr[m], arr[index]] 用的是解构赋值
//
///////////////////////////////////////////////

function shuffle(arr) {
    let m = arr.length;
    while (m > 1) {
        let index = Math.floor(Math.random() * m--);
        [arr[index], arr[m]] = [arr[m], arr[index]];
    }
    return arr;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(shuffle(arr));