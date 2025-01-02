import mongoose from "mongoose";
const { Schema, model } = mongoose;

const blogSchema = new Schema({
    title: String,
    content: String,
    description: String,
    tags: [String],
    createdAt: Date,
    updatedAt: Date
}, { timestamps: true });

const Blog = mongoose.models.Blog || model('Blog', blogSchema)

export default Blog;