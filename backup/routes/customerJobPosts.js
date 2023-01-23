const router = require('express').Router();
const { CustomerJobPost, validateCustomerJobPost } = require('../models/CustomerJobPost');

// GET ALL CUSTOMER JOB POST
router.get("/", async (req, res) => {
    try {
        const jobPost = await CustomerJobPost.find();
        
        res.status(200).json(jobPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

// CREATE CUSTOMER JOB POST
router.post("/createpost", async (req, res) => {
    const { error } = validateCustomerJobPost(req.body);
    if(error) return res.status(400).send({ message: error.details[0].message });

    const newJob = new CustomerJobPost({ ...req.body });
    try {
        const savePost = await newJob.save();
        res.status(200).json(savePost);
    } catch (err) {
        res.status(500).json(err);
    }
});


// UPDATE CUSTOMER JOB POST
router.put("/:id", async (req, res) => {
            try {
                const jobPost = await CustomerJobPost.findById(req.params.id);
                    
                if (jobPost.customerId == req.body.customerId) {
                    try {
                        const { error } = validateCustomerJobPost(req.body);
                        if(error) return res.status(400).send({ message: error.details[0].message });

                        const updateJobPost = await CustomerJobPost.findByIdAndUpdate(
                            req.params.id,
                            {
                                $set: req.body,
                            },
                            { new: true }
                        );
                        res.status(200).json(updateJobPost);
                    } catch (err) {
                        res.status(500).json(err);
                    }
                } else {
                    res.status(401).json("You can update only your post!");
                }
            } catch (err) {
                res.status(500).json(err);
            }
});

// DELETE CUSTOMER JOB POST
router.delete("/:id", async (req, res) => {
    try {
        
        const jobPost = await CustomerJobPost.findById(req.params.id);            
        if (jobPost.customerId == req.body.customerId) {
            try {
                await jobPost.delete();

                res.status(200).json("Job post is deleted successfully...");
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("You can delete only your post!");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET ALL CUSTOMER JOB POST BY ID
router.get("/:id", async (req, res) => {
    try {
        const jobPost = await CustomerJobPost.findById(req.params.id);

        res.status(200).json(jobPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET CUSTOMER JOB POST
router.get("/", async (req, res) => {
    const customerId = req.query.userQuery;
    const catName = req.query.cat;
    try {
        let jobPost;
        if (customerId) {
            jobPost = await CustomerJobPost.find({ customerId: customerId });
        } else {
            jobPost = await CustomerJobPost.find();
        }
        res.status(200).json(jobPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;