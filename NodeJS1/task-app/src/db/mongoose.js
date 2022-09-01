const mongoose = require('mongoose');
//connect
mongoose.connect('mongodb://127.0.0.1:27017/nayadb1', {
    useNewUrlParser: true,
})

// object creation and then insertion of data into database
// const me = new User({
//     name: "Sibin",
//     email: "sibin@s.in",
//     password: "sibin"
// })

//saving the data
// me.save().then(() => {
//     console.log(me)
// }).catch((err) => {
//     console.log(err)
// })