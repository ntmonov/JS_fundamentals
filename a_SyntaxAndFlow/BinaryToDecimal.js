function binToDec(num) {
    num = num.split("").reverse().join("");
    let number = 0;
    for (let i = 0; i < num.length; i++) {
        number += num[i] * Math.pow(2, i);
    }
    console.log(number);
}


binToDec("11110000");