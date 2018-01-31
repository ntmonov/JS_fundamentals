function sortBy2(arr) {

    let sortFunction = (a,b) => {
        if (a.length === b.length) {
            return a > b;
        } else {
            return a.length - b.length;
        }
    };

    console.log(arr.sort(sortFunction).join("\n"));
}


sortBy2(['alpha',
    'beta',
    'gamma']);