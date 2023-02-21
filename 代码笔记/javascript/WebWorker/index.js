
// web worker 诞生原因：
// 
// js 最初设计是运行在浏览器中的，为防止多个线程同时操作 dom 从而带来的渲染冲突问题
// 所以 js 执行器被设计成单线程
//
// 但随着前端技术发展，当我们需要大量计算的场景时（比如图像处理、视频解码）
// js 线程往往会被长时间阻塞，甚至造成页面卡顿，影响用户体验
// 为了解决单线程带来的这一弊端，web worker 应运而生
//
// ---
// 
// web worker 是什么：
// 
// web worker 是 html5 标准的一部分，这一规范定义了一套 api
// 允许我们在 js 主线程之外开辟新的 worker
// 并将一段 js 脚本运行其中，它赋予了开发者利用 js 操作多线程的能力
//
// 因为是独立的线程，worker线程与 js 主线程能同时运行，互不阻塞
// 所以，我们有大量运算任务时，可以把运算任务交给 worker 线程去处理
// 当计算完成时再把结果返回给 js
// 这样 js 主线程只用专注处理业务逻辑，不用耗费过多时间去处理大量运算
// 从而减少了阻塞时间，页面流畅度和用户体验也随之提高
//
// ---
//
// web worker 能干什么：
//
// worker 与当前页面窗口运行在不同的全局上下文中
// window 和 parent 对象在 worker 线程上下文都是不可用的
// document 对象也不可用，操作 dom 的行为也是不可行的
// 但是 location 和 navigator 对象可以以可读方式访问
// 除此之外，绝大多数 window 对象上的方法和属性都被共享倒 worker 上下文 WorkerGlobalScope 中
// 同时，worker 线程上下文也存在一个顶级对象 self
//
// https://juejin.cn/post/7139718200177983524

// 创建 worker
const worker = new Worker('./worker.js');
// 主线程监听 worker 线程的消息
worker.addEventListener('message', e => {
    console.log(e.data);
    // 关闭 worker 线程
    worker.terminate();
});