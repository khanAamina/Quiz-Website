
const start = document.getElementById('start');
const Question = document.getElementById('question');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const option4 = document.getElementById('option4');
const next = document.getElementById('Next');
const submit = document.getElementById('Submit');
const showScore = document.getElementById('Score');
 
const answers = document.querySelectorAll('.answer');


const quizDB =[
    {
        Que: "1.Brass gets discoloured in air because of the presence of which of the following gases in air?",
        a: "Oxygen",
        b: "Hydrogen sulphide",
        c: "Carbon dioxide",
        d: "Nitrogen",
        ans: "ans2"
    },
    {
        Que: "2.Which of the following is a non metal that remains liquid at room temperature?",
        a:	"Phosphorous",
        b:	"Bromine",
        c:	"Chlorine",
        d:	"Helium",
        ans: "ans2"
    },
    {
        Que: "3.Chlorophyll is a naturally occurring chelate compound in which central metal is",
        a: "Copper",
        b: "Magnessium",
        c: "iron",
        d: "Calcium",
        ans: "ans2"
    },
    {
        Que : "4. Which of the following is used in pencils?",
        a: "Graphite",
        b: "Hydrogen",
        c: "Carbon dioxide",
        d: "Charcoal",
        ans: "ans1"
    },
    {
        Que : "5.Which of the following metals forms an amalgam with other metals?",
        a: "Zinc",
        b: "lead",
        c: "Mercury",
        d: "tin",
        ans: "ans3"
    },
];

let count = 0;
let score= 0;

const loadQuestion = ()=>{
     countList = quizDB[count];
    Question.innerText = countList.Que;
    option1.innerText = countList.a;
    option2.innerText = countList.b;
    option3.innerText = countList.c;
    option4.innerText = countList.d;
     
};
  const getCheckedAnswer = ()=>{
      let answer;

      answers.forEach((curAnsElem)=>{
          if(curAnsElem.checked){
              answer = curAnsElem.id;
          }
      })
      return answer;
  }
    const deselectAll = () =>{
        answers.forEach((curAnsElem) => curAnsElem.checked = false)
    };

 next.addEventListener('click',()=>{
     const checkedAnswer = getCheckedAnswer();
     console.log(checkedAnswer);

     if(checkedAnswer === quizDB[count].ans){
         score++;
     };
      
     count++;
     deselectAll();

     if(count<quizDB.length) {
        loadQuestion();
     }
    
     if(count===quizDB.length-1){
         document.getElementById('Submit').style.display="block";
         document.getElementById('Next').style.display="none";
     }else{
        submit.addEventListener('click', ()=>{
            document.getElementById('Score').style.display="block";
            document.getElementById('question-area').style.display="none";
            document.getElementById('questionContainer').style.backgroundImage="none";
            

            showScore.innerHTML =`
               <h2> Your Score <br> ${score}/${quizDB.length}</h2>
               <button class="btn-next  btn-lg " id="playAgain" onclick="location.reload()">Play Again</button> 
            
             `
          });
         
     }
 });


start.addEventListener('click',()=>{
    document.getElementById("questionContainer").style.display="block";
        document.getElementById("start").style.display="none";
        document.getElementById("quiztext").style.display="none";
        document.getElementById("quiztitle").style.display="none";
        document.getElementById("quizName").style.backgroundImage = "url(https://wallpaperaccess.com/full/629554.jpg)";       
        loadQuestion();
});



