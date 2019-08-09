/* 
    简单的双向绑定

    Vue 是通过数据劫持结合发布订阅模式来实现双向绑定的

    通过 Object.defineProperty 的 get 和 set 来数据劫持

    当 Model 数据发生变化时，触发 set 函数来更新视图层 View
*/

var people = {};

Object.defineProperty (people, "name", {
    get: function () {
        console.log("Get name");
        return name;
    },
    set: function (newVal) {
        console.log("Set name");
        name = newVal;
    }
});

people.name; // "Get name"
people.name = "Yohehehe"; // "Set name"