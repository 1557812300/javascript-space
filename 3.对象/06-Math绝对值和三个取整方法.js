// 1.绝对值方法
console.log(Math.abs(1))
console.log(Math.abs(-1))
console.log(Math.abs('-111')) // 1 隐式转换，会把字符串 -1 转换为数字型
    // 2.三个取整数方法
console.log(Math.floor(1.2)) // 1向下取整 floor地板
console.log(Math.floor(1.9)) //1

//四舍五入 5特殊--往大了取
console.log(Math.round(1.1)) //1
console.log(Math.round(1.5)) //1
console.log(Math.round(1.9)) //2
console.log(Math.round(-1.5)) //-1
console.log(Math.round(-1.6)) //-2