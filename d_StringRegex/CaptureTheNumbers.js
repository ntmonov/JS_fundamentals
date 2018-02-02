function numbers(arr) {
    let result = [];
    let regex = /\d+/g;
    let text = "";
    for (let sentence of arr) {
        text += sentence;
    }

    let match = regex.exec(text);
    while (match) {
        result.push(match[0]);
        match = regex.exec(text);
    }

    console.log(result.join(" "));
}


numbers(["The300",
"Wh is that?",
   "I think it’s the 3rd movie.",
    "Lets watch it at 22:45"]);