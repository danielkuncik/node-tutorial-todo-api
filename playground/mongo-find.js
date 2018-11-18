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



    /// to query by ID, must use object ID constructor, because the object ID is not a
    /// string it is an object ID object
    // db.collection('Todos').find({
    //     _id: new ObjectID('5bf17c2b60125c0549e998c8')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });


    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`)
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });



    /// insert new doc into users: name, age, location


   // client.close();
});


// in mongo db, do not need to officially 'create database'
// if you just give it a name and start using it, it counts