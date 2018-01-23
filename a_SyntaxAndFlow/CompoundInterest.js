function compoundInterest(arr) {
    let sum = arr[0];
    let interest = arr[1] / 100;
    let frequency = 12 / arr[2];
    let time = arr[3];

    let total = sum * (Math.pow(1 + (interest / frequency), frequency * time));

    console.log(Math.round(total * 100) / 100);
}



compoundInterest([1500, 4.3, 3, 6]);