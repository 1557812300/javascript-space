// 1、获取当前时间必须实例化
var now = new Date()
console.log(now)
    // 2、Date()构造函数的参数
    // 参数常用的写法 
    // 数字型 2019,10,1  字符串型 '2019-10-1 8:8:8' 时分秒
    // 如果Date()里面写参数，就返回括号里面输入的时间
var data = new Date(2020, 10, 11)
console.log(data) // 返回的是11月不是10月

var data2 = new Date('2022-10-11 8:8:7')
console.log(data2)

// 日期格式化
var data1 = new Date()
console.log(data1.getFullYear()) //返回当前年
console.log(data1.getMonth()) //返回当前月
console.log(data1.getDay()) //返回当前日

//写一个
var data2 = new Date()
var year2 = data2.getFullYear();
var month2 = data2.getMonth() + 1;
var day2 = data2.getDay() + 23;
console.log('今天是' + year2 + '-' + month2 + '-' + day2)

// 获取当前时间
function getTimer() {
    var time = new Date()
    var h = time.getHours()
    h = h < 10 ? '0' + h : h
    var f = time.getMinutes()
    f = f < 10 ? '0' + f : f
    var s = time.getSeconds()
    s = s < 10 ? '0' + s : s;
    return h + ':' + f + ':' + s
}
console.log(getTimer())

// 获取日期的总的毫秒形式
// 1.获取Date总的毫秒数 不是当前时间的毫秒数 而是距离1970年1月1号过了多少毫秒数
var data3 = new Date()
console.log(data3.valueOf()) //得到现在时间距离1970.1.1总的毫秒数
console.log(data3.getTime()) //得到现在时间距离1970.1.1总的毫秒数
    //3简单写法
var data4 = +new Date() //返回总的毫秒数
console.log(data4)
    // 3. HTML5中提供的方法 获得总的毫秒数 有兼容性问题
console.log(Date.now())