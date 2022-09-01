const mongoose = require('mongoose');

const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true
})

// const User = mongoose.model('User', {
//     name: {
//         type: String
//     },
//     email: {
//         type: String,
//         required: true,
//         validate(value) {
//             if (!validator.isEmail(value)) {
//                 throw new Error("Email is Invalid!")
//             }
//         }
//     },
//     password: {
//         type: String,
//         trim: true,
//         required: true,
//         lowercase: true,
//         minlength: 8,
//         validate(value) {
//             if (value.includes("password")) {
//                 throw new Error("Enter Valid Password")
//             }
//         },
//     },
//     age: {
//         type: Number
//     }
// })

// const data = new User({
//     name: 'Sibin',
//     age: 198,
//     email: 'sibin@gmail.com',
//     password: "passwor1"
// })


// data.save().then(() => {
//     console.log(data)
// }).catch((error) => {
//     console.log("Error!", error)
// })

// Creating a model declare all its datatypes and structure it in a better way it takes arguements as objects and stores it in the form of object
// const Task = mongoose.model('Task', {
//     description: {
//         type: String,
//         trim: true,
//         validate(value) {
//             if (value.length > 50) {
//                 throw new Error("This much length is not allowed")
//             }
//         }
//     },
//     completed: {
//         type: Boolean,
//         default: false,
//     }
// })

// Now We are creating instance and passing the values it needed 

// const task = new Task({
//     description: "Hello Ji kaise ho saare",
//     completed: true
// })

// // Now we will save it in the database

// task.save().then((response) => {
//     console.log("Congratulations", response)
// }).catch((error) => {
//     console.log("bhai dekh ke", error)
// })