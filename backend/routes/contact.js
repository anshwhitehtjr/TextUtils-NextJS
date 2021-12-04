//#region namespaces
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const JWT_SECRET = "AnShBaLaJiThAkUrIsAgOoDbOOY123123";
const Contact = require('../Models/Contact');
//#endregion

//#region Adding A Contact using POST "/api/contact/addcontact"
router.post('/addcontact', [
    body('name').isLength({ min: 4 }),
    body('email').isEmail(),
    body('desc').isLength({ min: 5 }),
], async (req, res) => {
    try
    {
        const { name, email, desc } = req.body;

        //#region Error handling
        const errors = validationResult(req);
        if (!errors.isEmpty())
        {
            return res.status(400).json({ error: error.array() });
        }
        //#endregion

        const contact = new Contact({
            name, email, desc
        });

        const savedContact = await contact.save();
        res.json(savedContact);

    } catch (error)
    {
        console.error(error.message);
        res.status(500).send("Internal Server Error Occurred");
    }
});

module.exports = router;