//创建类 class  创建一个明星类
class Star{
    //constructor  构造器或者构造函数
    constructor(uname,age){
        this.uname=uname
        this.age=age
    }
}

// 2.利用类创建对象
var ldh=new Star('刘德华',18)
var zxy=new Star('张学友',20)
console.log(ldh)
console.log(zxy)