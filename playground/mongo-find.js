const {MongoClient, ObjectID} = require('mongodb');

// callback function commands are error and db object
MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    } // return statement prevents the rest of the function from happening
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');



    db.collection('Users').find({location:'Massachusetts'}).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });





   // client.close();
});


// in mongo db, do not need to officially 'create database'
// if you just give it a name and start using it, it counts