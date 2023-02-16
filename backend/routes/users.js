const router = require('express').Router();
const { User, validateUser } = require('../models/User');
const { CustomerJobPost, validateCustomerJobPost } = require('../models/CustomerJobPost');
const { TaskerJobPost, validateTaskerJobPost } = require('../models/TaskerJobPost');
const bcrypt = require('bcrypt');

// GET ALL USER 
router.get("/", async (req, res) => {
    try {
        const user = await User.find();
        
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

// UPDATE
router.put("/:id", async (req, res) => {
    
        if (req.body.userId === req.params.id) {
            if (req.body.password) {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            }
            try {
                // const { error } = validateUser(req.body);
                // if(error) return res.status(400).send({ message: error.details[0].message });

                const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                }, { new: true });

                res.status(200).json(updatedUser);

            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("You can update only your account.");
        }
});

// DELETE
router.delete("/:id", async (req, res) => {
    
    if (req.body.userId === req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            try {
                await CustomerJobPost.deleteMany({ userId: user._id});
                await TaskerJobPost.deleteMany({ userId: user._id});
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("User is deleted successfully...");
            } catch (err) {
                res.status(500).json(err); 
            }  
        } catch (err) {
            res.status(404).json("User not found!");
        }
    } else {
        res.status(401).json("You can delete only your account.");
    }
});

// GET USER 
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { otp, confCode, password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;