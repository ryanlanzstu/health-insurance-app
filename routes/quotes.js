var express = require('express');
var router = express.Router();

/* Import calculation module */
const insuranceCalculator = require('../modules/insuranceCalculator');

/* GET req for quote form */
router.get('/', (req, res, next) => {
    res.render('quoteForm', { title: 'Get your Health Insurance Quote' });
});

/* GET home page */
router.post('/', (req, res, next) => {
    //Get data
    const {age, q1, q2, q3, q4, q5} = req.body;
    //Convert answers
    const answers = {
        q1: q1 ==='yes',
        q2: parseInt(q2, 10),
        q3: q3 === 'yes',
        q4: parseInt(q4, 10),
        q5: q5 === 'yes',
    };

    //Calc quote
    const quote= insuranceCalculator.calculate(age, answers);

    //Render quote
    res.render('quotePrice', {title: 'Your Personalized Quote:', quote});
});

module.exports = router;

