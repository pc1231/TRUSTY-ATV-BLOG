import { Post } from '../models/post.js';

// Display the form to create a new post
function newPost(req, res) {
  res.render('posts/new');
}

// Handle the form submission to create a new post
async function create(req, res) {
  try {
    const post = new Post({
      title: req.body.title,
      content: req.body.content,
      author: req.user._id, // Assuming the user is signed in
    });
    await post.save();
    res.redirect(`/posts/${post._id}`);
  } catch (error) {
    console.log(error);
    res.redirect('/posts/new');
  }
}

export {
  newPost as new,
  create
};
