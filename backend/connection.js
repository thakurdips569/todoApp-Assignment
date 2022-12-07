const mongoose = require('mongoose');
const db = 'todo_assignment';
const dbUrl = `mongodb+srv://deepthakur:dipanshu@cluster0.basdgob.mongodb.net/${db}?retryWrites=true&w=majority`

mongoose.connect(dbUrl)
.then((result) => {
    console.log('Database Connected');
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose;