// slice()数组截取slice(begin,end)返回被截取项目的新数组
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits)
var newArry = fruits.slice(0, 3) //截取0-3位元素
console.log(newArry)
    // 参数 Values:
    // start	
    // 可选。规定从何处开始选取。如果该参数为负数，则表示从原数组中的倒数第几个元素开始提取，
    // slice(-2) 表示提取原数组中的倒数第二个元素到最后一个元素（包含最后一个元素）。
    // 实例
var myArr = fruits.slice(-2) //为负数时表示到着截取
console.log(myArr)
var myArr = fruits.slice(-3, -1) //截取下标倒数第一位，倒数第三位
console.log(myArr)