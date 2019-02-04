//             Synchronous and Asynchronous
//
//In Summary. So to recap, synchronous code is executed in sequence – each statement waits for the previous statement to finish before executing. Asynchronous code doesn't have to wait – your program can continue to run. You do this to keep your site or app responsive, reducing waiting time for the user.


//function first(){
//    setTimeout(function(){//synchronous
//     console.log("first one");//lat one
//    },1000)//if we have timing will skeep and come back after ather functions are executed//1000 is timer.
//    
//}
//
//function second(){//Asynchronous
//    console.log("second one");//execute first
//}
//
//function third(){
//    console.log("third one");//execute second
//}
//
//first();
//second();
//third();

//even with (setTimeout)delay I want to be able to print first function and all of them in order



//function first(callback){
//    setTimeout(function(){
//     console.log("first one");
//        callback(third);//second(third)
//    },3000)
//    
//}
//
//function second(callback){
//    console.log("second one");
//    callback();//(third)
//}
//
//function third(){
//    console.log("third one");
//}
//
//first(second);


//const async = function(number,callback){//we are handaling async with callback function
//    const result =number+2;
//    callback(result);
//}
//
//async(2,function(result){
//    console.log(result);
//    async(4,function(result){
//        console.log(result);
//        async(6,function(result){
//        console.log(result)
//    })
//    })
//         
//})
/////////////////////////////////////////////////////////////////////
//             callback hell/Piramid of Dom
//function prepareTea(){
//
//   setTimeout(function(){
//       console.log("1.Find Vessel");
//
//       setTimeout(function(){
//           console.log("2.Put water,sugar and tea");
//
//           setTimeout(function(){
//               console.log("3.Bring the mixture to a boil");
//
//               setTimeout(function(){
//                   console.log("4.Filter the tea");
//
//                   setTimeout(function(){
//                       console.log("5.Serve the tea");
//                   },2000)
//
//               },2000)
//
//
//           },2000)
//
//
//       },2000)
//
//
//   },2000)
//}
//
//prepareTea();
/////////////////////////////////////////////////////////////////////////
                            //Promise 
//let promiseToCleanTheRoom = new Promise(function(resolve,reject){
//    //clean the rr=oom
//    let isClean=false;
//    
//    if(isClean){
//        resolve("Clean");
//    }else{
//        reject("not clean");
//    }
//})
//promiseToCleanTheRoom.then(function(fromResolve){//call the promise
//    console.log("the room is "+fromResolve)
//}).catch(function(fromReject){
//    console.log("the room is "+fromReject)
//})

////////////////////////Now we have dependencies

//let cleanRoom = function(){
//    return new Promise(function(resolve,reject){
//        resolve("Clean the room.");
//    })
//}
//let removeGar = function(msg){
//    return new Promise(function(resolve,reject){
//        resolve("Remove garbage.");
//    })
//}
//
//let winIceCream = function(msg){
//    return new Promise(function(resolve,reject){
//        resolve("Won the IceCream.");
//    })
//}
//
//cleanRoom().then(function(result){//promise object 
//   return removeGar(); 
//}).then(function(result){
//    return winIceCream();
//}).then(function(result){
//    console.log("Finished "+result)
//}) 

//const async =()=>{
//    return new Promise((resolve,reject)=>{
//        resolve("Everithing is good.")
//    })
//}
//async()
// 
//    .then((data)=>{
//    console.log(data);
//    return 1;
//    })
//     .then ((data)=>{
//    console.log(data)
//    return 2;
//})
//    .then((data)=>{
//    console.log(data);
//})

//const async =()=>{
//    return new Promise((resolve,reject)=>{
//        reject("Everithing is good.")
//    })
//}
//async()
// 
//    .then((data)=>{
//    console.log(data);
//    return 1;
//    })
//     .then ((data)=>{
//    console.log(data)
//    return 2;
//})
//    .then((data)=>{
//    console.log(data);
//})
//    .catch((data)=>{
//    console.log(data)
//})

//const async =(number)=>{
//    return new Promise((resolve,reject)=>{
//        if (number==4){
//            resolve("Everithing is good.")
//        }else{
//            reject("Everithing is not good.")
//        }
//        
//    })
//}
//async(5)
// 
//    .then((data)=>{
//    console.log(data);
//    return 1;
//    })
//     .then ((data)=>{
//    console.log(data)
//    return 2;
//})
//    .then((data)=>{
//    console.log(data);
//})
//    .catch((data)=>{
//    console.log(data)
//})

/////////////////////////////////////////////////////////
         ////promise chain               
//function doubleAfter2Secinds(x){
//    return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//                   resolve(x*2)
//        },2000)
//    })
//}

//function addPromise(x){
//    return new Promise(resolve=>{
//        doubleAfter2Secinds(10).then((a)=>{
//            doubleAfter2Secinds(20).then((b)=>{
//              doubleAfter2Secinds(30).then((c)=>{
//                  resolve(x+a+b+c);
//              })                           
//            })
//        })
//    })
//}
//addPromise(10).then((sum)=>{
//    console.log(sum);
//})

//async/await
//function doubleAfter2Secinds(x){
//    return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//                   resolve(x*2)
//        },2000)
//    })
//}
//
//
//async function addAsync(x){
//    const a = await doubleAfter2Secinds(10);
//    const b = await doubleAfter2Secinds(20);
//    const c = await doubleAfter2Secinds(30);
//    return x+b+c;
//}
//addAsync(10).then((sum)=>{
//    console.log(sum)
//})












