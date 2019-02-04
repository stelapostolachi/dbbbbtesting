// subject array.


//var str=0;
//for(var i=1; i<=7;i++){
//   str="";
//    for (j=1;j<=i;j++) { 
//        str=str+j+" ";
//    } 
//    console.log(str);
//} 
//
//for (var i=1; i<=6;i++){
//    var str="";
//    for(var j=1;j<=(7-i); j++){
//       str=str+j+" "; 
//    }
//    console.log(str);
//}

//output 
//1 
//1 2 
//1 2 3 
//1 2 3 4 
//1 2 3 4 5 
//1 2 3 4 5 6 
//1 2 3 4 5 6 7 
//1 2 3 4 5 6 
//1 2 3 4 5 
//1 2 3 4 
//1 2 3 
//1 2 
//1 


//              Subject Prototype

//1.create an array which have two object
//2.objects will have 2 properties (title and body)
//3.create function1 to see titles(1second delay)
//4.create function2 to add new object(2second delay)

//var DenverPost = [
//    {title:"post one", body:"body one"},
//    {title:"post two", body:"body two"},
//];
//
//function displayTitles() {
//setTimeout(x=> {
//    for(let i of DenverPost) {
//        console.log(i.title)
//    }
//}, 1000)
//}
//
//
//function createNewPost(newPost) {
//    return new Promise(function(resolve, reject) {
//        setTimeout(y=> {
//    DenverPost.push(newPost);
//            let error = false;
//            if(!error) {
//                resolve("good job");
//            } else {
//                reject("Houston! We have a problem!")
//            }
//    })
//
//    
//
//}, 2000)
//}
//
//async function name() {
//    await createNewPost({title:"post three", body:"body three"});
//    displayTitles();
//}
//
//name(); 

//let name = ["Mike", "Jason", "kennedy"];
//let age = [23, 27, 40];
//let empty = new Array(3);
//
//function getNameAge() {
//    return new Promise(function(resolve, reject) {
//        for(let i=0; i<name.length; i++) {
//        empty[i] = [name[i], age[i]];
//    }
//    console.log(empty);
//        let error = true;
//        if(!error) {
//            resolve("gj")
//        } else {
//            reject("houston")
//        }
//    })
//    
//}
//
//
//function biggerThan25() {
//    for(let i=0; i<empty.length; i++) {
//        if(empty[i][1] > 25) {
//            console.log(empty[i]);
//        }
//    }
//}
//
//
//getNameAge().then(biggerThan25);
//
//
////Composible
//
//let promise1 = Promise.resolve("Hi  guys");
//let promise2 = new Promise(function(resolve, reject) {
//    setTimeout(resolve, 3000, "gj")
//})
//let promise3 = new Promise(function(resolve, reject) {
//    setTimeout(resolve, 1000, "Houston")
//})
//let promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json());
//
//Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));                     
//////////////////     Task      //////////////
//In this challenge, we will learn about iterating over objects.
//Create a function which will have one parameter: an array, of objects.                                                        Each object in the array has two integer properties denoted by x and y.                                                         The function must return a count of all such objects o in array arr that satisfy o.x==o.y.

let arr=[{x:32,y:32},{x:2,y:5},{x:6,y:9},{x:99,y:99},{x:25,y:25}];
let count=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]<arr.length){
        if(arr[i].x==arr[i].y){
            count++;
        }
        
    }
    console.log(count);
}















