// ## 1、数组对象的创建🔥
// 创建数组对象的两种方式
// - 字面量方式
// - new Array()
// 2、检测是否为数组
//  instanceof Array运算符，可以判断一个对象是否属于某种类型
// 例子：instanceof Array
//  `Array.isArray()` 用于判断一个对象是否为数组，
// isArray() 是 HTML5 中提供的方法
var arr = [1, 22]
var obj = {}
console.log(arr instanceof Array) //true
console.log(obj instanceof Array) //false
console.log(Array.isArray(arr)) //true
console.log(Array.isArray(obj)) //false
    // 3、添加删除数组元素
    // 1) push添加数组，在数组末尾添加元素
var arr = [1, 2, 3]
console.log(arr)
arr.push(4, '秦风')
console.log(arr) //[ 1, 2, 3, 4, '秦风' ]
    // 2)unshift在我们数组的开头 添加一个或者多个数组元素
arr.unshift('red')
arr.unshift('pink')
console.log(arr)
    // 3)pop()他可以删除数组的最后一个元素，一次只能删除一个元素
arr.pop()
console.log(arr)
    // 4)shift()他可以删除第一个元素，一次删除一个
arr.shift()
console.log(arr)

// 筛选数组
var arr = [1500, 1200, 2000, 2100, 1800];
var newArr = []
for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 2000) {
        newArr.push(arr[i])
    }
}
console.log('新生成的数组为：', newArr)

// 4、数组排序
// 1.翻转数组--reverse()
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
var newNum = []
newNum = num.reverse()
console.log(newNum) //--ok

// 2.数组排序（冒泡排序）--sort  该方法会改变原来的数组，返回新数组

// 使用 sort() 方法时，应该注意下面几个问题。
// 1) 所谓的字母顺序，实际上是根据字母在字符编码表中的顺序进行排列的，每个字符在字符表中都有一个唯一的编号。
// 2) 如果元素不是字符串，则 sort() 方法试图把数组元素都转换成字符串，以便进行比较。
// 3) sort() 方法将根据元素值进行逐位比较，而不是根据字符串的个数进行排序。
var num1 = [22, 48, 2, 26, 5, 66, 1, 45, 8, 4, 62, 44, 32]
var newArr = []
num1.sort()
console.log(num1) //[1, 2, 22, 26, 32,  4, 44, 45, 48, 5, 62, 66, 8]

//3.对于双位数
var arr = [1, 64, 9, 61]
arr.sort(function(a, b) {
    // return b - a; //降序排序--[ 64, 61, 9, 1 ]
    return a - b; //升序 --[ 1, 9, 61, 64 ]
})
console.log(arr)

// 5、 数组索引🔥
// indexOf()数组中查找给定元素的第一个索引如果存在返回索引号，如果不存在，则返回-1
// lastIndexOf()在数组的最后一个索引，从后向前索引如果存在返回索引号，如果不存在，则返回-1
var arr = ['red', 'pink', 'blue', 'green']
console.log(arr.indexOf('pink')) //下标：1---正着数
console.log(arr.lastIndexOf('blue')) //下标：2---倒着数