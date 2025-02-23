import { Schema, model, models } from 'mongoose';
import slugify from 'slugify';

const blogSchema = new Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    tags: [String],
}, { timestamps: true });

blogSchema.pre("save", function (next) {
    if (!this.isModified("title")) return next()
    this.slug = slugify(this.title, { lower: true });
    next()
});

const Blog = models.Blog || model('Blog', blogSchema);
export default Blog