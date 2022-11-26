
/**
 * 
 * 一个n*n的矩阵，每个矩阵格子都摆列着v个立方体，求所有立方体的透出的表面积总和
 * 
 * 思路：计算每一列格子面积，将其相加
 * 
 */

const arr = [
    [3, 1, 2],
    [1, 1, 1],
    [2, 3, 1],
];

/**
 *  上面矩阵每一列的面积
 * 
 *  area = [
 *  [11, 2, 7],
 *  [2, 1, 2],
 *  [6, 9, 3]
 * ]
 * 
 *  totalArea = 43
 */

function getArea(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            // 如果这个格子没有立方体
            if (arr[i][j] === 0) continue;
            // 顶部为一个面积
            let area = 1;
            // 计算这个格子上方的面积
            if (i > 0) {
                const differUp = arr[i][j] - arr[i - 1][j];
                if (differUp > 0) area += differUp;
            } else {
                area += arr[i][j];
            }
            // 计算这个格子下方的面积
            if (i < arr.length - 1) {
                const differBottom = arr[i][j] - arr[i + 1][j];
                if (differBottom > 0) area += differBottom;
            } else {
                area += arr[i][j];
            }
            // 计算这个格子左边的面积
            if (j > 0) {
                const differLeft = arr[i][j] - arr[i][j - 1];
                if (differLeft > 0) area += differLeft;
            } else {
                area += arr[i][j];
            }
            // 计算这个格子右边的面积
            if (j < arr.length - 1) {
                const differRight = arr[i][j] - arr[i][j + 1];
                if (differRight > 0) area += differRight;
            } else {
                area += arr[i][j];
            }
            res += area;
        }
    }
    return res;
}

console.log(getArea(arr));