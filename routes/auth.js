const router = require("express").Router();
const _ = require('lodash');
const bcrypt = require("bcrypt");
const { User, validateUser } = require('../models/User');

// REGISTER
router.post("/register", async (req, res) => {
    try {

        const { error } = validateUser(req.body);
        if(error) return res.status(400).send({ message: error.details[0].message });

        let user = await User.findOne({ email: req.body.email });
        if(user) return res.status(409).send({ message: "User With given email already exist! "});
        
        

        user = new User(_.pick(req.body, ['firstName', 'lastName', 'email', 'dob', 'category', 'password']));
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        user.password = await bcrypt.hash(user.password, salt);

        await user.save();

        const token = user.generateAuthToken();
           
        res.status(200).header('x-auth-token', token).json(user); 

        
    } catch (err) {
        res.status(500).json(err);
    }
});



// LOGIN
router.post("/login", async (req, res) => {
    try {

        const user = await User.findOne({email: req.body.email});
        const validated = await bcrypt.compare(req.body.password, user.password);

        if ((!user || !validated) && res.status(400)) {
            res.status(400).json("Invalid Email or Password!");
        } 
        else {
            const { password, ...others} = user._doc;

            // config.get('jwtPrivateKey');
            const token = user.generateAuthToken();
           
            res.status(200).header('x-auth-token', token).json(others); 
            // json(others).
        }        

    } catch (err) {
        res.status(500).json(err);        
    }
});


module.exports = router;