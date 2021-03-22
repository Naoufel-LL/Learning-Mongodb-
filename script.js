const mongoose = require('mongoose');
const express =require('express');
const app = express();
const userRouter=require('./routes/user');
const blogRouter=require('./routes/blog');
app.use(express.json());
const port = process.env.PORT || 3000 ;
const url = 'mongodb+srv://admin:admin2021@naoufel.ktqy0.mongodb.net/users?retryWrites=true&w=majority'
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}).then(res =>console.log('Connected To MongoDb'));
app.get('/',(req,res)=>{
    res.send('Hello World')
 })
app.use('/users',userRouter);
app.use('/blogs',blogRouter);
app.listen(port,()=>console.log(`Listening on port ${port}`))