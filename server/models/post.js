import mongoose from "mongoose";
import moment from "moment";

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  contents: {
    type: String,
    required: true,
  },
  views: {
    type: Number,
  },
  fileUrl: {
    type: String,
    default: "https://source.unsplash.com/random/301x201",
  },
  date: {
    type: String,
    default: moment().format("YYYY-MM-DD hh:mm:ss"),
  },
  
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comment",
    },
  ],
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const Post = mongoose.model("post", PostSchema);

export default Post;
