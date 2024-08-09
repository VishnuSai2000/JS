const marks = [80 , 80 , 50];

console.log(calculateGrade(marks));

function calculateGrade(marks){
    
    const average = avarageOfMarks(marks);

    if (average <60) return 'F';
    if (average <70) return 'D';
    if (average <80) return 'C';
    if (average <90) return 'B';
    return 'A';
}

function avarageOfMarks(array){
    sum = 0;
    for (let value of array)
    sum += value;
    return sum/marks.length;
}




// sum = 0;
    // for (let mark of marks)
    //     sum += mark;
    // let average = sum / marks.length;