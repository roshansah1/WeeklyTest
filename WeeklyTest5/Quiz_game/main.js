
let button = document.getElementById('button')

button.addEventListener('click', () => {
    clearInterval(timeInterval)
    quizQuestions()
})


let indx = 0;
function quizQuestions() {
    timerCount()
    let ques;
    let no;
    if(indx == 5){
      let content = document.getElementById('container')
      content.style.padding = "1rem"
      content.innerHTML = `<h1> Your Quiz has been Submitted </h1>`
      return
    }
    no = questions[indx].numb
    ques = questions[indx].question
    let pTag = document.getElementsByClassName('pTag')[0]
    pTag.innerHTML = ""
    for(let i = 0; i < questions[indx].options.length; i++){
          console.log(pTag[i])
          pTag.innerHTML += `<p class="answer">${questions[indx].options[i]}</p>`
    }
    let questionHtml = document.getElementsByTagName('h2')[0]
    questionHtml.innerHTML = `${no}. ${ques}`   
    
    let footerPTag = document.getElementById('pTag')
    footerPTag.innerText = no+" of 5 Questions"
    quizValidation(indx)
    indx++
}
quizQuestions()

function quizValidation(indx) {
    let pTag = document.getElementsByClassName('answer')
    console.log(pTag)
    for(let i = 0; i < pTag.length; i++){
        console.log("hello")
        pTag[i].addEventListener('click', () => {
            clearInterval(timeInterval)
            let text = pTag[i].innerText
            if(text == questions[indx].answer){
                pTag[i].style.backgroundColor = "lightgreen"
                
            }else{
                pTag[i].style.backgroundColor = "red"
                for(let i = 0; questions[indx].options.length; i++){
                    if(questions[indx].options[i] == questions[indx].answer){
                        pTag[i].style.backgroundColor = "lightgreen"
                        break
                    }
                }
            }
           
        })
    }
    
}


var timeInterval;

function timerCount() {
    let timer = document.getElementById('timer')
    let time  = 8
    timeInterval = setInterval(() => {
        timer.innerText = `0${time}`
       time = time - 1
      if(time == -1){
        clearInterval(timeInterval)
        quizQuestions()
      }
    },1000) 
    console.log(time)
}

