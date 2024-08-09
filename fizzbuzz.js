const num =prompt("Enter the Number");
let output = fizzBuzz(Number(num));
console.log(output);

function fizzBuzz(input){
    //if(isNaN(input)) --- this is the alternate form of the below if condition. 
    if  (typeof input !== 'number')   
        return 'Not a Number';
    
    else if (input%3 == 0 && input%5 == 0)
        return 'fizzBuzz';
    
    else if (input%5 == 0)
        return 'Buzz';

    else if (input%3 == 0)
        return 'fizz';

        return input;
    
}
