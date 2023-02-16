const Joi = require('joi');
const mongoose = require('mongoose');


const customerJobSchema = mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    job: {
        type: String,
        required: true,
        minLength:1,
        maxLenght: 50,
    },
    description: {
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
    executionDate: {
        type: Date,
        required: true,
    },
    executionTime: {
        type: String,
        required: true,
    },
    taskerPresence: {
        type: Boolean,
        required: true,
    },
    taskerNumber: {
        type: Number,
        required: false,
        min: 0,
        max: 50,
    },
    budget: {
        type: Number,
        required: true,
    },
    survey: {
        type: Boolean,
        required: true,
        default: "0"
    },
    deletedAt: { 
        type: Date, 
        default: "" 
    },

},
    { timestamps: true },
);

const CustomerJobPost = mongoose.model('CustomerJobPost', customerJobSchema);

function validateCustomerJobPost(customerPost) {
    const schema = Joi.object({
        customerId: Joi.string().required().label("Customer Id"),
        job: Joi.string().min(1).max(50).required().label("Job"),
        description: Joi.string().min(5).max(300).required().label("Job Description"),
        image: Joi.array().label("Job Image(s)"),
        executionType: Joi.number().required().label("Where Job to be done"),
        location: Joi.string().min(5).max(255).required().label("Job Location"),
        executionDate: Joi.date().label("Job execution date"),
        executionTime: Joi.string().label("Job execution time"),
        taskerPresence: Joi.boolean().label("Tasker Presence"),
        taskerNumber: Joi.number().min(0).max(50).label("Tasker(s) number"),
        budget: Joi.number().required().label("Budget"),
        survey: Joi.boolean().label("Survey"),
    });

    return schema.validate(customerPost);
}

module.exports = { CustomerJobPost, validateCustomerJobPost };