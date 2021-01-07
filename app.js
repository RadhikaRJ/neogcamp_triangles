//quiz result 
var quizBtnref = document.querySelector("#submitQuiz");

var quizScoreRef = document.querySelector("#quiz-response");

quizBtnref.addEventListener("click",calculateQuizResult);

function calculateQuizResult(){
    var countOfCorrectAnswers=0;
    var quizAns=['right','acute','360','Isoceles','Equilateral','Scalane','Obtuse','pythagoras','Trigonometry','RightIsoc'];
    for(var i=0;i<quizAns.length;i++){
        var quizAnsRefID = "q"+(i+1);
        console.log(quizAnsRefID);
        var quizRefRadioVal = document.getElementsByName(quizAnsRefID);
        var rightAns="";
        for(var j=0;j<quizRefRadioVal.length;j++){
            if(quizRefRadioVal[j].checked){
               rightAns = quizRefRadioVal[j].value.toString();
               console.log(rightAns+"and stored correct ans is: "+quizAns[i]);
               if(quizAns[i]===rightAns){
                countOfCorrectAnswers+=1;
            }
            }

        }
        
        
        
        console.log(countOfCorrectAnswers);
        if(countOfCorrectAnswers==10){
            quizScoreRef.innerText="Congratulations!!\nYou scored: "+countOfCorrectAnswers+"/10";
        }
        else{
            quizScoreRef.innerText="You need to work on the basics.\nYou scored: "+countOfCorrectAnswers+"/10";
        }
        
    } 
}

