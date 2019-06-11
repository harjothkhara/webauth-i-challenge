//imports
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const db = require("../data/helpers/user-model.js");


router.post("/", async (req, res) => {
    const { username, password } = req.body; //user credentials
    // console.log(req.body);
    if (!username || !password) {
        res.status(401).json({ message: "Please enter valid credentials." });
    } else {
        try {
            const user = await db.findByUser(username);
            if (user && bcrypt.compareSync(password, user.password)) {
                res.status(201).json({ message:`Welcome ${username}!`});
            } else {
                res.status(401).json({ message: "Invalid credentials - You shall not pass!" });
            }
        } catch (error) {
            res.status(500).json({ message: `Your user could not be created ${error}.` });
        }
    }

});


module.exports = router;