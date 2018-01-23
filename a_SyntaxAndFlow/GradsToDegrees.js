function gradsToDeg(grad) {
    grad = grad % 400;
    let deg = grad * 0.9;
    if (deg < 0) {
        deg = 360 + deg;
    }
    console.log(deg);
}



gradsToDeg(-50);