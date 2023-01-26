const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User, validateUser } = require('../models/User');

// REGISTER
router.post("/register", async (req, res) => {
    try {

        const { error } = validateUser(req.body);
        if(error) return res.status(400).send({ message: error.details[0].message });

        let user = await User.findOne({ email: req.body.email });
        if(user) return res.status(409).send({ message: "User With given email already exist! "});
        
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        user = await new User({  
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            dob: req.body.dob,
            category: req.body.category,
            password: hashPassword,
        }).save();
        
        res.status(200).json(user);
        // send({message: `User with the name ${req.body.firstName} ${req.body.lastName} has signed up successfully...`})
        
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

           res.status(200).json(others); 
        }        

    } catch (err) {
        res.status(500).json(err);        
    }
});


module.exports = router;