//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);

/*
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
    if (err) {
        return console.log("unable to connect to Mongodb server");
    }
    console.log("connected to mongodb server");
    /*
    const db = client.db('TodoApp');
    db.collection('Todos').insertOne({
        text: 'Something to do',
         completed: false}, (err, result) => {
            if (err) {
                return console.log('unable to connect to insert todo', err);
            }
            console.log(JSON.stringify(result.ops,undefined,2));
    });

    const db = client.db('TodoApp');
    db.collection('Users').insertOne({
        name: 'Daniel',
        age: 46, location: 'here'}, (err, result) => {
           if (err) {
               return console.log('unable to connect to insert user', err);
           }
           console.log(result.ops[0]._id.getTimestamp());
   });

    client.close();
});
*/