function arrayManipulator(commands) {
    let counter = 1;
    let arr = [];
    for (let command of commands) {
        if (command === "add") {
            arr.push(counter++);
        } else {
            arr.pop();
            counter++;
        }
    }
    console.log(arr.length === 0 ? "Empty" : arr.join("\n"));
}


arrayManipulator(['add','add','add','add']);