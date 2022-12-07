const { Schema, model } = require('../connection');
const userSchema = new Schema({
    fullname: String,
    email: String,
    password: String,
    username: String
});
module.exports = model('users', userSchema);