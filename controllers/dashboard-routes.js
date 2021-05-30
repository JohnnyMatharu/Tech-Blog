//this page will work with authorizaton through sessions for logged in 
//edit-post and dashboard data is passed here to re render
//this route is to be checked through front end 
//this route has not been checked, and connected to login and sequelize 


const router = require('express').Router();
const sequelize = require('../connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// get all posts for dashboard
router.get('/', withAuth, (req, res) => {
  console.log(req.session, "session is now on, you are logged in");
  console.log('======================');
  Post.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'title',
    ],
    include: [
      {
          //check the need of user_id
        model: Comment,
        attributes: ['id', 'comment_text', 'user_id'],
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
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('dashboard', { posts, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//this portion needs to be checked for its operations and attached handlebar

router.get('/edit/:id', withAuth, (req, res) => {
  //looking by primary key, only get request, data they want to edit on front end
  Post.findByPk(req.params.id, {
    attributes: [
      'id',
      'title'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'user_id'],
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
      if (dbPostData) {
        const post = dbPostData.get({ plain: true });
        
        res.render('edit-post', {
          post,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
