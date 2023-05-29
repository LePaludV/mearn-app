import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
    location: String,
    descritpion: String,
    picturePath: String,
    userPicturePath: String,
    likes: { type: Map, of: Boolean },
    comments: {
      types: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', PostSchema);
export default Post;
