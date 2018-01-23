function distance(arr) {
    let v1 = arr[0];
    let v2 = arr[1];
    let time = arr[2];

    v1 = (v1 * 1000) / 3600;
    v2 = (v2 * 1000) / 3600;

    let s1 = v1 * time;
    let s2 = v2 * time;

    let distance = Math.abs(s1 - s2);

    console.log(distance);
}

distance([0, 60, 3600]);