const express = require('express');
const router = new express.Router();
const User = require('../models/user');
const Task = require('../models/tasks');

router.post('/users', async(req, res) => {

    const user = new User(req.body);
    try {
        await user.save();
        res.send(user);
    } catch (e) {
        res.status(501).send(e)
    }
    // Fetching data using req.body
    // const user = new User(req.body);
    // user.save().then(() => {
    //     res.send(user)
    // }).catch(() => {
    //     console.log(error)
    // })
})

router.get('/users', (req, res) => {
    User.find({}).then((user) => {
        res.send(user)
    }).catch((error) => {
        res.status(500).send(error)
    })
})

router.get('/users/:id', (req, res) => {
    const _id = req.params.id;
    User.find({ _id }).then((user) => {
        if (!user) {
            return res.status(401).send("User Not Found");
        }
        res.send(user)
    }).catch(() => {
        res.status(501).send(error)
    })
})

router.patch('/users/:id', async(req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'email', 'password', 'age'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));


    if (!isValidOperation) {
        return res.send("Invalid Operations");
    }

    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (e) {
        res.status(400).send(e);
    }
})

router.get('/tasks', async(req, res) => {
    const tasks = await Task.find({})
    try {
        if (!tasks) {
            return res.send("Didn't find any");
        }
        res.status(201).send(tasks);
    } catch (e) {
        res.send(e);
    }
    // Task.find({}).then((task) => {
    //     res.send(task);
    // }).catch((e) => {
    //     res.status(401).send(e);
    // })
})

router.get('/tasks/:id', async(req, res) => {
    const _id = req.params.id;
    const task = await Task.findById(_id);
    try {
        if (!task) {
            return res.send("Task doesn't exist");
        }
        res.status(201).send(task);
    } catch (e) {
        res.send(e);
    }
    // const _id = req.params.id;
    // Task.findById(_id).then((task) => {
    //     res.send(task);
    // }).catch((e) => {
    //     res.status(501).send(e)
    // })
})


router.post('/tasks', async(req, res) => {
    const task = new Task(req.body);
    try {
        await task.save();
        res.send(task);
    } catch (e) {
        res.status(404).send(e);
    }
    // const task = new Task(req.body);
    // task.save().then(() => {
    //     res.send(task);
    // }).catch(() => {
    //     res.status(400).send(error);
    // })
})

router.delete('/users/:id', async(req, res) => {
    try {
        const deletedElement = await User.findByIdAndDelete(req.params.id);
        if (!deletedElement) {
            return res.status(404).send("User Not Found");
        }
        res.send(deletedElement);
    } catch (e) {
        res.send(e);
    }
})








module.exports = router;