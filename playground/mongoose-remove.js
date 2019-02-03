const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/*
Todo.remove({}).then((result) => {
    console.log(result);
});
*/
Todo.findByIdAndRemove('5c56a3639e6bc2636970bc7d').then((todo) => {
    console.log(todo);
});
