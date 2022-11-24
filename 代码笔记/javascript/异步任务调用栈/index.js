
/**
 * 一个带并发限制的异步调度器 Scheduler (中文：调度程序、日程安排程序)，保证同时运行的任务最多有两个
 */

class Scheduler {

    constructor() {
        this.maxTask = 2; // 最大并发任务限制数
        this.cacheQueue = []; // 用于存储堵塞的异步任务
        this.count = 0; // 记录当前执行的异步函数
    }

    // add 参数是个 promise 生成器，而且返回一个 promise
    async add(promiseCreator) {
        if (this.count >= this.maxTask) { // 如果超出同时执行的限制数目
            await new Promise(resolve => {
                this.cacheQueue.push(resolve); // 因为这个 promise 还没有 resolve，所以会在这被堵塞
            });
        }
        this.count++;
        const res = await promiseCreator();
        this.count--;
        if (this.cacheQueue.length) { // 如果有被堵塞的异步任务
            this.cacheQueue.shift()(); // 执行 resolve 方法，解除堵塞
        }
        return res;
    }
}

const scheduler = new Scheduler();

const timeout = (time) => new Promise(resolve => {
    setTimeout(resolve, time);
});

const addTask = (time, order) => {
    scheduler.add(() => timeout(time)).then(() => console.log(order));
};

addTask(1000, 1);
addTask(500, 2);
addTask(300, 3);
addTask(400, 4);