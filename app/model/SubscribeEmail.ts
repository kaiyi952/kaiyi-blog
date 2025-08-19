import { model, models, Schema } from "mongoose";

// SubscribeEmail Schema
const SubscribeEmailSchema = new Schema({
  email: { type: String, required: true },
});
SubscribeEmailSchema.index({ email: 1 }, { unique: true });

const SubscribeEmail = models.SubscribeEmail ?? model('SubscribeEmail', SubscribeEmailSchema);
export default SubscribeEmail;