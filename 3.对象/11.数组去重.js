// 有一个数组['c',a',z',a',x','a',x',c',b']，要求去除数组中重复的元素。
var arr = ['c', 'a', 'z', 'a', 'x', 'a', 'x', 'c', 'b']
var newArry = []
for (var i = 0; i < arr.length; i++) {
    if (newArry.indexOf(arr[i]) === -1) {
        newArry.push(arr[i])
    }

}
console.log(arr)
console.log(newArry)