import { model, models, Schema } from "mongoose";

// Tag Schema
const tagSchema = new Schema({
    name: { type: String, required: true },
});
tagSchema.index({ name: 1 }, { unique: true });

const BlogTag = models.BlogTag ?? model('BlogTag', tagSchema);
export default BlogTag;