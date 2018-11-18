const {MongoClient, ObjectID} = require('mongodb');

// callback function commands are error and db object
MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    } // return statement prevents the rest of the function from happening
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('Users').deleteMany({name: 'John Adams'}).then(() => {});
    db.collection('Users').findOneAndDelete({_id: new ObjectID("5bf1859e4d1134163d805273")}).then(() => {});

    // delete many
    // db.collection('Todos').deleteMany({text:'eat lunch'}).then((result) => {
    //     console.log(result);
    // });
    //
    // // delete one
    // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
    //     console.log(result);
    // });


    // // find one and delete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    /*
    db.collection('Users').insertOne({
        name: "John Adams",
        age: 283,
        location: "Massachusetts"
    }, (err, result) => {
        if (err) {
            return console.log('unable to delete', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    */

    client.close();
});