
/*var myArray = ["Orange","Apple"];
while(yourBasket!=5) { 
    var yourBasket=parseInt(prompt("1-Add a new product /n2-Remove a product \n3-Edit a product \n4-Print the shopping list \n 5-Exit the program ")); 
    switch(yourBasket){


        case 1:
var add = prompt("Currently you have: "+myArray+" what you want to add? "); 
    myArray.push(add);
    alert("New list: " +myArray);
    break;
 
        case 2:
var element=prompt("Currently you have: "+myArray+"\nWhat do you want to remove?");
var removed=false;
var newElement=prompt("What is the new product ?");

    for(var i=0;i<myArray.length;i++){
   if(myArray[i]==element){
       myArray.splice(i,1,newElement);
       removed=true;
   }    
}
}else if(removed){
   alert(element+ " Successfully removed");
   alert(" New list: "+myArray);
}else{
   alert(element+ " Could not be found");
}


for (var i=0;i<myArray.length; i++){
    alert((i+1)+"-"+myArray[i]);
*/

var shoppingList = ["Orange", "Apple"];
    while( yourBasket!=5 ){

 var yourBasket = parseInt(prompt("1-Add a new product \n2-Remove a product \n 3-Edit a product \n4-Print the shopping list \n 5-Exit the program "));
    switch(yourBasket){
            
        case 1:
    var add = prompt("Currently you have: "+ shoppingList+ ". \n What you want to add?");
        shoppingList.push(add);
        alert("New list: " + shoppingList);   
        break;
    
     
        case 2:  
    var remove = prompt("Currently you have: "+ shoppingList+ ". What you want to remove?");
        for (var i=0; i<shoppingList.length; i++){
        if (shoppingList[i] == remove){
        shoppingList.splice(i,1); 
        alert("Successfully removed. New list: " + shoppingList);
        break;
    }else if(i == shoppingList.length-1){
       alert(remove + " could not be found"); 
       }
       }
       break;     
     
            
        case 3: 
    var remove = prompt("Currently you have: "+ shoppingList+ ". Enter what you want to change?");
    for (var i=0; i<shoppingList.length; i++){
        if (shoppingList[i] == remove){
    var newProduct = prompt("What is the next product that you want to enter?");
        shoppingList.splice(i,1,newProduct); 
        alert("Successfully changed. New list: " + shoppingList);
        break;
    }else if(i == shoppingList.length-1){
        alert(remove + " could not be found"); 
    }
     }
        break;
    
        case 4:
    for (var i=0; i<shoppingList.length; i++){
        alert((i+1) + "-" + shoppingList[i]);   
    }
        break;
    
        case 5:
            alert("Thank you!");
            break;
    }
}
    



