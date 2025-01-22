import { Schema, model, models } from 'mongoose';


// Blog Schema
const blogSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    tags: [String],
}, { timestamps: true });

const Blog = models.Blog || model('Blog', blogSchema);
export default Blog