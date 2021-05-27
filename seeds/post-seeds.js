const { Post } = require('../models');

const postdata = [
  {
    title: 'Blood needed',
    post_text: 'My name is Alphen and I am looking for blood group O for someone',
    user_id: 1
  },
  {
    title: 'I have a car',
    post_text: 'my car is 2014 Honda civic and only driven 50000 km, please leave comments if interested',
    user_id: 2
  },
  {
    title: 'I have an old scissor',
    post_text: 'I have an old 17th century historical scissor gifted by my great great grandfather, please comment',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;

