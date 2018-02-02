function findVariable(text) {
    let regex = /_([a-zA-Z0-9]+)/g;
    let match = regex.exec(text);
    let result = [];
    while (match) {
        result.push(match[1]);
        match = regex.exec(text);
    }
    console.log(result.join(","));
}

findVariable("The _id and _age variables are both integers.");