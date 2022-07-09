const quizData = [
    {
        question : 'How old is Saidi?',
        a:'10',
        b:'18',
        c:'28',
        d:'26',
        corect: 'c'
    },{
        question : 'What is the most used programming language in 2022?',
        a:'java',
        b:'c',
        c:'Python',
        d:'Javascript',
        corect: 'a'
    },{
        question : 'Who is the Gheto president in Uganda?',
        a:'Museven',
        b:'Bobi',
        c:'Muchaman',
        d:'Bebecool',
        corect: 'b'
    },{
        question : 'what does HTML stands for?',
        a:'Jason Object Notation',
        b:'Hypertext Markup Language',
        c:'Cascading Style sheet',
        d:'Application Programming Interface',
        corect: 'b'
    },{
        question : 'What was Javascript launched?',
        a:'2020',
        b:'2019',
        c:'2018',
        d:'none of the above',
        corect: 'd'
    }
   
];
  

const questionEl = document.getElementById('question');
const atxt = document.getElementById('atxt');
const btxt = document.getElementById('btxt');
const ctxt = document.getElementById('ctxt');
const dtxt = document.getElementById('dtxt');
const submit = document.getElementById('sub');
const quizz = document.getElementById('quizz');
let currentQuiz = 0;
let score = 0;
loadQustz();


function loadQustz(){
    

    const currentquizData = quizData[currentQuiz] ;
    
    questionEl.innerText = currentquizData.question;
    atxt.innerText = currentquizData.a;
    btxt.innerText = currentquizData.b;
    ctxt.innerText = currentquizData.c;
    dtxt.innerText = currentquizData.d;
    
   
}
function getSelected(){
    
     const ansersEls = document.querySelectorAll('.anser');
     let anser = undefined;
     ansersEls.forEach((anserEl) => {
if(anserEl.checked){
    anser = anserEl.id;

}
     });

     return anser;
}


submit.addEventListener('click', () => {
  
   const anser = getSelected();

if(anser){
    if(anser === quizData[currentQuiz].corect){
        score++;
    }
    currentQuiz++;
if(currentQuiz < quizData.length){
    loadQustz();
}else{
   quizz.innerHTML = '<h2>Thankx for Loving Us"</h2>';
}
}
});