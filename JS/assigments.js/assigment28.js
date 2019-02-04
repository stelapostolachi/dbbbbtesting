//You just turned 18 years old and your dad promises you that he will get you a new car. 
//You do not know if you will get that car. Your dad can either really buy you a brand new car or stand you up and withhold the car if he is not happy.  You promised your friend that you will show them the new car when your dad buy you one. 


let newCar=true
let dadPromise = function(){
   return new Promise(function(resolve,reject){
        if(newCar){
            resolve("Yes, ");
        }else{
            reject("No, ");
        }
    })
}

let promiseToGetNewCar = function (msg){
   return new Promise(function(resolve,reject){
    if(newCar){
        resolve(msg+" I got a brand new car.");
    }else{
        reject(msg+" Dad is not happy.");
    }
    
  })
}

let promiseFrShowCar = function(msg){
   return new Promise(function(resolve,reject){
       if(newCar){
           resolve(msg+ " I will show my friends the brand new car!")
       }else{
           reject(msg+" No car my friends! ")
       }
    
   })
}

dadPromise().then(function(result){
    return promiseToGetNewCar(result);
}).catch(function(result){
    return promiseToGetNewCar(result);
}).then(function(result){
    return promiseFrShowCar(result);
}).catch(function(result){
    return promiseFrShowCar(result);
}).then(function(result){
    console.log("Youpee, "+result);
}).catch(function(result){
    console.log("Noooo, "+result)
})


