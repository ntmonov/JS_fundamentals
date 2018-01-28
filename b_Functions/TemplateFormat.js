function printXML(arr) {

    let XML = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
    XML += "<quiz>\n";

    for (let i = 0; i < arr.length - 1; i+=2) {
        let question = arr[i];
        let answer = arr[i+1];
        XML += "  <question>\n";
        XML += "    " + question + "\n";
        XML += "  </question>\n";
        XML += "  <answer>\n";
        XML += "    " + answer + "\n";
        XML += "  </answer>\n";
    }

    XML += "</quiz>";


    console.log(XML);
}


printXML(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]);