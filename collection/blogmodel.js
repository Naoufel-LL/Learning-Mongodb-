const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    username: {
        type:String,
        required:true,
        minlength:5
    },
    blog:{
        type:String,
        required:true,
        minlength:5
    }
},{timestamps : true});
const Blog = mongoose.model('Blog',blogSchema);
module.exports = Blog;