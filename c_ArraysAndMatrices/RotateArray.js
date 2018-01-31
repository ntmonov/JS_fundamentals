function rotate(arr) {
    let step = arr.pop();
    step = step % arr.length;
    for (let i = 0; i < step; i++) {
        let last = arr.pop();
        arr.unshift(last);
    }

    console.log(arr.join(" "));
}

rotate(['1',
    '2',
    '3',
    '4',
    '2']);
