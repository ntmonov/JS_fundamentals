function print(arr) {
    let step = Number(arr.pop());
    for (let i = 0; i < arr.length; i+=step) {
        console.log(arr[i]);
    }
}

print(['dsa',
'asd',
'test',
'tset',
'2']);