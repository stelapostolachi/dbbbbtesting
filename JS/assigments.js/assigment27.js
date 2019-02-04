//Suppose that you are working in a small town administration, and you are in charge of two town elements:
//1-Parks
//2-Streets
//It is a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.
//At an end-of-year meeting, your boss wants a final report with the following:
//1. Tree density of each park in the town (formula: number of trees / park area)
//3. The name of the park that has more than 1000 trees
//5. Size classification of all streets: tiny/small/normal/big/huge. 
//All the report data should be printed to the console.
//Hint: Use some of the ES6 features: classes, subclasses, template strings``, maps, arrow functions, destructing, etc

class Admin{
    constructor(allNames,buildYear){
        this.allNames=allNames;
        this.buildYear=buildYear; 
    }
}

class Parks extends Admin{
    constructor(allNames,buildYear,treesNum,parkArea){
        super(allNames,buildYear)
        this.treesNum=treesNum;
        this.parkArea=parkArea;      
    }
    densityPark(){
        
         return (this.treesNum/this.parkArea).toFixed(2)
    }
    parkTrees(){
        if(this.treesNum>=1000){
            console.log(`${this.allNames} has ${this.treesNum} trees!`)
        }else{
            console.log(`${this.allNames} is not a park.`);
        }
    }
};

class Streets extends Admin{
    constructor(allNames,buildYear,size){
        super(allNames,buildYear)
        this.size=size;
    }
    sizeClassification(){
let streetsize=new Map();
        streetsize.set("T","Tiny");
        streetsize.set("N","Normal");
        streetsize.set("B","Big");
        streetsize.set("H","Huge");
        streetsize.set("S","Small");
        console.log(`${this.allNames} build in ${this.buildYear} is ${streetsize.get(this.size)} street.`);
    }
    
}

let street1 = new Streets ("Morgan",1887,"T");
street1.sizeClassification();
let street2 = new Streets("Henry",1803,"N");
street2.sizeClassification();
let street3 = new Streets("Deer Gap",1007,"B");
street3.sizeClassification();
let street4 = new Streets("River",1996,"H");
street4.sizeClassification();

let park1 = new Parks("Dendrarium",2012,12450,20000);
let park2 = new Parks("Valea Trandafirilor",2003,9339,23444);
let park3 = new Parks("Stefan Cel Mare",1800,202,10000000);
console.log(park1.densityPark());
console.log(park2.densityPark());
console.log(park3.densityPark());
park1.parkTrees();
park2.parkTrees();
park3.parkTrees();




























