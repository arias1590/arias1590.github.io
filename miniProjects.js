function temperatureBug()
{
    var num1 = document.project1.input1.value;
    if (num1 >= 70)
    {
        return "Summer"
    }
    else if (num1 >= 60)
    {
        return "Spring"
    }
    else if (num1 >= 40)
    {
        return "Fall"
    }
    else if (num1 < 40)
    {
        return "Winter"
    }
}

function calorieCounter()
{
    var num1 = document.project2.input1.value;
    language = language.toLowerCase();
   //basketball
    if (num1 == '10 basketball')
    {
        return "100 calories"
    }
    else if (num1 == '20 basketball')
    {
        return "200 calories"
    }
    else if (num1 == "30 basketball")
    {
        return "300 calories"
    }
    else if (num1 == "40 basketball")
    {
        return "400 calories"
    }
    else if (num1 == "50 basketball")
    {
        return "500 calories"
    }
    else if (num1 == "60 basketball")
    {
        return "600 calories"
    }
    //Swimming
    else if (num1 == "10 swimming")
    {
        return "150 calories"
    }
    else if (num1 == "20 swimming")
    {
        return  "300 calories"
    }
    else if (num1 == "30 swimming")
    {
        return "450 calories"
    }
    else if (num1 == "40 swimming")
    {
        return "600 calories"
    }
    else if (num1 == "50 swimming")
    {
        return "750 calories"
    }
    else if (num1 == "60 swimming")
    {
        return "900 calories"
    }
    //kayaking
    else if (num1 == "10 kayaking")
    {
        return "50 calories"
    }
    else if (num1 == "20 kayaking")
    {
        return "100 calories"
    }
    else if (num1 == "30 kayaking")
    {
        return "150 calories"
    }
    else if (num1 == "40 kayaking")
    {
        return "200 calories"
    }
    else if (num1 == "50 kayaking")
    {
        return "250 calories"
    }
    else if (num1 == "60 kayaking")
    {
        return "300 calories"
    }
}


function assignGrade()
{
    var num1 = Number(document.project3.input1.value);
    if (num1 >= 100)
    {
        return "A+"
    }
    else if (num1 >= 90)
    {
        return "A";
    }
    else if (num1 >= 80)
    {
        return "B"
    }
    else if (num1 >= 70)
    {
        return "C"
    }
    else if (num1 >= 60)
    {
        return "D"
    }
    else if (num1 >= 0)
    {
        return "F"
    }
    else if (num1 < 0)
    {
        return "How?"
    }
}


function dropDown()
{
    var myList=document.getElementById('myList');
    var activity = myList.options[myList.selectedIndex].text;
    return activity;

}

function returnWork()
{
    var activity = document.getElementById('workList').value;
   //return activity;
    if (activity == "walking 50 minutes")
    {
        return "300 calories";
    }
    else if (activity == "walking 40 minutes")
    {
        return "250 calories";
    }
    else if (activity == "walking 30 minutes")
    {
        return "200 calories";
    }
    else if (activity == "walking 20 minutes")
    {
        return "150 calories";
    }
    else if (activity == "walking 10 minutes")
    {
        return "100 calories";
    }
    else if (activity == "running 50 minutes")
    {
        return "800 calories";
    }
    else if (activity == "running 40 minutes")
    {
        return "700 calories";
    }
    else if (activity == "running 30 minutes")
    {
        return "500 calories";
    }
    else if (activity == "running 20 minutes")
    {
        return "350 calories";
    }
    else if (activity == "running 10 minutes")
    {
        return "200 calories";
    }

    else if (activity == "kayaking 50 minutes")
    {
        return "400 calories"
    }
    else if (activity == "kayaking 40 minutes")
    {
        return "350 calories"
    }
    else if (activity == "kayaking 30 minutes")
    {
        return "300 calories"
    }
    else if (activity == "kayaking 20 minutes")
    {
        return "250 calories"
    }
    else if (activity == "kayaking 10 minutes")
    {
        return "200 calories"
    }
}
