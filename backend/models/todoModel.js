const { Types } = require('mongoose');
const { Schema, model } = require('../connection');
const todoSchema = new Schema({
    todo : String,
    createdBy:{type: Types.ObjectId,   ref: "users"},
})
module.exports = model('todos', todoSchema);