//Calculates the insurance quote from user input

exports.calculate = (age, answer) => {
    let baseQuote = 100;

    //Adjust quote based on age
    if (age >= 18 && age <= 25) {
        baseQuote += 50;
    } else if (age > 25 && age <= 40) {
        baseQuote += 30;
    } else if (age > 40) {
        baseQuote += 70;
    }
}