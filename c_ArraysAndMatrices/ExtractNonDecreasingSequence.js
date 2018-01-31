function extract(arr) {
    let result =[arr[0]];
    let biggest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        if (current >= biggest) {
            biggest = current;
            result.push(current);
        }
    }

    console.log(result.join("\n"));
}

extract([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]);