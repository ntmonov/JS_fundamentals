function inchesToFeet(inches) {
    let feet = Math.floor(inches / 12);
    let inchesReminder = inches % 12;

    console.log(`${feet}'-${inchesReminder}"`);
}


inchesToFeet(11);