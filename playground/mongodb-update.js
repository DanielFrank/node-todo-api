const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
    if (err) {
        return console.log("unable to connect to Mongodb server");
    }
    console.log("connected to mongodb server");
    
    const db = client.db('TodoApp');
    
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5c51217d7a47d53d2d356977")
    }, {
        $set: {
            name: "Daniel"
        },
        $inc: {
            age: 1
        }
    },{
        returnOriginal: false
    }
    ).then((result)=>{
        console.log(result);
    });

    //client.close();
});
