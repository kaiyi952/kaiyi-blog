import { Model, model, models, Schema } from "mongoose";

// Tag Schema
const tagSchema = new Schema({
    name: { type: String, required: true },
});
tagSchema.index({ name: 1 }, { unique: true });

const Tag: Model<typeof tagSchema> = models.Tag ?? model('Tag', tagSchema);
export default Tag;