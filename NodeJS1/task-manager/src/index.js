// Importing express first by installing it
const express = require('express');

// Importing routes
const userRoutes = require('./router/users');

require('./db/mongoose');

// Importing all superpowers of User.js in index.js
require("./models/user")




// Declaring Port Number
const port = process.env.PORT || 3000;

// Creating an app for getting superpowers of express
const app = express();


// To get json response from Postman
app.use(express.json())

app.use(userRoutes);


// Getting data in postman


// const bcrypt = require('bcryptjs');

// const myFunction = async() => {
//     const password = "Sibin@123"
//     const hashedpassword = await bcrypt.hash(password, 8);

//     console.log(password);
//     console.log(hashedpassword);
//     const isMatch = await bcrypt.compare(password, hashedpassword);
//     console.log(isMatch);
// }

// myFunction();


// Calling app wrt port number
app.listen(port, () => {
    console.log("Server is running at" + port);
})