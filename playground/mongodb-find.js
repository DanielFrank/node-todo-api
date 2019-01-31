const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
    if (err) {
        return console.log("unable to connect to Mongodb server");
    }
    console.log("connected to mongodb server");
    
    const db = client.db('TodoApp');
    db.collection('Users').find({name: 'Daniel'}).toArray().then((docs)=>{
        console.log(`Users`);
        console.log(JSON.stringify(docs, undefined,2));
    }, (err)=>{
        console.log('Unable to fetch users', err);
    });
    //client.close();
});
