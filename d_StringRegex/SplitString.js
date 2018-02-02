function splitString(str, del) {
    let tokens = str.split(del);
    for (let token of tokens) {
        console.log(token);
    }
}


splitString("One-Two-Three-Four-Five", "-");