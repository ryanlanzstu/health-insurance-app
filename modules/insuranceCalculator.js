// Calculates the insurance quote from user input
exports.calculate = (age, answers) => {
    let baseQuote = 100;

    // Adjust quote based on age
    if (age >= 18 && age <= 25) {
        baseQuote += 50;
    } else if (age > 25 && age <= 40) {
        baseQuote += 30;
    } else if (age > 40) {
        baseQuote += 70;
    }

    // Adjust quote based on answers to health questions

    // Do you smoke?
    if (answers.q1) baseQuote += 100;

    // How many days are you active?
    if (answers.q2 < 3) baseQuote += 50;
    else if (answers.q2 >= 3) baseQuote -= 30;

    // Any chronic diseases?
    if (answers.q3) baseQuote += 150; // Changed from == to +=

    // Do you drink?
    if (answers.q4 < 2) baseQuote += 50;
    else if (answers.q4 >= 5) baseQuote -= 20;

    // History of chronic illness?
    if (answers.q5) baseQuote += 100;

    return baseQuote;
};
