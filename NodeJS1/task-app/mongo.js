const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const connectionurl = 'mongodb://127.0.0.1:27017';
const database = 'task'

MongoClient.connect(connectionurl, { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log("Not successfull")
    }
    const db = client.db(database);

    // db.collection('users').insertMany([{
    //             "name": "Sibin",
    //             "age": 20
    //         },
    //         {
    //             "name": "Sunil",
    //             "age": 20
    //         },
    //         {
    //             "name": "Rohit",
    //             "age": 21
    //         },
    //         {
    //             "name": "Raj",
    //             "age": 22
    //         }
    //     ], (error, response) => {
    //         if (error) {
    //             return console.log("Unable to insert");
    //         }
    //         console.log(response);
    //     })
    // db.collection('users').find({ "age": 20 }, (error, response) => {
    //         if (error) {
    //             return console.log(error);
    //         }
    //         console.log(response);
    //     })
    // console.log("Connnection successfull");
    // db.close();
    //     var a = { "age": 20 }
    //     var b = { $set: { "name": "Rohit1", "age": 50 } }
    //     db.collection('users').updateMany(a, b, (error, response) => {
    //         if (error) {
    //             return console.log("Unable to update");
    //         }
    //         console.log("Successfull updation")
    //     })
    // })
    db.collection('users').deleteMany({ "age": 50 }).then((res) => {
        console.log("Success")
    }).catch((err) => {
        console.log("Not Success")
    })
})