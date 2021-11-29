const { Post } = require('../models');

const postdata = [
  {
    title: 'In hac habitasse platea dictumst.',
    post_content: 'http://edublogs.org/non/ligula/pellentesque.js',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_content: 'http://ucla.edu/consequat/nulla.html',
    user_id: 1
  },
  
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
