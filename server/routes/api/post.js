import express from "express";

// Model
import Post from "../../models/post";
import auth from "../../middleware/auth";
import Category from "../../models/category";
import User from "../../models/user";

const router = express.Router();

// api/post
router.get("/", async (req, res) => {
  const postFindResult = await Post.find();
  console.log(postFindResult, "All Post Get");
  res.json(postFindResult);
});

router.post("/", auth, async (req, res, next) => {
  try {
    console.log(req, "req");
    const { title, contents, fileUrl, creator, category } = req.body;
    const newPost = await Post.create({
      title,
      contents,
      fileUrl,
      creator,
      date: moment().format("YYYY-MM-DD hh:mm:ss")
    });
    
    const findResult = await Category.findOne({
      categoryName: category
    })

    if(isNullOrUndefined(findResult)) {
      const newCategory = await Category.create({
        categoryName: category
      })
      await Post.findByIdAndUpdate(newPost._id, {
        $push: {category: newCategory._id}
      })
      await Category.findByIdAndUpdate(newCategory._id, {
        $push: {posts: newPost._id}
      })

      await User.findByIdAndUpdate(req.user.id, {
        $push: {
          posts: newPost._id
        }
      })
    } else {
      await Category.findByIdAndUpdate(findResult._id, {
        $push: {poss: newPost._id}
      })
      await Post.findByIdAndUpdate(newPost._id, {
        category: findResult._id
      })
      await User.findByIdAndUpdate(req.user.id, {
        $push: {
          posts: newPost._id
        }
      })
    }
    return res.redirect('/api/post/${newPost._id');
  } catch (e) {
    console.log(e);
  }
});

export default router;
