function inRectangle(arr) {

    let x = arr[0];
    let y = arr[1];
    let xMin = arr[2];
    let xMax = arr[3];
    let yMin = arr[4];
    let yMax = arr[5];

    if (x >= xMin && x <= xMax && y <= yMax && y >= yMin) {
        console.log("inside");
    } else {
        console.log("outside");
    }
}


inRectangle(11);


