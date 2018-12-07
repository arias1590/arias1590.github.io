function calculate(expression) //ex. expression is 2+5 or 9*6 or 10/5
{
    //'expression' is a string of EVERYTHING in you calculatorWindow
    //Need to extract the first number from 'expression'
    var firstNum = Number(expression.substr(0,1));

    var operator = expression.substr(1,1);

    var secondNum = Number(expression.substr(2,1));

    var subtractNums = Number(firstNum-secondNum);

    if (operator === '+')
    {
        return addNums(firstNum, secondNum);
    }
    else if (operator === '-')
    {
        return subtractNums;
    }
    else if (operator === '*')
    {
        return multiplyNums(firstNum, secondNum)
    }
    else if (operator === '/')
    {
        return divideNums(firstNum, secondNum)
    }


    else if (operator === 'Clear')
    {
        return clearImmediate(expression)
    }


}

function addNums(p1, p2)
{
    return p1+p2;
}

function multiplyNums(p1, p2)
{
    return p1*p2;
}

function  divideNums(p1, p2)
{
    return p1/p2;
}


