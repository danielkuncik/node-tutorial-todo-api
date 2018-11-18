const MongoClient = require('mongodb').MongoClient;

// callback function commands are error and db object
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    } // return statement prevents the rest of the function from happening
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');


    db.collection('Users').insertOne({
        name: "John Adams",
        age: 283,
        location: "Massachusetts"
    }, (err, result) => {
        if (err) {
            return console.log('unable to insert user', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });



    client.close();
});


// in mongo db, do not need to officially 'create database'
// if you just give it a name and start using it, it counts