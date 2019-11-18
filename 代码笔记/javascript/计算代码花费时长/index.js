/////////////////////////////////////////////////
//
//  console.time 启动计时器
//
//  console.timeEnd 停止计时，输出时间
//
/////////////////////////////////////////////////


console.time("test1");
for (let i = 0; i < 10; i++) { }
console.timeEnd("test1"); // 大约在 0.00xxx



console.time("test2")
for (let i = 0; i < 10000; i++) { }
console.timeEnd("test2"); // 大约在 0.xxx