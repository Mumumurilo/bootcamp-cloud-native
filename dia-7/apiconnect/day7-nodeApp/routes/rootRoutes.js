const router = require("express").Router();
const rootController = require('../controllers/rootController')

router.get('/', async function (req, res) {
    try {
        var returnMessage = await rootController.checkServer();
        res.status(200).send(returnMessage);
    }
    catch (err) {
        res.status(500).send('Internal Server Error');
    }

});

router.get('/students', async function (req, res) {
    try {
        res.status(200).send({
            firstName: "Bill",
            lastName: "Smith",
            studentId: 1
        });
    }
    catch (err) {
        res.status(500).send('Internal Server Error');
    }

});

router.get('/testers', async function (req, res) {
    try {
        if (!req.query.testerName || !req.query.testerId) {
            res.status(500).send({ message: "PLEASE SETUP YOUR PARAMETERS /testers?testerName=<studentName>&testerId=<studentId>" })
        }
        else {
            res.status(200).send({
                tester: req.query.testerName,
                testerId: req.query.testerId
            });
        }

    }
    catch (err) {
        res.status(500).send('Internal Server Error');
    }

});

router.post('/', async function (req, res) {
    try {
        var returnMessage = await rootController.checkServer();
        res.status(200).send("Received data: \n" + JSON.stringify(req.body));
    }
    catch (err) {
        res.status(500).send('Internal Server Error');
    }

});


module.exports = router;
