class Person{
    constructor(name,age,sex){
        this.name=name
        this.age=age
        this.sex=sex
    }
    say(){
        console.log('姓名：'+this.name+'性别：'+this.sex+'年龄：'+this.age)
    }

}
var ldh=new Person('刘德华',48,'男')
ldh.say()