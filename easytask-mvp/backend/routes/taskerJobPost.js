const router = require('express').Router();
const { TaskerJobPost, validateTaskerJobPost } = require('../models/TaskerJobPost');

// GET ALL TASKER SERVICE POST
router.get("/", async (req, res) => {
    try {
        const jobPost = await TaskerJobPost.find();
        
        res.status(200).json(jobPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

// CREATE TASKER SERVICE POST
router.post("/", async (req, res) => {
    const { error } = validateTaskerJobPost(req.body);
    if(error) return res.status(400).send({ message: error.details[0].message });

    const newTask = new TaskerJobPost({ ...req.body });
    try {
        const saveTask = await newTask.save();
        res.status(200).json(saveTask);
    } catch (err) {
        res.status(500).json(err);
    }
});


// UPDATE TASKER SERVICE POST
router.put("/:id", async (req, res) => {
            try {
                const jobPost = await TaskerJobPost.findById(req.params.id);
                    
                if (jobPost.taskerId == req.body.taskerId) {
                    try {
                        const { error } = validateTaskerJobPost(req.body);
                        if(error) return res.status(400).send({ message: error.details[0].message });

                        const updateJobPost = await TaskerJobPost.findByIdAndUpdate(
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

// DELETE TASKER SERVICE POST
router.delete("/:id", async (req, res) => {
    try {
        
        const jobPost = await TaskerJobPost.findById(req.params.id);            
        if (jobPost.taskerId == req.body.taskerId) {
            try {
                await jobPost.delete();

                res.status(200).json("Task is deleted successfully...");
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

// GET ALL TASKER SERVICE POST BY ID
router.get("/:id", async (req, res) => {
    try {
        const jobPost = await TaskerJobPost.findById(req.params.id);

        res.status(200).json(jobPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET TASKER SERVICE POST
router.get("/", async (req, res) => {
    const taskerId = req.query.userQuery;
    const catName = req.query.cat;
    try {
        let jobPost;
        if (taskerId) {
            jobPost = await TaskerJobPost.find({ taskerId: taskerId });
        } else {
            jobPost = await TaskerJobPost.find();
        }
        res.status(200).json(jobPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;