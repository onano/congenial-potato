function submitAnswer() {
    'use strict';
    
    var total = 5, score = 0, i, q1, q2, q3, q4, q5;
    
    // forms["formName"]["which answer group"]
    q1 = document.forms["quizForm"]["q1"].value;
    q2 = document.forms["quizForm"]["q2"].value;
    q3 = document.forms["quizForm"]["q3"].value;
    q4 = document.forms["quizForm"]["q4"].value;
    q5 = document.forms["quizForm"]["q5"].value;
    
    // evaluating input
    for (i = 1; i <= total; i++) {
        if ((eval('q' + i) === null) || (eval('q' + i) === "")) {
            alert('Please enter answer for question' + i);
            return false;
        }
    }
    
    //set correct answers
    var correct_ans = ["a","b","a","d","a"];
    
    for (i=0; i<total; i++) {
        //Logic works yay!
        //Eval() is used for evaluating values 
        //Thanks captain obvious!
        if(eval('q' + (i+1)) === correct_ans[i]) {
            score++;
        }
    }
    
    //Display results to DOM
    var results = document.getElementById("results");
    results.innerHTML = "<h3>You Scored <span>" + score + 
                            "</span> out of <span>"+ total + "<span><h3>";
    
    //Cause why the heck not?
    alert('Your Score is : ' + score);
    
    return false;
}