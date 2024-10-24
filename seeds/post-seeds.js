const { Post } = require('../models');

const postData = [
  {
    title: 'First Post',
    content: 'This is the first post content!',
    user_id: 1,
  },
  {
    title: 'Second Post',
    content: 'Here comes the second post!',
    user_id: 2,
  },
];

const seedPosts = async () => {
  await Post.bulkCreate(postData);
};

module.exports = seedPosts;
