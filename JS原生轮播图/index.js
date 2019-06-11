setInterval(() => {
    // querySelector获取文档中id等于wrap的元素
    var wrap = document.querySelector('.wrap')
    // parseInt可解析一个字符串并返回一个整数
    var left = parseInt(wrap.style.marginLeft)
    // 每隔两秒钟滑动一次
    wrap.style.marginLeft = left >= -2400 ? left - 600 + 'px' : '0px'
}, 2000)