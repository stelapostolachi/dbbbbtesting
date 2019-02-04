         //call apply bind
//var obj = {
//    num:2
//}
//var obj2 = {
//    num:10
//}
//var addToThis = function(a){
//    return this.num+a;
//}
//
//var x = addToThis.call(obj,3);
//console.log(x)
//
//var y = addToThis.call(obj2,3);
//console.log(y)
//
var obj3 = {
    num:10
}
var addToThis2 = function(a,b,c){
    return this.num+a+b+c;
}

var z =addToThis2.call(obj3,1,2,3);//function name.call(objectName,functionArgument)
console.log(z);


//Apply
var obj4 = {
    num:10
}
var arr=[1,2,3];
var d = addToThis2.apply(obj4,arr)
console.log(d)

//Bind
var obj5 = {
    num:5
}

var addToThis3 = function(a,b,c){
    return this.num+a+b+c;
}

var arr2 = [1,2,3];
var k = addToThis3.bind(obj5);

console.log(k(1,2,3))//11
console.log(k(...arr2))//11