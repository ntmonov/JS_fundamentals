function check(text, sub) {
    let index = text.lastIndexOf(sub);
    if (index + sub.length === text.length) {
        console.log("true");
    } else {
        console.log("false");
    }
}
check('This sentence ends with fun?', 'fun?');
