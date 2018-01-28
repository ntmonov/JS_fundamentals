function radar(driver) {

    let speed = driver[0];
    let area = driver[1];

    let overSpeed = speed - getAreaSpeed(area);

    let result = "";

    if (overSpeed > 0 && overSpeed <= 20) {
        result = "speeding";
    } else if (overSpeed > 20 && overSpeed <= 40) {
        result = "excessive speeding";
    } else if (overSpeed > 40) {
        result = "reckless driving";
    }

    console.log(result);


    function getAreaSpeed(area) {
        switch (area) {
            case "motorway":
                return 130;
            case "interstate":
                return 90;
            case "city":
                return 50;
            case "residential":
                return 20;
        }
    }
}


radar([200, 'motorway']);