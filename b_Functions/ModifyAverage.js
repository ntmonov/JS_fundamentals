function modifyAverage(num) {
    let digits = num.toString().split("").map(Number);

    let digitsAvg = digits.reduce((a,b) => a + b) / digits.length;

    while (digitsAvg <= 5) {
        digits.push(9);
        digitsAvg = digits.reduce((a,b) => a + b) / digits.length;
    }
    console.log(digits.join(""));
}



modifyAverage(5835)