
//user needs to be logged in to access this, reminder
const router = require('express').Router();
const sequelize = require('../connection');
const {Comment,Post} = require('../models');
const withAuth = require('../utils/auth');

// get all posts for dashboard
router.get("/post/:id", withAuth, (req, res) => {
// Grab the post via its primary key, including data from the user that created
    // the post, as well as the comment(s) that are attached to the post.
  console.log(req.session, "session is now on, you are logged in");
  console.log('======================');
  
  Post.findByPk(req.params.id, {
    attributes: [
      'id',
      'title',
      'post_text',
      'createdAt'
    ],    
    include:
     [
      {
          //check the need of user_id
        model: Comment,
        attributes: ['id', 'comment_text', 'user_id', 'createdAt'],
        model: post,
        attributes: ['id', 'post_text', 'user_id', 'createdAt'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
// If postData exists...
        //   (1) Grab the post via `postData.get({ plain: true })`
        //   (2) Render the single post via Handlebars

        // If postData does not exist..
        //   (1) Send a 500 Internal Server Error to the client

        //following to be checked for postData or just post as said by James
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('create-comment', { posts, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;


