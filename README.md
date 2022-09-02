# Introduction

A Simple ToDo App is built using the MVC Architecture, we have also implemented "authorization" so folx can sign up, customize & personalize the app

---

> Be sure to add that lovely star 😀 and fork it for your own copy

---

# Objectives

- It's a beginner level app created to understand how MVC concept and logins are added

---

# Who is this for?

- It's for beginners & intermediates with little more experience, to help understand the various aspects of building a node app with some complex features

---

# Packages/Dependencies used

bcrypt, connect-mongo, dotenv, ejs, express, express-flash, express-session, mongodb, mongoose, morgan, nodemon, passport, passport-local, validator

---

# Install all the dependencies or node packages used for development via Terminal

`npm install`

---

# Things to add

- Create a `.env` file and add the following as `key: value`
  - PORT: 2121 (can be any port example: 3000)
  - DB_STRING: `your database URI`
  ***

Have fun testing and improving it! 😎

## Aws notes:

### approach to a group:

1. create a group model (contains the users array)
2. add a groupId to the Todo model
3. populate users in the group so we could access user info when listing groups
4. create groups controller includes methods: getGroups, createGroup, showCreateGroup
5. create createGroup.ejs to handel create new group and get the group name
6. create groups.ejs view to list the groups list
7. when click on each group it take us to the group todos items
8. the groups filters by the user if he/she inside the group users array
9. each user can add a user to a specific group by adding their userId
10. user will now list all groups its id in the users array
