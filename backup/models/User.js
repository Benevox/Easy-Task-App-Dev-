const Joi = require('joi');
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
    },
    lastName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 2,
        maxlength: 100
    },
    dob: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength:255
    },
    profilePic: {
        type: String,
        default: "",
    },
    otp: {
        type: Number,
        default: ""
    },
    confCode: {
        type: Number,
        default: ""
    },
    // created_at: { type: Date, default: Date.now },
    // updated_at: { type: Date, default: Date.now },
    deletedAt: { type: Date, default: "" },

},
    { timestamps: true },
);

const User = mongoose.model('User', userSchema);

function validateUser(user) {
    const schema = Joi.object({
        firstName: Joi.string().min(2).max(50).required().label("First Name"),
        lastName: Joi.string().min(2).max(50).required().label("Last Name"),
        email: Joi.string().min(2).max(1000).required().label("Email"),
        dob: Joi.string().required().label("Date of Birth"),
        password: Joi.string().min(6).max(20).required().label("Password"),
        category: Joi.string().min(2).max(50).label("Type"),
        profilePic: Joi.string().label("Password"),
        otp:  Joi.number().label("OTP"),
        confCode: Joi.string().label("Confirmation Code"),
        userId: Joi.string(),

    });

    return schema.validate(user);
};

module.exports = { User, validateUser };
// exports.User = User;
// exports.validate = validateUser;