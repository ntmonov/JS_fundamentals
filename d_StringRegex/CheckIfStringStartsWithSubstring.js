function check(text, sub) {
    let index = text.indexOf(sub);
    if (index === 0) {
        console.log("true");
    } else {
        console.log("false");
    }
}

check('The quick brown fox…', 'The quick brown fox…');