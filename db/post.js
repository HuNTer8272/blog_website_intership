import Post from '../model/post.js';

export const getPosts = async () => {
  const posts = await Post.find();
  return posts;
};

export const getPostById = async (id) => {
  const post = await Post.findById(id);
  return post;
};

export const createPost = async (post) => {
  const newPost = await Post.create(post);
  return newPost;
};

export const editPost = async (id, post) => {
  const updatedPost = await Post.findByIdAndUpdate(id, post, {
    new: true,
  });
  return updatedPost;
};

export const deletePost = async (id) => {
  const deletedPost = await Post.findByIdAndDelete(id);
  return deletedPost;
};
