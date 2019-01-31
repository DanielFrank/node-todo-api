const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
    if (err) {
        return console.log("unable to connect to Mongodb server");
    }
    console.log("connected to mongodb server");
    
    const db = client.db('TodoApp');
    //db.collection('Users').deleteMany({name: 'Daniel'});
    
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("5c4ff264efbcc43805128b3a")
    }).then((result)=>{
        console.log(JSON.stringify(result,undefined,2));
    });

    //client.close();
});
