// toString()把数组转换成字符串，逗号分隔每一项返回一个字符串
// join(‘分隔符’)方法用于把数组中的所有元素转换为一个字符串返回一个字符串
var arr = [1, 2, 3, 4, 5, 6, 55, 5, 2, 3, 5, 1]
arr.toString()
console.log('转化为字符串')
console.log(arr)
console.log(arr instanceof Array) //true
console.log(Array.isArray(arr)) //true

// 2.join('分隔符')
var arr1 = ['green', 'blue', 'red'];
console.log(arr1.join()) //不写默认逗号分隔
console.log(arr1.join('-'))
console.log(arr1.join('/'))