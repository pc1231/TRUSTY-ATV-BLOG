import { Post } from '../models/post.js';

async function index(req, res) {
  try {
    const posts = await Post.find({}).populate('author').exec();
    res.render('index', { posts });
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
}

export {
  index
};
