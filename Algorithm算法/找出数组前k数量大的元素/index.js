
function getMaxValueK(arr, k) {
    const map = new Map();
    arr.forEach(element => {
        if (map.has(element)) {
            map.set(element, map.get(element) + 1);
        } else {
            map.set(element, 1);
        }
    });
    const sortArr = Array.from(map);
    sortArr.sort((a, b) => {
        return b[1] - a[1];
    });
    const resArr = [];
    for (let i = 0; i < k; i++) {
        resArr.push(sortArr[i][0]);
    }
    return resArr;
}

const arr = [1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 1, 1, 1];
const k = 2;

const res = getMaxValueK(arr, k);
console.log(res);