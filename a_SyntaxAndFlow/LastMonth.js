function lastMonth(arr) {
    let year = arr[2];
    let month = arr[1];

    let date = new Date(year, month - 1, 0);

    return date.getDate();
}

console.log(lastMonth([13, 12, 2004]));