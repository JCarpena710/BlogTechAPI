// comment
// author => user_id
import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  comments: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  user_id: String,
});

const commentModel = mongoose.model("comments", commentSchema);

export default commentModel;