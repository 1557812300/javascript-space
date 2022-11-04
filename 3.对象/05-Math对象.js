// Math数学对象，不是一个构造函数，所以我们不需要new 来调用，
// 而是直接使用里面的属性和方法即可
var arr1=[4,5,6,8,4,9,45,12,11,23,11]
console.log(Math.max(1,5,69,88))

var myMath={
    PI:3.1415926,
    max:function(){
        var max=arguments[0]
        for(var i=0;i<arguments.length;i++){
            if(arguments[i]>max){
                max=arguments[i]
            }
        }
        return max
    },
    min:function(){
        var min=arguments[0]
        for (var i = 1; i < arguments.length; i++) {
            if (arguments[i] < min) {
                min = arguments[i];
            }
        }
        return min;
    }
}
console.log(myMath.PI);
console.log(myMath.max(1, 5, 9));
console.log(myMath.min(1, 5, 9));