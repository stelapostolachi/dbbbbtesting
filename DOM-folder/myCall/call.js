var res;

function add(){
    var num1 =parseInt(document.getElementById("t1").value);
    var num2 =parseInt(document.getElementById("t2").value);
    res=num1+num2;
    document.getElementById("res").value = res;    
}

function sub(){
    var num1 =parseInt(document.getElementById("t1").value);
    var num2 =parseInt(document.getElementById("t2").value);
    res=num1-num2;
    document.getElementById("res").value = res;    
}

function mul(){
    var num1 =parseInt(document.getElementById("t1").value);
    var num2 =parseInt(document.getElementById("t2").value);
    res=num1*num2;
    document.getElementById("res").value = res;    
}

function div(){
    var num1 =parseInt(document.getElementById("t1").value);
    var num2 =parseInt(document.getElementById("t2").value);
    res=num1/num2;
    document.getElementById("res").value = res;    
}