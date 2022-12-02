# 14-monster-blog

Set up the project. You’ll build off of the previous project by creating new GitHub issues and adding a style sheet.
Set up the template engine. You’ll install Handlebars and configure Express to use it as its template engine.
Create the homepage template. You’ll create a Handlebars template for the homepage, populated with dummy data.
Populate the template with Sequelize data. You’ll use a previously defined Sequelize query to populate the homepage with real data.
Create a login page. Both login and sign-up sections will display at once.
Add front-end logic to forms. We will add fetch requests to post to the server when a user logs in.
Create a session on the back end. We will keep track of users' sessions so that we can associate them with posts.
Add logic to destroy the session. The user will also be redirected upon logout.
Create a single post template. You’ll create a new Handlebars.js template to render a single post and all of its corresponding data.
Add upvote functionality. You’ll connect front-end and back-end logic to create a working upvote button.
Add comment functionality. You’ll connect front-end and back-end logic to create a working comment form.
Conditionally render the form elements. You’ll use Handlebars.js helpers to hide the form elements to users who aren’t logged in.
Conditionally render the login links. You’ll use Handlebars.js helpers to change the navigation links that a user sees based on their logged-in status.
Create a partial for post information. This will make the discussion around a post reusable.
Create a partial for comments. This will make the comment section reusable.
Write and fulfill test for date formats. All dates will follow the MM/DD/YYYY format.
Write and fulfill test for plural words. If there is one upvote or comment, then the word should be singular; otherwise, it should be plural.
Write and fulfill a test for URL formats. Long URLs should be shortened.
Add helper functions to Handlebar.js. We’ll need to tie all of the functions into the Handlebars.js engine.
Create the dashboard template. You’ll set up a basic Handlebars.js template and route for a new dashboard page.
Add data and logic to the dashboard. You’ll add Sequelize data and front-end JS logic to the dashboard page.
Protect routes with middleware. You’ll write a custom middleware function to restrict certain routes to only logged-in users.
Create an Edit Post page. You’ll create a dashboard template where users can edit and delete individual posts.

## User Story
```
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria
```
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

https://www.npmjs.com/package/express-handlebars
https://www.npmjs.com/package/mysql2
https://sequelize.org/docs/v6/getting-started/
https://www.npmjs.com/package/dotenv
https://www.npmjs.com/package/bcrypt
https://www.npmjs.com/package/express-session
https://www.npmjs.com/package/connect-session-sequelize

- installed express as a dependency (npm i express)
- fix your path for const helpers on line 5 in server.js. This is how it should look. const helpers = require('./utils/helper');
- in your index.js inside of controllers your homeRoutes require is off so it should be, const homeRoutes = require('./home-routes');
- you'll also need to require router inside of your index.js using, const router = require('express').Router();