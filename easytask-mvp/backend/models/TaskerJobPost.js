const Joi = require('joi');
const mongoose = require('mongoose');


const taskerServiceSchema = mongoose.Schema({
    taskerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    skillCategory: {
        type: Array,
        required: true,
        minLength:1,
        maxLenght: 50,
    },
    skillDescription: {
        type: String,
        required: true,
        minLength: 5,
    },
    image: {
        type: Array,
        required: false,
    },
    executionType: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
        minLength: 5,
        maxLenght: 255
    },
    workingTime: {
        type: Array,
        required: true,
    },
    taskerPresenceAvailability: {
        type: Boolean,
        required: true,
    },
    normalPrice: {
        type: Number,
        required: true,
    },
    standardPrice: {
        type: Number,
        required: true,
    },
    fullPrice: {
        type: Number,
        required: true,
    },
    deletedAt: { 
        type: Date, 
        default: "" 
    }

},
    { timestamps: true },
);

const TaskerJobPost = mongoose.model('TaskerJobPost', taskerServiceSchema);

function validateTaskerJobPost(taskerPost) {
    const schema = Joi.object({
        taskerId: Joi.string().required().label("Tasker Id"),
        skillCategory: Joi.array().min(1).max(50).required().label("Skill Description"),
        skillDescription: Joi.string().min(5).max(300).required().label("Skill Description"),
        image: Joi.array().label("Tasker Image(s)"),
        executionType: Joi.number().required().label("Execution Type"),
        location: Joi.string().min(5).max(255).required().label("Tasker Location"),
        workingTime: Joi.array().label("Working time"),
        taskerPresenceAvailability: Joi.boolean().required().label("Tasker Availability"),
        normalPrice: Joi.number().required().label("Normal Price"),
        standardPrice: Joi.number().required().label("Standard Price"),
        fullPrice: Joi.number().required().label("Full Price"),
        
    });

    return schema.validate(taskerPost);
}

module.exports = { TaskerJobPost, validateTaskerJobPost };