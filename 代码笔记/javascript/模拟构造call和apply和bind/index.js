//////////////////////////////////////////////////////////
//
//                      call 模拟
//
//////////////////////////////////////////////////////////

Function.prototype.myCall = function (thisObj) {
    thisObj.fn = this;
    let args = [...arguments].slice(1);
    let result = thisObj.fn(...args);
    delete thisObj.fn;
    return result;
}

//////////////////////////////////////////////////////////
//
//                      apply 模拟
//
//////////////////////////////////////////////////////////

Function.prototype.myApply = function (thisObj) {
    thisObj.fn = this;
    let result = thisObj.fn(...arguments[1]);
    delete thisObj.fn;
    return result;
}

//////////////////////////////////////////////////////////
//
//                      bind 模拟
//
//////////////////////////////////////////////////////////

Function.prototype.myBind = function (thisObj) {
    thisObj.fn = this;
    let args = [...arguments].slice(1);
    let result = thisObj.fn(...args);
    return function () {
        return result;
    }
}

//////////////////////////////////////////////////////////
//
//                         应用
//
//////////////////////////////////////////////////////////

function getInfo (school, grade) {
    console.log(this.name);
    console.log(this.age);
    console.log(school, grade);
}

var obj = {
    name: "hu",
    age: 24
}

getInfo.myCall(obj, "SZDX", "one");
getInfo.myApply(obj, ["SZDXX", "two"]);

var bindFn = getInfo.myBind(obj, "SZDXXX", "three");
bindFn();