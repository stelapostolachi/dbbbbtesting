/*Project Requirements

1. Build a function constructor called Question to describe a question. A question should include:
   a)Question itself
   b)The answer from which the player can choose the correct one (choose an adequate data structure here, array, object,etc)
   c)Correct answer(I would use a number for this)

2. Create a couple of questions using the constructor

   Question 1-Is JavaScript the coolest programming language in the world?
   Answers 1-Yes,No
   Correct Answer1-Yes

   Question 2-What is the name of this course's teacher?
   Answers 2-Mike,John,Ozzy
   Correct Answer2-Ozzy

   Question 3-What does best describe coding?
   Answers 3-Boring,Hard,Fun,Tedious
   Correct Answer3-Fun

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint:write a method for the question objects for this task)

5. Use the prompt function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4

6. Check if the answer is correct and print to the console whether the answer is correct or not (Hint: write another method for this)
*/
function Question(question,answer,correctAnswer){
    this.question=question;
    this.answer=answer;
    this.correctAnswer=correctAnswer
    this.randomQuestion=function(){
        var string=this.question+"\n";
        for (var i=0;i<this.answer.length; i++){
            string+=(i+1)+". "+this.answer[i]+"\n";
        }
        console.log(string);
        var correct=prompt("What is correct answer?");
        if(this.answer[correct-1]==this.correctAnswer){
            console.log("Correct answer!")
        }else{
            console.log("Incorect answer!")
        }  
    }
}
 storage=[];
var Q1=new Question("Is JavaScript the coolest programming language in the world?",["Yes","No"],"Yes");
storage.push(Q1)
var Q2 =new Question("2-What is the name of this course's teacher?",["Mike","John","Ozzy"],"Ozzy");
storage.push(Q2)
var Q3 =new Question("3-What does best describe coding?",["Boring","Hard","Fun","Tedious"],"Fun");
storage.push(Q3)

i=Math.floor(Math.random()*(storage.length));
storage[i].randomQuestion ();
    