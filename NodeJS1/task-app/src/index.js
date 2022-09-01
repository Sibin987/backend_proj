const express = require('express')
const app = express()
const port = process.env.port || 3000
require('./db/mongoose');
const User = require("./models/user");


app.use(express.json())

app.get("/users/:id", (req, res) => {
    const _id = req.params.id
    User.findById(_id).then((user) => {
        if (!user) {
            return res.send("No User")
        }
        res.send(user)
    }).catch((e) => {
        res.send(e);
    })
})

app.get("/users", (req, res) => {
    User.find({}).then((users) => {
        res.send(users)
    }).catch((e) => {
        res.send(e)
    })
})

app.patch('/users/:id', async(req, res) => {
    // const user = Object.keys(req.body);
    // const allowedUpdates = []
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body)
        if (!user) {
            return res.status(404).send("User doesn't exist")
        }
        res.send(user);
    } catch (e) {
        res.send(e);
    }
})
app.post('/users', (req, res) => {
    const user = new User(req.body);
    user.save().then(() => {
            res.send("Data saved successfully")
        }).catch((e) => {
            res.send(e)
        })
        // console.log(req.body)
        // res.send("testing");
})


app.listen(port, () => {
    console.log("server is running at port no " + port)
})