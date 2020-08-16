import mongoose, { Schema } from 'mongoose';

// create a PostSchema with a title field
const PostSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  x: Number,
  y: Number,
  zIndex: Number,
  text: String,
  currState: Number,
  edit: Boolean,
  textStates: [String],
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  timestamps: true,
});
// create PostModel class from schema
const PostModel = mongoose.model('Post', PostSchema);

export default PostModel;
