const Joi = require('joi');
const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    },

},
    { timestamps: true },
);

const Category = mongoose.model('Category', categorySchema);

function validateCategory(cat) {
    const schema = Joi.object({
        name: Joi.string().min(1).max(50).required().label("Category"),
    });

    return schema.validate(cat);
};

module.exports = { Category, validateCategory }