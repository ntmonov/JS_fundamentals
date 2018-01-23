function solveQuadraticEquation(a, b, c) {

    let discr = (b * b) - (4 * a * c);

    if (discr > 0) {
        let x1 = (-b - Math.sqrt(discr)) / (2 * a);
        let x2 = (-b + Math.sqrt(discr)) / (2 * a);
        console.log(x1);
        console.log(x2);
    } else if (discr === 0) {
        let x = -b / (2 * a);
        console.log(x);
    } else {
        console.log("No");
    }
}


solveQuadraticEquation(5, 2, 1);