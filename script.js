document.addEventListener('DOMContentLoaded', () => {
    const startbtn=document.getElementById("startbtn")
    const nextbtn=document.getElementById("nextbtn")
    const restartbtn=document.getElementById("restartbtn")
    
    const choicelist=document.getElementById("choiceslist")
    const questiontext=document.getElementById("questiontext")
    const question=document.getElementById("questioncontainer")
    const result=document.getElementById("resultcontainer")
    const scoredisplay=document.getElementById("score")


    const questions=[
        {
            question:"What is the capital of France?",
            choices:["Paris","London","Berlin"],
            answer:"Paris"
        },
        {
            question:"Which planet is known as the red planet?",
            choices:["Mars","Venus","Jupiter"],
            answer:"Mars"
        },
        {
            question:"Who wrote 'hamlet' ?",
            choices:["Charles Dickens","William Shakespere","Mark Twain"],
            answer:"William Shakespere"
        }
    ]
    let currentquestion = 0
    let score=0
    startbtn.addEventListener('click',startquiz)
     nextbtn.addEventListener('click', showNextQuestion);
    restartbtn.addEventListener('click', restartquiz);

    function startquiz(){
        startbtn.classList.add('hidden')
        result.classList.add('hidden')
        question.classList.remove('hidden')
        nextbtn.classList.remove('hidden');
        showquestion()
    }
    
    function showquestion() {
        nextbtn.classList.add('hidden')
        questiontext.textContent = questions[currentquestion].question
        choicelist.innerHTML=''
        questions[currentquestion].choices.forEach(choice => {
            const li =document.createElement('li')
            li.textContent = choice
            li.addEventListener('click', () => selectAnswer(choice))
            choicelist.appendChild(li)
        })
    }
    function selectAnswer(choice){
        const correctanswer=questions[currentquestion].answer
        if(choice=== correctanswer){
            score++
        }
        nextbtn.classList.remove('hidden')
    }
    function showNextQuestion() {
        currentquestion++; 
        if (currentquestion < questions.length) {
            showquestion(); 
        } else {
            showresult(); 
        }
    }

    function showresult() {
        question.classList.add('hidden')
        result.classList.remove('hidden')
        scoredisplay.textContent = `${score} out of ${questions.length}`
    }
    function restartquiz() {
        currentquestion = 0;
        score = 0;
        result.classList.add('hidden');
        startquiz()
    }
})