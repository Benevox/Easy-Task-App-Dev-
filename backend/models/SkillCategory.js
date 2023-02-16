const Joi = require('joi');
const mongoose = require('mongoose');

const skillCategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    },

},
    { timestamps: true },
);

const SkillCategory = mongoose.model('SkillCategory', skillCategorySchema);

function validateSkillCategory(cat) {
    const schema = Joi.object({
        name: Joi.string().min(1).max(50).required().label("SkillCategory"),
    });

    return schema.validate(cat);
};

module.exports = { SkillCategory, validateSkillCategory }