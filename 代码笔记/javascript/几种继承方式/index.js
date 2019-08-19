////////////////////////////////////////////////////////////
//
//  构造函数继承
//
//  缺点：无法继承 Father01.property 的属性，以及再往上的属性
//
////////////////////////////////////////////////////////////

function Father01 () {
    this.father_pro_01 = 'father pro 01';
}

function Son01 () {
    Father01.call(this); // 相当于在这里添加了一句 this.father_pro_01 = 'father pro 01';
    this.son_pro_01 = 'son pro 01';
}

Father01.prototype.father_pro_02 = 'father pro 02';
Son01.prototype.son_pro_02 = 'son pro 02'

var mSon01 = new Son01();
console.log(mSon01); // 对象上有 son_pro_01 和 father_pro_01，__proto__ 指向 Son01.prototype
console.log(mSon01.father_pro_01); // 'father pro 01'
console.log(mSon01.father_pro_02); // undefined
console.log(mSon01.son_pro_01); // 'son pro 01'
console.log(mSon01.son_pro_02); // 'son pro 02'

////////////////////////////////////////////////////////////
//
//  原型链式继承
//
//  优点：在父类的原型上定义属性，子类也能找到
//
//  缺点：会更改父类的原型，因为实例出来的子类对象的原型都指向同一个 new Father02()
//
////////////////////////////////////////////////////////////

function Father02 () {
    this.father_pro_01 = 'father pro 01';
    this.father_pro_arr = [1, 2, 3];
}

function Son02 () {
    this.son_pro_01 = 'son pro 01';
}

Son02.prototype = new Father02();
Father02.prototype.father_pro_02 = 'father pro 02';

var mSon02 = new Son02();
console.log(mSon02); // 对象上有 son_pro_01，__proto__ 指向 Son02.prototype，也就是 new Father02()，再往上是 Father02.prototype
console.log(mSon02.father_pro_01); // 'father pro 01'
console.log(mSon02.father_pro_02); // 'father pro 02'
console.log(mSon02.son_pro_01); // 'son property 01'

var mSon022 = new Son02();
mSon02.father_pro_arr.push(4); // 更改 mSon02，却也改变了 mSon022
console.log(mSon022.father_pro_arr); // [1, 2, 3, 4]

////////////////////////////////////////////////////////////
//
//  组合继承 （常用）
//
//  集合了上述优点
//
////////////////////////////////////////////////////////////

function Father03 () {
    this.father_pro_01 = 'father pro 01';
    this.father_pro_arr = [1, 2, 3];
}

function Son03 () {
    Father03.call(this);
}

Son03.prototype = Object.create(Father03.prototype);
Son03.prototype.constructor = Son03;

var mSon03 = new Son03();
console.log(mSon03);