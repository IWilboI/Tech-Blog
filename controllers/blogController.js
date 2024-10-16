const { BlogPost, Comment } = require('../models');

module.exports = {
  async getHomepage(req, res) {
    const posts = await BlogPost.findAll();
    res.render('homepage', { posts });
  },

  async getDashboard(req, res) {
    const userPosts = await BlogPost.findAll({ where: { userId: req.session.userId } });
    res.render('dashboard', { posts: userPosts });
  },

  async createPost(req, res) {
    const { title, content } = req.body;
    await BlogPost.create({ title, content, userId: req.session.userId });
    res.redirect('/dashboard');
  },

  async getPost(req, res) {
    const post = await BlogPost.findByPk(req.params.id);
    const comments = await Comment.findAll({ where: { blogPostId: post.id } });
    res.render('post', { post, comments });
  },

  async addComment(req, res) {
    const { content } = req.body;
    await Comment.create({ content, userId: req.session.userId, blogPostId: req.params.id });
    res.redirect(`/post/${req.params.id}`);
  },
};
