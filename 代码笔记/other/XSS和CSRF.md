XSS（反射型）是将 A 网站的 Cookie 发到 B 网站

CSRF 是利用 B 网站攻击 A 网站

## XSS

全称 Cross Site Scripting

为了和 CSS 样式表进行区分，所以叫做 XSS

即 ‘跨站脚本攻击’

此攻击是指往 Web 页面插入恶意 Script 代码

当用户浏览该页时，嵌入其中的恶意代码就会被执行，从而达到攻击用户的目的

XSS 分为 ‘反射型XSS’ 和 '存储型XSS'

### 反射型 XSS

恶意代码没有保存在目标网站

而是通过引诱用户点击一个链接到目标网站的恶意链接来实施攻击

比如将一个 http://www.xxx.com/?id=" /><.script>alert(/xss/)</.script>

这个链接发送邮箱给其他用户

当其他用户点击了后，就会执行 script 标签中的代码

就有可能出现被盗取 cookie 信息等

1. 比如将 www.baidu.com?id="/><.script>这里放恶意代码地址</.script> 这个链接用邮箱发送给用户

2. 用户不小心点击了这个链接

3. 在用户的浏览器执行了恶意代码

4. 恶意代码将信息发送给黑客

5. 黑客用信息进行登录操作等

### 存储型 XSS

恶意代码被保存到目标服务器中，如服务器里

这种攻击具有较强的稳定性和持久性

比较常见的场景是在博客、论坛等社交网站上

比如发表文章时，文本中插入 <.script>alert('xss')</.script>

这样恶意代码就被存在了数据库

其他用户访问这篇文章时都会被 XSS 攻击

### XSS 防范

1. 对插入到页面上的敏感字符进行转义 （使用 escapeHtml 这个函数）

2. 对插入到页面上的敏感字符进行过滤

3. 禁止 'javascript' 'eval' 这些关键词

---

## CSRF

Cross Site Request Forgery 跨站请求伪造

请注意这里的 ‘请求’

不管用什么方法，只要是伪造用户发起的请求都可以称为 CSRF

1. 用户登录银行网站，得到 session

2. 用户不小心访问恶意网站

3. 利用之前登录得到的 session，恶意网站执行请求 post('www.bank.com/转钱给黑客')

### CSRF 防范

1. 验证 HTTP Referer 字段

HTTP 请求头有个字段叫 Referer，记录了该 HTTP 请求的来源地址，假如用户访问银行网站，Referer 值一般都是以 www.bank.com 为开头，而黑客的网站发送伪造请求时 Referer 是黑客自己的恶意网站地址，因此可以后端验证 Referer 是不是以 www.bank.com 为开头的域名，如果是的话，就说明是合法的。

2. 在请求地址中添加 token 并验证

CSRF 之所以能成功，是因为请求中所有的用户验证信息都存在 cookie 中，要抵御 CSRF 关键在于在请求中放入黑客所不能伪造的信息，并且该信息不存放在 cookie，就可以使用 token。