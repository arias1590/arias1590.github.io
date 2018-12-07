function answers()
{
    var feedback=[];
    var Q1Answer = document.quiz.a1.value.toLowerCase();
    var Q2answer = document.quiz.a3.value.toLowerCase();

    if (Q1Answer === 'springfield')
    {
        feedback.push("Question 1 is correct");
    }
    else
    {
        feedback.push("Question 1 is wrong");
    }
    if (document.quiz.a2.value === 'The Sun')
    {
        feedback.push("Question 2 is correct!!");
    }
    else
    {
        feedback.push("Question 2 is wrong");
    }
    if (Q2answer === 'white')
    {
        feedback.push("Question 3 is correct!!!");
    }
    else
    {
        feedback.push("Question 3 is wrong");
    }
    if(document.quiz.a4A.checked === true && document.quiz.a4B.checked === true && document.quiz.a4C.checked === false && document.quiz.a4D.checked === false)
    {
        feedback.push("Question 4 is correct!!!");
    }
    else
    {
        feedback.push("Question 4 is wrong");
    }
    if (document.quiz.a5.value === 'Swimmer')
    {
        feedback.push("Question 5 is correct!!!")
    }
    else
    {
        feedback.push("Question 5 is wrong");
    }
    if(document.quiz.a6A.checked === true && document.quiz.a6B.checked === true && document.quiz.a6C.checked === true && document.quiz.a6D.checked === false)
    {
        feedback.push("Question 6 is correct!!!");
    }
    else
    {
        feedback.push("Question 6 is wrong");
    }


    alert(feedback);
}