/*
    Regular Expression

    正则表达式是一种特殊的字符串模式，用于匹配一组字符串
    
    就好比用模具做产品，而正则就是这个模具，定义一种规则去匹配符合规则的字符

    -----------------------------------------------------------------

    ? 通配符匹配文件名中的 0 个或 1 个字符，而 * 通配符匹配零个或多个字符

    像 data(\w)?\.dat 这样的模式将查找下列文件

    data.dat   data1.dat   data2.dat   datax.dat   dataN.dat

    -----------------------------------------------------------------

    使用 * 字符代替 ? 字符扩大了找到的文件的数量
    
    data.*\.dat 匹配下列所有文件

    data.dat   data1.dat   data2.dat   data12.dat   datax.dat   dataXYZ.dat

    -----------------------------------------------------------------

    runoo+b 可以匹配 runoob   runooob    runooooooob 等

    + 代表前面的字符必须至少出现一次 （一次或多次）
*/

// 实例一：从字符串中提取数字
var str1 = "abc1234def";
var patt1 = /[0-9]+/;
console.log(str1.match(patt1));

// 实例二：
// ^ 为匹配输入字符串的开始位置
// [0-9]+ 匹配多个数字，[0-9] 匹配单个数字，+ 匹配一个或者多个
// abc$ 匹配字母 abc 并以 abc 结尾，$ 为匹配输入字符串的结束位置
var patt2 = /^[0-9]+abc$/;

// 实例三：
// 我们在写用户注册表单时，只允许用户名包含字符、数字、下划线和连接字符(-)
// 并设置用户名的长度，我们就可以使用以下正则表达式来设定
// ^ 为开始标记，$ 为结束标记
// [a-z0-9_-] 为字母 a-z 和 数字 0-9 和 下划线 _ 和 连字符 -
// {3,15} 表示 3~15个字符的长度
var patt3 = /^[a-z0-9_-]{3,15}$/

// 实例四：
// 通过 new 关键词来定义 RegExp 对象
// 以下代码定义了名为 patt4 的 RegExp 对象
// 寻找的是字符 "e"
// text() 方法检索字符串中指定值
// 返回值是 true 或者 false
// exec() 方法检索字符串中的指定值
// 返回值是被找到的值，如果没有发现匹配，则返回 null
var patt4 = new RegExp("e");
console.log(patt4.test("the best things in life are free")); // true
console.log(patt4.exec("the best things in life are free")); // e