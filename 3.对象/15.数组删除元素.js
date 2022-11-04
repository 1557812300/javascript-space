// splice
var fruits = ["Banana", "Orange", "Apple", "Mango"];

// 数组中添加新元素：
fruits.splice(2, 0, "Lemon", "Kiwis") //在下标2，删除0个元素，插入元素
console.log(fruits)
fruits.splice(2, 1) //在下标2位置，删除1个元素
console.log(fruits)
fruits.splice(2, 0) //在下标2位置，删除0个元素
console.log(fruits)
fruits.splice(2, 2); //在下标2，开始删除2个元素
console.log(fruits)