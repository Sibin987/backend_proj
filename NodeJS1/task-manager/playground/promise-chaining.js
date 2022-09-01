require('../src/db/mongoose');
const { findByIdAndUpdate, findByIdAndDelete } = require('../src/models/user');
const User = require("../src/models/user");
const Task = require("../src/models/tasks");

// User.findByIdAndUpdate('61d941c070d9f14d7a5e0000', { age: 13 }).then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 13 })
// }).then((count) => {
//     console.log(count);
// }).catch((e) => {
//     console.log(e);
// })

// const updateAgeAndCount = async(id, age) => {
//     const user = await User.findByIdAndUpdate(id, { age });
//     const count = await User.countDocuments({ age });
//     return count;
// }

// updateAgeAndCount('61d941c070d9f14d7a5e0000', 2).then((result) => {
//     console.log("Count is :" + result);
// }).catch((e) => {
//     console.log(e);
// })

// 61d94532a628a92b1df5a162

const deleteTaskAndCount = async(id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ 'completed': true })
    return count;
}

deleteTaskAndCount('61d94532a628a92b1df5a162').then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e);
})