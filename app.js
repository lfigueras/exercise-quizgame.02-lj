/*
-There's a counter for the 3 questions.
-Questions: should change when button clicks.
-Correct answer button : will return the score, once this button clicked the score
    should be stored, return to increment and display.
-Wrong answer button : will just allow to proceed with the next question until it 
   reaches the last question . 
-Score: this should displays the total score. 

1.But  on that will trigger to change the value of the question.
2.Determine the correct answer.
3.The score will display if the answer is correct (increment) and will not change if its wrong.
4.After determining the right or wrong question it will proceed to the next question.
5.Once done with the questions the total score will display.

Extra: 
-Question number display changes when the next question proceeds.
*/

//Array of questions

let button1 = document.getElementById('a');
let button2 = document.getElementById('b');
let button3 = document.getElementById('c');
let button4 = document.getElementById('d');

let myQuestions = [
    {
      question: "How old is LJ?",
      
      answers: {
        a: "27",
        b: "25",
        c: "26",
        d: "24",
        correctAnswer: "b",
      },
    },
    {
      question: "What is her favorite game?",
      answers: {
        a: "ML",
        b: "COD",
        c: "DOTA 2",
        d: "LOL",
        correctAnswer: "b",
      },
     
    },
    {
      question: "Where does LJ live?",
      answers: {
        a: "Pasig city",
        b: "Quezon city",
        c: "Rizal",
        d: "Sta Mesa",
        correctAnswer: "a",
      },
      
    }
  ];


let lastQuestionIndex = myQuestions.length-1;
let questionIndex = 0;



document.getElementById('startbtn').addEventListener('click', e =>{
  renderQuestion();
  document.querySelector('.start').classList.add('hide');
  document.querySelector('.question-container1').classList.remove('hide');
  document.querySelector('.question-container1').classList.add('show');
  
});

document.getElementById('button').addEventListener('click' , e => {


   if (questionIndex < 3){
    
    renderQuestion();
    checkAnswer();
    
   }else{
    document.querySelector('.question-container1').classList.add('hide');
    
   }
    
})

function renderQuestion(){

  let show = document.getElementById('question');
  let q = myQuestions[questionIndex];
  
    show.innerHTML = q.question;
    questionIndex++;
    console.log(questionIndex)

    button1.innerHTML = q.answers.a;
    button2.innerHTML = q.answers.b;
    button3.innerHTML = q.answers.c;
    button4.innerHTML = q.answers.d;
}

function checkAnswer(){
    
}



//if button is pressed ! right move on
//if button is pressed right answer score ++


