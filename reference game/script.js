
const startButton = document.getElementById('start')
const queestionContainerElement = document.getElementById
('question-container')

const questionElement = document.getElementById('question');
const answerButtonElements = document.getElementById('answer-button');
let shuffleQ, currentQuestionIndex



startButton.addEventListener('click', startGame)


function startGame() {
   startButton.classList.add('hide')
   shuffleQ = questions.sort(() => Math.random() - .5)
   queestionContainerElement.classList.remove('hide')
   
   setNextQuestion()
}

function setNextQuestion () {
   
}


function correctAnswer(questionIndex){
    
    console.log(questions[questionIndex-1].correctAnswer)
    const options=document.getElementsByClassName("question1")
    console.log(options)
    for(let i=0;i<options.length;i++){
        if(options[i].innerText==questions[questionIndex-1].correctAnswer){
            options[i].style.color="green"
        }
    }
}
// function showQuestion() {
//     questionElement.innerText = question.question

//     question.answer.forEach(answer => {
//         const button = document.createElement('button')
//         button.innerText = answer.text
//         button.classList.add(.btn)
        
//         if(answer.correct){
//             button.dataset.correct =answer.correct
//         }
//     });
// }



function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body.correct)
    Array.from(answerButtonElements.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    nextButton.classList.remove('hide')
}


const questions = [
    { 
        correctAnswer:"Avengers 2012"       
    }

    
]
