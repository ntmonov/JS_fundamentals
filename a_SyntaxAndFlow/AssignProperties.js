function createObject(arr) {
    let prop1 = arr[0];
    let value1 = arr[1];
    let prop2 = arr[2];
    let value2 = arr[3];
    let prop3 = arr[4];
    let value3 = arr[5];

    let object = {};
    object[prop1] = value1;
    object[prop2] = value2;
    object[prop3] = value3;

    return object;
}

console.log(createObject(['ssid', '90127461', 'status', 'admin', 'expires', '600']));