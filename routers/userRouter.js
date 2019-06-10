//imports
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const db = require("../data/helpers/user-model.js"); 

router.get("/", async (req, res) => {
    try {
        const users = await db.find();
        if (users) {
            res.status(200).json(users);
        }
    } catch (error) {
        res.status(500).json({ message: `Users could not be found ${error}.`});
    }
});

router.get("/:id", async (req, res) => {
    const { id } = req.params; //route params - id: '1', id:'2'....
    console.log(req.params);
    try {
        const user = await db.findById(id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "User with specified ID does not exist." });
        }
    } catch (error) {
        res.status(500).json({ message: `User request failed ${error}.` });
    }
});

router.post("/", async (req, res) => {
    let { username, password } = req.body; //user credentials
    console.log(req.body);

    if (!username || !password) {
        res.status(401).json({ message: "Please enter valid credentials." });
    } else {
        const hash = bcrypt.hashSync(password, 10); // 2^10 rounds - will generate our hash
        password = hash //overriding the pw from the user with the hash
        try {
            const newUser = await db.create({ username, password });
            if (newUser) {
                res.status(201).json(newUser);
            }
        } catch (error) {
            res.status(500).json({ message: `Your user could not be created ${error}.` });
        }
    }

});


module.exports = router;