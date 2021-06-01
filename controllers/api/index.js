//Also installed express.js, MySQL is sourced and database is accessible, server is listening at http://localhost:3001
//db files have been seeded, next check routes
//current
const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;



















//tutor: github readme for session
//https://github.com/expressjs/session
//session add time and use console.log for data output instead of
//insomnia


//Erik
//Session is only for login and log out authentication, controlled through server.js, 
//has nothing to do with username, that is through post route including user model to get user name. 
//Bcrypt will save the data in the seeds folder database under user, it will be hashed form, bycrypt is 
//used in user.js model used to help logging in and using user route its passed in the database. 
//Hooks are being used for Bcrypt run before creating a model and once before starting. 
//Firebase is better than bcrypt.   





//check lesson code chapter by chapter next step (previous if needed), current 14.1 

//Home page to see summary of blogs and leave comment, dashboard to create new post and update a post, anywhere pressed 
//go to login, can opt sign up, once logged can in see data with only logout button, first user will see homepage

//CMS-style blog site, developers can publish their blog posts and comment on other developers’, 
//deploy it to Heroku. Your app will follow the MVC paradigm in its architectural structure, 
//using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package 

/*
Acceptance criteria:

WHEN I click on an existing blog post 
option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, 
and the date created

WHEN I click on the logout option in the navigation
THEN I am signed out of the site
*/

//installed handlebars, mysql2, sequelize, npm installed, npm init, express.js, dotenv, bcrypt, express-session, connect-session-sequelize
//Application must be deployed to Heroku
//Repository contains quality README file with description, screenshot, and link to deployed application.

/*
How to Submit the Challenge
You are required to submit BOTH of the following for review:

The URL of the functional, deployed application.

The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.
*/
