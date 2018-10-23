function tenToSmall(num, base) //convert a base-10 number to a smaller base
{
   //this function is expecting a number (num) in base 10
   //it will convert the number (num) to the value of 'base'
   num = 117; //number to convert
   base = 2; //destination base
   smallNum = ""; //store remainders here

   while (num > 0) //continue looping while num isn't zero
   {
       smallNum = num%base + smallNum; //3%5 = 2.... % returns remainders
       //setup num for the next iteration of the loop
       num = Math.floor(num/2);


   }
   return smallNum;

}

function smallToTen(num, base) //convert base-2 number to base-10
{
   num = 1110101; //Should be '51' in base 10
   base = 2; //original base
   tenNum = 0;
   numLength = num.toString().length;

   while(numLength > 0)
   {
       var denominator = Math.pow(10, (numLength-1));

       var currentDigit = Math.floor(num/denominator);

       tenNum = tenNum + currentDigit*Math.pow(base, numLength-1);

       num = num%denominator;
       numLength--;
   }
   return tenNum;
}


function twoToTen(num, base)
{
   var num1 = document.getElementById().value)
   base = 2; //original base
   tenNum = 0;
   numLength = num.toString().length;

   while(numLength > 0)
   {
       var denominator = Math.pow(10, (numLength-1));

       var currentDigit = Math.floor(num/denominator);

       tenNum = tenNum + currentDigit*Math.pow(base, numLength-1);

       num = num%denominator;
       numLength--;
   }
   return tenNum;
}
