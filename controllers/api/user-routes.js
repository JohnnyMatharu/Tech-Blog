//All user routes are working

const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// get all users
router.get('/', (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
 
//HERE add router.get


router.get('/:id', (req, res) => {
  User.findOne({
    attributes: { exclude: ['password'] },
    where: {
      id: req.params.id
    }
    //include: [
    //  {
     //   model: Post,
     //   attributes: ['id', 'title']
     // },
     // {
      //  model: Comment,
      //  attributes: ['id', 'comment_text'],
     //   include: {
     //     model: Post,
    //      attributes: ['title']
    //    }
    //  }
   // ]
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


//  router.post('/:id', (req, res) => {
  //this route is to sign up
  //the above line is not used, only to check as sequelize will automatically use this route
router.post('/', (req, res) => {

  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
  User.create({
    username: req.body.username,
    password: req.body.password
  })
    .then(dbUserData => {
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);

    });
});

//this route is to login, post info and then match
router.post('/login', (req, res) => {
  // expects {email: 'lernantino@gmail.com', password: 'password1234'}
  console.log("Hello");
  User.findOne({
    where: {
     username: req.body.username
    
    }
  }).then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({ message: 'No user with that user name!' });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.save(() => {
      //save custom fields before res.json
      req.session.user_id = dbUserData.id 



    res.json({ user: dbUserData, message: 'You are now logged in!' });
  });
});
});

router.put('/:id', (req, res) => {
  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}

  // pass in req.body instead to only update what's passed through
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/logout", (req, res) => {
  req.session.destroy(() => {
      res.sendStatus(204);
  });
});



module.exports = router;