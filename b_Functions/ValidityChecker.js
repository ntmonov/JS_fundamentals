function validityChecker(arr) {
    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];

    let distance1 = Math.sqrt((x1 * x1) + (y1 * y1));
    let distance2 = Math.sqrt((x2 * x2) + (y2 * y2));
    let distance3 = Math.sqrt(Math.pow((x1) - (x2), 2) + Math.pow((y1) - (y2), 2));

    let result = (distance1 === parseInt(distance1, 10)) ? "valid" : "invalid";
    console.log(`{${x1}, ${y1}} to {0, 0} is ${result}`);

    result = (distance2 === parseInt(distance2, 10)) ? "valid" : "invalid";
    console.log(`{${x2}, ${y2}} to {0, 0} is ${result}`);

    result = (distance3 === parseInt(distance3, 10)) ? "valid" : "invalid";
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${result}`);


}





validityChecker([3,0,0,4]);