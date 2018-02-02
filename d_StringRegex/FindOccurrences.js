function find(text, word) {

    let pattern = "\\b" + word + "\\b";
    let regex = new RegExp(pattern, 'gi');
    let counter = 0;
    let match = regex.exec(text);
    while (match) {
        counter++;
        match = regex.exec(text);
    }
    console.log(counter);
}

find("The waterfall was so high, that the child couldn’t see its peak.","the");