function capitalize(text) {
    let tokens = text.split(" ");
    let result = [];
    for (let word of tokens) {
        result.push(word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
    }
    console.log(result.join(" "));
}


capitalize("Was that Easy? tRY thIs onE for SiZe!");