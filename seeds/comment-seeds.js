const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Hi my name is Peter, and this is a first day of my journey with Get Help, I am ready to donate AB positive blood, if anyone needs immidiately call me 905-666-7998, respect***',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'Thanks for that, my mom is in emergency and she needs AB positive blood, I will contact you',
    user_id: 2,
    post_id: 1
  },
  {
    comment_text: 'Thas great, this website is extremely helpful',
    user_id: 3,
    post_id: 1
  }
];

//check if following needed 
const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;

//All these need to be tested to make sure this data needs not to align with single model structure
