import mongoose from "mongoose";
import moment from "moment";

//Create Schema
const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, //필수 입력
    index: true,
  },
  contents: {
    type: String,
    required: true,
  },
  views: {
    type: Number,
    default: 0,
  },
  fileUrl: {
    type: String,
    default: "https://source.unsplash.com/random/301x201",
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
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
  creator: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
});

const Post = mongoose.model("post", PostSchema);

export default Post;
