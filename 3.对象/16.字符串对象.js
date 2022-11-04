// 6.1、基本包装类型🔥
var str = 'andy'
console.log(str.length) //4
    // 按道理基本数据类型是没有属性和方法的，而对象才有属性和方法，
    // 但上面代码却可以执行，这是因为 js 会把基本数据类型包装为复杂数据类型，其执行过程如下 ：
    // 1.生成临时变量,把简单类型包装为复杂数据类型
var temp = new String('andy')
    //2.赋值给我们声明的字符变量
str = temp
    //3.销毁临时变量
temp = null
console.log(str)

var str = 'abc'
str = 'hello'
for (var i = 0; i < 10; i++) {
    str += i
}
console.log(str)
    // 这个结果需要花费大量时间来显示，因为需要不断的开辟新的空间