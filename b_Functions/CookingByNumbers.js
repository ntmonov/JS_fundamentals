function cooking(arr) {
    let num = Number(arr.shift());

    for (let op of arr) {
        switch (op) {
            case "chop":
                num = chop(num);
                console.log(num);
                break;
            case "dice":
                num = dice(num);
                console.log(num);
                break;
            case "spice":
                num = spice(num);
                console.log(num);
                break;
            case "bake":
                num = bake(num);
                console.log(num);
                break;
            case "fillet":
                num = fillet(num);                                       console.log(num);
                break;
        }
    }

    function chop(n) {
        return n / 2;
    }

    function dice(n) {
        return Math.sqrt(n);
    }

    function spice(n) {
        return n + 1;
    }

    function bake(n) {
        return n * 3;
    }

    function fillet(n) {
        return n -= 0.2 * n;
    }

}



cooking([32, 'chop', 'chop', 'chop','chop', 'chop']);