function doubleX(array){
for (var i=0; i<array.length; i++){
    if (array[i]=="x" && array[i+1]=="x"){
        console.log("true");
        break;
    }else if (array[i]=="x") {
        console.log("false");
        break;
    }else if(i==array.length-1){
        console.log("Not found");
    }
}
}
doubleX(["a","x","x","b","b"]); 
doubleX(["a","x","a","x","a","x"]);
doubleX(["x","x","x","x","x"]);
doubleX(["a","x","a","x","x"]);





















