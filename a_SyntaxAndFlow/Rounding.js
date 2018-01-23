function rounding(arr) {
    let number = arr[0];
    let precision = arr[1];

    if (precision > 15) {
        precision = 15;
    }

    let multiplier = Math.pow(10, precision);

    let result = Math.round(number * multiplier) / multiplier;

    console.log(result);
}



rounding([10.5, 3]);