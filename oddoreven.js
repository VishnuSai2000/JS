const num =prompt("Enter the number");
showNumbers(num);

function showNumbers(limit){
    if (typeof limit !== 'number' ){
    console.log("not a valid input");
    }

    for (let i=0;i<= limit; i++){
        if(i==0){
            console.log(i,'"Neither Even nor Odd"');
        }
        else if (i%2==0){
            console.log(i,'"EVEN"');}
        else {
        console.log(i,'"ODD"');}
    }
}