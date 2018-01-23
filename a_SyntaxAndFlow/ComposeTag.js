function composeTag(arr) {
    let location = arr[0];
    let alt = arr[1];

    console.log(`<img src="${location}" alt="${alt}">`);
}


composeTag(['smiley.gif', 'Smiley Face']);