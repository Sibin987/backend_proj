const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('User', {
    name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is Invalid!")
            }
        }
    },
    password: {
        type: String,
        trim: true,
        required: true,
        lowercase: true,
        minlength: 8,
        validate(value) {
            if (value.includes("password")) {
                throw new Error("Enter Valid Password")
            }
        },
    },
    age: {
        type: Number
    }
})

module.exports = User

// const User = mongoose.model({
//     name: {
//         type: String,
//         trim: true,
//         required: true,
//     },
//     email: {
//         type: String,
//         required: true,
//         validate(user) {
//             if (!validator.isEmail(user)) {
//                 throw new Error("Enter Correct Email ID")
//             }
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true,
//         validate(value) {
//             if (value.includes("password")) {
//                 throw new Error("Enter password without string password")
//             }
//         }
//     },
//     age: {
//         type: Number,
//         validate(value) {
//             if (value > 70) {
//                 throw new Error("Tu Buddha hai")
//             }
//         }
//     }
// })