const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/userRouter');
const todoRouter = require('./routes/todoRouter');

//initializing express app
const app = express();
const port = 5000;

//middleware
app.use(express.json());
app.use(cors({
    origin: ['*','http://localhost:3000']
}));
app.use('/user', userRouter);
app.use('/todo', todoRouter);

app.get('/', (req,res)=>{
    res.send('REQUESTED / ');
})


app.listen(port, ()=>{
    console.log(`server started at ${port}`);
})