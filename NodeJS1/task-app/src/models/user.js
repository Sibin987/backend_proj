const mongoose = require('mongoose');
const validate = require('validator')

//model creation object bana kar
const User = mongoose.model('Sibin', {
    name: {
        type: String
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!(validate.isEmail(value))) {
                throw new Error("Invalid Email");
            }
        }
    },
    password: {
        type: String,
        trim: true,
        maxLength: 8,
        validate(value) {
            if (value == "password") {
                throw new Error("Change Password");
            }
        }
    },
    age: {
        type: Number,
        default: 0
    }
})

module.exports = User;