const router = require('express').Router();
const { Category, validateCategory } = require('../models/Category');

// GET ALL CATEGORIES
router.get("/", async (req, res) => {
    try {
        const category = await Category.find();
        
        res.status(200).json(category);
    } catch (err) {
        res.status(500).json(err);
    }
});


// CREATE CATEGORY
router.post("/", async (req, res) => {
    const { error } = validateCategory(req.body);
    if(error) return res.status(400).send({ message: error.details[0].message });

    const newCat= new Category({ ...req.body });
    try {
        const saveCat= await newCat.save();
        res.status(200).json(saveCat);
    } catch (err) {
        res.status(500).json(err);
    }
});


// UPDATE CATEGORY
router.put("/:id", async (req, res) => {
            try {
                const category = await Category.findById(req.params.id);
                    
                try {
                    const { error } = validateCategory(req.body);
                    if(error) return res.status(400).send({ message: error.details[0].message });

                    const updateCategory = await Category.findByIdAndUpdate(
                        req.params.id,
                        {
                            $set: req.body,
                        },
                        { new: true }
                    );
                    res.status(200).json(updateCategory);
                } catch (err) {
                    res.status(500).json(err);
                }
            } catch (err) {
                res.status(500).json(err);
            }
});

// DELETE CATEGORY
router.delete("/:id", async (req, res) => {
    try {
        
        let category;   
        try {
            category = await Category.findByIdAndRemove(req.params.id);

            res.status(200).json("Job post has been deleted...");
        } catch (err) {
            res.status(500).json(err);
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET ALL CATEGORY BY ID
router.get("/:id", async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);

        res.status(200).json(category);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET CATEGORY
router.get("/", async (req, res) => {
    const customerId = req.query.userQuery;
    const catName = req.query.cat;
    try {
        let category;
        if (customerId) {
            category = await Category.find({ customerId: customerId });
        } else {
            category = await Category.find();
        }
        res.status(200).json(category);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;