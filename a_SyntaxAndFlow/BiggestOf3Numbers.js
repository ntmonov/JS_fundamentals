function biggest(arr) {

    let max = Number.MIN_SAFE_INTEGER;
    for (let num of arr) {
        if (num > max) {
            max = num;
        }
    }

    return max;
}


console.log(biggest([-10,-20,-30]));