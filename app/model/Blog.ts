import { Schema, model, models } from 'mongoose';


const blogSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    tags: [{ type: String }],
    date: { type: Date, default: Date.now },
}, { timestamps: true });


const Blog = models.Blog || model('Blog', blogSchema);

export default Blog;
