import Post from "../models/post.model.js";
import User from "../models/user.model.js";

export const getPosts = async (req, res) => {
  const posts = await Post.find();
  res.status(200).json(posts);
};

export const getPost = async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug });
  res.status(200).json(post);
};

export const createPost = async (req, res) => {
  const clerkUserId = req.auth.userId;


  if (!clerkUserId) {
    return res.status(401).json("Not authenticated");
  }

  const user = await User.findOne({ clerkUserId });
  if (!user) {
    return res.status(404).json("User not found");
  }

  let slug = req.body.title.replace(/ /g, "-").toLowerCase();
  
  
  let existingPost = await Post.findOne({ slug });
  console.log(existingPost);
  
  let counter = 2; 
  while (existingPost) {
    slug = `${slug}-${counter}`;
    existingPost = await Post.findOne({ slug });
    counter++;
  }
  console.log(slug);
  

  const newPost = new Post({ user: user._id, slug, ...req.body });
  
  const post = await newPost.save();
  
  res.status(200).json(post);
};

export const deletePost = async (req, res) => {
  const clerkUserId = req.auth.userId;

  if (!clerkUserId) {
    return res.status(401).json("Not authenticated");
  }
  const user = await User.findOne({ clerkUserId });
  if (!user) {
    return res.status(404).json("User not found");
  }

  const deletedPost = await Post.findOneAndDelete({
    id: req.params.id,
    user: user._id,
  });

  if (!deletePost) {
    return res.status(403).json("you can delete only your post");
  }

  res.status(200).json("post deleted successfully");
};
