import { Schema, model, models } from 'mongoose';


// Blog Schema
const blogSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    tags: [String], // 使用 ObjectId 引用 Tag 表
    date: { type: Date, default: Date.now },
}, { timestamps: true });

const Blog = models.Blog || model('Blog', blogSchema);
export default Blog