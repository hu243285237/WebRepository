//////////////////////////////////////////////////////////

// string.charAt(pos)
// 用于返回在 string 中 pos 位置处的字符
// 如果 pos 小于零或者大于等于字符串的长度
// 则会返回空字符串

var str1 = "huabc321";
console.log(str1.charAt(2)); // a

//////////////////////////////////////////////////////////

// string.charCodeAt(pos)
// 同 charAt 方法一样，只不过返回的不是字符串
// 而是以整数形式表示的字符码位
// 如果 pos 小于零或者大于等于字符串的长度
// 则会返回 NaN

var str2 = "huabc321";
console.log(str2.charCodeAt(2)); // 97 (a 的 ASCII 码为 97)

//////////////////////////////////////////////////////////

// string.concat(string...)
// 这个方法用于把其他字符串连接在一起
// 构造一个新的字符串
// 它很少被使用，因为用 + 运算符更为方便

var str3 = "huabc123";
console.log(str3.concat("kkk", "fff")); // huabc123kkkfff

//////////////////////////////////////////////////////////

// string.indexOf(searchString, position)
// 此方法在string内查找另一个字符串 searchString
// 如果它被找到，返回第一个匹配字符的位置，否则返回 -1
// 可选参数 position 设置从指定位置开始查找
var str4 = "qwerty";
console.log(str4.indexOf("er")); // 2