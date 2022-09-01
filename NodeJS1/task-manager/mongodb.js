// // const mongodb = require('mongodb');

// // const MongoClient = mongodb.MongoClient;

// const { MongoClient, ObjectID, ObjectId } = require('mongodb');

// const connectionURL = "mongodb://127.0.0.1:27017";

// const databaseName = "task-manager";

// const id = new ObjectID()

// MongoClient.connect(connectionURL, { useNewUrlParser: true }).then((response) => {
//     console.log(response)
// }).catch((error) => {
//     console.log(error)
// })

// // db.collection('tasks').deleteMany({
// //         description: "Hi"
// //     }).then((result) => {
// //         console.log(result)
// //     }).catch((error) => {
// //         console.log(error)
// //     })
// // db.collection('users').deleteMany({
// //     age: 19
// // }).then((response) => {
// //     console.log(response)
// // }).catch((error) => {
// //     console.log(error)
// // })

// // db.collection('tasks').updateMany({
// //     completed: false
// // }, {
// //     $set: {
// //         completed: true
// //     }
// // }).then((response) => {
// //     console.log(response)
// // }).catch((error) => {
// //     console.log("Invalid!")
// // })

// // db.collection('tasks').findOne({ _id: new ObjectID('61d506708efc0825eaf64587') }, (error, task) => {
// //     if (error) {
// //         return console.log(error)
// //     }
// //     console.log(task);
// // })

// // db.collection('tasks').find({ completed: true }).toArray((error, ans) => {
// //     if (error) {
// //         return console.log("Unable To Fetch")
// //     }
// //     console.log(ans);
// // })

// // db.collection('users').updateOne({ _id: new ObjectID('61d50bf7b8ee2314e02d3db2') }, {
// //     $set: {
// //         name: "Raj"
// //     }
// // }).then((result) => {
// //     console.log(result)
// // }).catch((error) => {
// //     console.log(error)
// // })

// // db.collection('users').findOne({ _id: new ObjectID('61d50bab975251a15c706a47') }, (error, user) => {
// //         if (error) {
// //             return console.log("Unable To Find");
// //         }
// //         console.log(user);
// //     })
// // db.collection('users').insertOne({
// //     _id: id,
// //     name: 'Vikram',
// //     age: 19
// // }, (error, result) => {
// //     if (error) {
// //         return console.log("Document Insertion Failed")
// //     }
// //     console.log(result.insertedId)
// // })

// // To insert document we run this statement

// // db.collection('tasks').insertMany([{
// //     description: 'Hello',
// //     completed: true
// // }, {
// //     description: "Hi",
// //     completed: true
// // }, {
// //     description: "Bye",
// //     completed: false
// // }], (error, result) => {
// //     if (error) {
// //         return console.log("Document Insertion Failed")
// //     }
// //     console.log(result.acknowledged);
// // })