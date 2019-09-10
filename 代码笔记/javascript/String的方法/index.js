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

//////////////////////////////////////////////////////////

// string.lastIndexOf(searchString, position)
// 和 indexOf 方法类似，只不过它是从该字符串的末尾开始查找
// 注意不是从后面数，返回的 index 还是从前数的
var str5 = "qwerty";
console.log(str5.lastIndexOf("er")); // 2

//////////////////////////////////////////////////////////

// string.localCompare(otherString)
// 这个方法用于比较两个字符串
// 怎么比较的规则没有详细说明
// 如果 string 比 otherString 小，那么结果为负数
// 如果它们相等，那么结果为 0
// 这类似于 array.sort 比较函数的约定
// a 比 b 和 c 小，返回 -1
var str6_1 = "a";
var str6_2 = "b";
var str6_3 = "c";
console.log(str6_1.localeCompare(str6_2)); // -1
console.log(str6_1.localeCompare(str6_3)); // -1
console.log(str6_2.localeCompare(str6_3)); // -1
console.log(str6_3.localeCompare(str6_2)); // 2
console.log(str6_3.localeCompare(str6_1)); // 1

//////////////////////////////////////////////////////////

// string.match(regexp)
// 这个方法让字符串和一个正则表达式进行匹配
var str7 = "999_hello_world_12345";
console.log(str7.match("world")); // 返回一个数组 [有点复杂]
console.log(str7.match(/\d+/g)); // 正则检索数字 [999, 12345]

//////////////////////////////////////////////////////////

// string.replace(searchValue, replaceValue)
// 这个方法对 string 进行查找和替换操作，并返回一个新的字符串
// 参数 searchValue 可以是一个字符串或一个正则表达式对象
// 如果 searchValue 是字符串，它只会在第一次出现的地方
// 如果 searchValue 是正则表达式，则会替换所有匹配的结果
var str8 = "abccc6";
console.log(str8.replace("c", "q")); // abqcc6

//////////////////////////////////////////////////////////

// string.search(regexp)
// 这个方法和 indexOf 方法类似
// 只是它接受一个正则表达式对象作为参数，而不是一个字符串
// 如果找到匹配，则返回第一个匹配的首字符位置
// 如果没有找到匹配，则返回 -1
var str9 = 'abcdefg"1234567';
console.log(str9.search(/["']/)); // 7

//////////////////////////////////////////////////////////

// string.slice(start, end)
// 这个方法复制 string 的一部分来构造一个新的字符串
// 如果 start 参数是负数，它将与 string.length 相加
// end 参数是可选的，它将与 string.length 相加
// end 参数等于你要取的最后一个字符的位置值加上 1
// 要想得到从位置 p 开始的 n 个字符，就用 string.slice(p, p + n)
var str10 = "abcde";
console.log(str10.slice(1)); // bcde
console.log(str10.slice(2)); // cde
console.log(str10.slice(2, 4)); // cd

//////////////////////////////////////////////////////////

// string.toLowerCase()
// 返回一个新字符串，这个字符串所有的字母都被转为小写
var str11 = "ABCde";
console.log(str11.toLocaleLowerCase()); // abcde

//////////////////////////////////////////////////////////

// string.toUpperCase()
// 返回一个新字符串，这个字符串所有的字母都被转为大写
var str12 = "ABCde";
console.log(str12.toLocaleUpperCase()); // ABCDE

//////////////////////////////////////////////////////////

// string.toLocaleLowerCase()
// 使用本地化规则把字符串所有字母转为小写
// 比如在土耳其语 'I' 会转换为 '1'，而不是 'i'
var str13 = 'YUIOP';
console.log(str13.toLocaleLowerCase());

//////////////////////////////////////////////////////////

// string.toLocaleUpperCase()
// 使用本地化规则把字符串所有字母转为大写
// 比如在土耳其语 'i' 会转换为 'İ'，而不是 'I'
var str13 = 'yuiop';
console.log(str13.toLocaleUpperCase());