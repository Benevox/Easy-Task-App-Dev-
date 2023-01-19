const router = require('express').Router();
const { SkillCategory, validateSkillCategory } = require('../models/SkillCategory');

// GET ALL CATEGORIES
router.get("/", async (req, res) => {
    try {
        const category = await SkillCategory.find();
        
        res.status(200).json(category);
    } catch (err) {
        res.status(500).json(err);
    }
});

// CREATE CATEGORY
router.post("/", async (req, res) => {
    const { error } = validateSkillCategory(req.body);
    if(error) return res.status(400).send({ message: error.details[0].message });

    const newCat = new SkillCategory({...req.body});

    try {
        const saveCat = await newCat.save();
        res.status(200).json(saveCat);
    } catch (err) {
        res.status(500).json(err);
    }
});


// UPDATE SKILL CATEGORY
router.put("/:id", async (req, res) => {
            try {
                const category = await SkillCategory.findById(req.params.id);
                    
                try {
                    const { error } = validateSkillCategory(req.body);
                    if(error) return res.status(400).send({ message: error.details[0].message });

                    const updateSkillCategory = await SkillCategory.findByIdAndUpdate(
                        req.params.id,
                        {
                            $set: req.body,
                        },
                        { new: true }
                    );
                    res.status(200).json(updateSkillCategory);
                } catch (err) {
                    res.status(500).json(err);
                }
            } catch (err) {
                res.status(500).json(err);
            }
});

// DELETE SKILL CATEGORY
router.delete("/:id", async (req, res) => {
    try {
        
        let category;   
        try {
            category = await SkillCategory.findByIdAndRemove(req.params.id);

            res.status(200).json("Skill category is deleted successfully...");
        } catch (err) {
            res.status(500).json(err);
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET ALL SKILL CATEGORY BY ID
router.get("/:id", async (req, res) => {
    try {
        const category = await SkillCategory.findById(req.params.id);

        res.status(200).json(category);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET SKILL CATEGORY
router.get("/", async (req, res) => {
    const customerId = req.query.userQuery;
    const catName = req.query.cat;
    try {
        let category;
        if (customerId) {
            category = await SkillCategory.find({ customerId: customerId });
        } else {
            category = await SkillCategory.find();
        }
        res.status(200).json(category);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;