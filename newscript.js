document.addEventListener('DOMContentLoaded', () => {
    const startbtn = document.getElementById("startbtn");
    const nextbtn = document.getElementById("nextbtn");
    const restartbtn = document.getElementById("restartbtn");

    const choicelist = document.getElementById("choiceslist");
    const questiontext = document.getElementById("questiontext");
    const question = document.getElementById("questioncontainer");
    const result = document.getElementById("resultcontainer");
    const scoredisplay = document.getElementById("score");

    const questions = [
        {
            question: "What is the capital of France?",
            choices: ["Paris", "London", "Berlin"],
            answer: "Paris",
            score:1
        },
        {
            question: "Which planet is known as the red planet?",
            choices: ["Mars", "Venus", "Jupiter"],
            answer: "Mars",
            score:2
        },
        {
            question: "Who wrote 'Hamlet'?",
            choices: ["Charles Dickens", "William Shakespeare", "Mark Twain"],
            answer: "William Shakespeare",
            score:3
        }
    ];
    let currentquestion =0
    let totalscore=6
    let score=0
    startbtn.addEventListener('click' , startquiz)
    restartbtn.addEventListener('click', restartquiz)
    nextbtn.addEventListener('click', showNextQuestion)

    function startquiz(){
        question.classList.remove('hidden')
        nextbtn.classList.add('hidden')
        result.classList.add('hidden')
        startbtn.classList.add('hidden')
        showquestion()
    }
    function showquestion(){
        questiontext.textContent = questions[currentquestion].question
        choicelist.innerHTML= ''
        questions[currentquestion].choices.forEach(choice => {
            const li = document.createElement('li')
            li.textContent = choice
            li.addEventListener('click', ()=> selectanswer(choice))
            choicelist.append(li)
        })
    }
    function selectanswer(choice){
        nextbtn.classList.remove('hidden')
        const correctanswer= questions[currentquestion].answer
        Array.from(choicelist.children).forEach(li => {
            li.style.pointerEvents = 'none'
        })
        if(choice === correctanswer){
            score =score+questions[currentquestion].score
        }
    }
    function showNextQuestion(){
        currentquestion++
        if(currentquestion< questions.length){
            showquestion()
        }else{
            showresult()
        }
    }
    function showresult(){
        question.classList.add('hidden')
        result.classList.remove('hidden')
        scoredisplay.textContent = `${score} out of 6`
    }
    function restartquiz(){
        currentquestion=0
        score=0
        result.classList.add('hidden')
        startquiz()
    }
})