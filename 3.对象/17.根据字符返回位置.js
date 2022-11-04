// 根据字符返回位置
// 字符串所有的方法， 都不会修改字符串本身(字符串是不可变的)， 
// ** 操作完成会返回一个新的字符串 **
// 1.indexOf(‘要查找的字符’，开始的位置)返回指定内容在元字符串中的位置，
// 如果找不到就返回-1，开始的位置是index索引号
// 2.lastIndexOf()从后往前找，只找第一个匹配的
// 字符串对象  根据字符返回位置  str.indexOf('要查找的字符', [起始的位置])
var str = '改革春风吹满地，春天里来了'
console.log(str.indexOf('春')) // 默认从0开始查找 ，结果为2
console.log(str.indexOf('春', 3)) //从索引号是 3的位置开始往后查找，结果是8

// 1、返回字符位置🔥
// 查找字符串 “abcoefoxyozzopp” 中所有o出现的位置以及次数
// - 核心算法：先查找第一个o出现的位置
// - 然后 只要 indexOf返回的结果不是 -1 就继续往后查找
// - 因为 indexOf 只能查找到第一个，所以后面的查找，一定是当前索引加1，从而继续查找
var str = "abcoefoxyozzopp"
var index = str.indexOf('o')
var num = 0
while (index !== -1) {
    console.log(index)
    num++;
    index = str.indexOf('o', index + 1)
}
console.log('o出现的次数是：' + num)

// 练习
var str1 = "改革春风吹满地，春天里来了"
console.log(str1.indexOf('春'))
console.log(str1.indexOf('春', 3)) //3之后再查