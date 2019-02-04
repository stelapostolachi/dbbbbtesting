//Create a game that whenever player reaches level 10, a new robot capability is unlocked:the laser beam capability. At level 10, new robot objects receive their laser beams.
//
//1- Create a Game Constructor and set the level to 0
//
 function Game(){
     this.level=0;
 }



//2- Create a Robot Constructor with properties name, year, owner
function Robot(name,year,owner){
    this.name=name;
    this.year=year;
    this.owner=owner;
}


//3- Create a method called play that will increase the level whenever you call. 
//    Print inside this method: Welcome to Level ___

Game.prototype.play = function(level){
    this.unlock(level);
    level++;
    console.log(`Welcome to level ${level}`);
    return level;
}

//
//4- Create a method called unlock that will check if level is equal to 10. If level is 10, create another method(inside the if statement) called deployLaser that prints: "name of your robot" blasting you with laser beams.

Game.prototype.unlock=function(level){
    if(level==10){
       Game.prototype.deployLaser=function(){
           console.log(`${this.name} is blasting you with laser beams.`)
       } 
    }
}


//5- Create 2 Robot objects and call deployLaser method. 
let game = new Game();
let robot1= new Robot("Robby",2018,"Terminator");
let robot2= new Robot("Tuby",2018,"Scuby");
robot1.__proto__.__proto__ = Game.prototype;
var level = game.level;
do{
    level = game.play(level);
}while(level<=10)
robot1.deployLaser()
robot2.deployLaser()

//** We have 2 constructors which are Game and Robot. We need to create some relationship between, So you have to put the methods(requirement-3 and 4) such a place that they can be inherited.
//
//Sample Output Should be :
//
//Welcome to level 1
//Welcome to level 2
//Welcome to level 3
//Welcome to level 4
//Welcome to level 5
//Welcome to level 6
//Welcome to level 7
//Welcome to level 8
//Welcome to level 9
//Welcome to level 10
//Robby is blasting you with laser beams.
//Rosie is blasting you with laser beams.