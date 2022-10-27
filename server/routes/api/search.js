import express from "express";
import Post from "../../models/post";

const router = express.Router();

router.get("/:searchTerm", async (req, res, next) => {
  try {
    const result = await Post.find({
      title: {
        $regex: req.params.searchTerm,
        $options: "i",
      },
    });
    console.log(result, "Search result");
    res.send(result);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

export default router;
