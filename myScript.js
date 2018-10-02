/*
NOTES NOTES NOTES NOTES NOTES NOTES NOTES NOTES NOTES NOTES NOTES

Comparison Operations are symbols/math let up COMPARE 2 or more values

= symbol is an ASSIGNMENT operator, we use it to ASSIGN a value to a variable
    ex. var x = 5; sets x equal to a value of 5

    == symbol is a COMPARISON operator , we use it to COMPARE two values for equality
        ex. x == y; will return TRUE or FALSE depending on whether x and y hold equal values


       if (x === y) {...} STRICT EQUAL, meaning that both the VALUE and DATA TYPE of x and y must be the same
       OF (X == Y){...} LOOSE equal. Values must still be the same, but DATA TYPE does not.
        Javascript will attempt to convert the data type, but don't rely on it if possible

        if (x !==y){...} LOOSE not-equal, this will return TRUE if VALUE is not equal OR if DATA TYPE is not equal
        if (x != y){...} VALUES are not equal (DATA TYPE is ignored)

        x < y   means x is less than y
        x <= y  means x is less than or equal to y
        x > y   means x is greater than y
        x >= y  means x is greater than or equal to y


 */
function wordMatch()
{
 var str1 = "apple";
 var str2 = "Apple";
 //logic gate -- aka Conditional Statement,.. BOOLEAN statement b.c. result is always y/n
    if (str1 == str2) //meaning if the two strings are EQUAL
    {
     return "The two strings are EQUAL!!! wowo";
    }
    else
    {
     return "Those strings are different!@!";
    }

    //return str1 == str2;
}

function strictEqual()
{
    var x = 7; //DATA TYPE is NUMERIC
    var y = "7"; //DATA TYPE IS STRING
    if (x === y)
    {
        return "both x and y have the same VALUE and DATA TYPE";
    }

    if (x == y)
    {
        return "x and y have the same VALUE";
    }
}

/*
MINI PROJECT 1
    TASK: Write a function named 'greaterNum' that does the following:
        () Takes 2 arguments (parameters), both of which are NUMBERS (datatype?)
        () Return whichever number is the greater (higher value) number
        () Call that function 2 times with different number paors, and log the output
            to make sure it works (expected output: "The greater number of 23 and 33 is 33"

      GAMEPLAN!!!
        HTML:
        (*)Add 2 input boxes to collect 2 numbers to compare
        (*)Button to call the function
        (*)Place for the output

        JavaScript:
        ()function 'greaterNum' that uses if-then to compare numbers

*/

function greaterNum()
{
    var num1 = Number(document.project1.input1.value);
    var num2 = Number(document.project1.input2.value);

    if (num1 > num2) {
        return  "The greater number of " + num1 + " and " + num2 + " is " + num1;
    }
    else if (num2 > num1) {
        return  "The greater number of " + num1 + " and " + num2 + " is " +num1;
    }
    else if (num1 == num2) {
        return "They're equal";
    }

}


/* MINI PROJECT 2*
TASK: Write a function named 'helloWorld' that:
        -Takes 1 argument, language code (example 'en', 'es', 'de',..)
        -rReturns "Hello, world!" for the language code given.
        -It should default to returning English "Hello World"
        -Call the function for each of the supported languages and log the result
            to make sure it works
 HTML:
 (*) box for the output 'Hello World'
 (*) input box for the language code
 (*) FORM on the html document.
 (*) button to call the function
 Javascript:
 (*) function called 'helloWorld'
 (*) if-else statement with language codes
 (*) PULL language code FROM html and use in 'helloWorld'
 */

function helloWorld()
{
    var language = document.project2.input1.value; //capture data form input box on HTML
    language = language.toLowerCase();
    //here comes the LOGIC
    if (language == 'kr')
    {
        return "안녕 세상";
    }
    else if (language == 'ru')
    {
        return "Privet Mir!";
    }
    else if (language == 'de')
    {
        return "Hallo Welt";
    }
    else if (language == 'pl')
    {
         return "Witaj świecie";
    }
    else if (language == 'en')
    {
        return "MURICA YALL";
    }
    else
    {
        return "Hello World";
    }
}

/*
MINI PROJECT 3
Task: Write a function named 'assignGrade' that:
        - Takes 1 argument, a numeric score (ex. 80, 98, 72, etc)
        - Return a grade for the score. Either A, B, C, D, F+
        - Call that function for a few different scores and log the result
 HTML:
 ()box for the output 'Assign Grade'
 ()input box for the scores
 ()button to call the function
 JavaScript:
 ()function called 'assignGrade
 ()

 */

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
    else if (num1 < 60)
    {
        return "F"
    }
}

/*
MINI PROJECT 4
Write a function named 'pluralize' that:
    -take 2 arguments, a noun and a number
    -return the number and pluralize form of the noun
        EXAMPLE INPUT: number=3 noun=dog
        EXAMPLE OUTPUT: "3 dogs"
     - Test a few different nouns (it will not be perfect)
     - Allow for a few special cases like mouse, goose, cactus
 */
function pluralize()
{
    var quantity = Number(document.project4.num1.value); //get quantity
    var noun = document.project4.word1.value.toLowerCase();

    if (noun == 'mouse') //special if-else for case of MOUSE
    {
        if (quantity > 1)
        {
            return quantity + " " + "mice";
        }
        else
        {
            return quantity + "mouse";
        }
    }

    if (noun == 'deer') //special if-else for case of DEER
    {

       return quantity + "deer"
    }

    if (noun == 'cactus') //special if-else for case of CACTUS
    {
        if (quantity > 1)
        {
            return quantity + " " + "cacti";
        }
        else
        {
            return quantity + "cactus";
        }
    }


    if (quantity > 1)
    {
        return quantity + " " + noun + "s";
    }
    else
    {
        return quantity + " " + noun;
    }
}







