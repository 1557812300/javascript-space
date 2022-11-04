   function countDown(time) {
       var nowTime = +new Date() //没有参数，返回的是当前时间总的毫秒数
       var inputTime = +new Date(time) //有参数，返回的是用户输入时间的总毫秒数
       var times = (inputTime - nowTime) / 1000
       var d = parseInt(times / 60 / 60 / 24); //天数
       d < 10 ? '0' + d : d;
       var h = parseInt(times / 60 / 60 % 24); //小时
       h < 10 ? '0' + h : h;
       var m = parseInt(times / 60 % 60); //分
       m < 10 ? '0' + m : m;
       var s = parseInt(times % 60); //秒
       s < 10 ? '0' + s : s;
       return d + '天' + h + '时' + m + '分' + s + '秒';
   }
   console.log(countDown('2022-11-11 18:29:00'))
   var date = new Date()
   console.log(date)