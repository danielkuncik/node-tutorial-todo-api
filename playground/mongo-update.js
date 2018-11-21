const {MongoClient, ObjectID} = require('mongodb');

// callback function commands are error and db object
MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    } // return statement prevents the rest of the function from happening
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5bf185e2bfe5fb164895a1d1')
    }, {
        $set: {name: 'John Adams'}, $inc: {age: 1}
        }, {returnOriginal: false}
        ).then((result) => {
            console.log(result);
    });

    client.close();
});