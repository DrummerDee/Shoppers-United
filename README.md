<h1 align="center">Shoppers United</h1>

<div align ="center"> 

![Screen Shot 2022-09-06 at 5 50 30 PM](https://user-images.githubusercontent.com/101071525/188747585-3403e90f-9d7d-4c84-a601-e8bbd0c6fcf3.png)


A simple web application that syncs with multiple devices and allows users to easily create lists on a single platform. Go ahead and create your shopping list! 
 
## Overview
This app illustrates how to build an app with sign-in functionality using Express, Passport, and the [`passport-local`](https://www.passportjs.org/packages/passport-local/) strategy.

## Get Started
</div>
<div>
 
## Table of Contents 

1. Built With 
2. What was learned 
3. Optimizations
4. Node Dependencies
5. Prerequisities
6. Run This App
</div>


<h3>Built With </h3>

<li>JavaScript
<li>HTML </li>
<li>CSS </li>
<li>Node.js </li>
<li>MongoDB </li>
<li>Mongoose </li>
<li>Express </li>
<li>Passport.js </li>

<h3>What Was Learned </h3>

This app is a traditional web application, in which application logic and data persistence resides on the server. HTML pages and forms are rendered by the server and client-side JavaScript is kept to a minimum. HTML pages are rendered using EJS templates, and are styled using vanilla CSS.

When a user first arrives at this app, they are prompted to sign in. Once authenticated, a login session is established and maintained between the server and the user's browser.

After signing in, the user can view, create, and edit list items. Interaction occurs by clicking links and submitting forms, which trigger HTTP requests. 

<h3>Optimizations </h3>
<ul>
 <li>Users are able to updated their passwords </li>
 <li> Users are able to reser their passwords with forgot password feature </li>
 <li> Extra security measures by locking account if password or email is entered incorrectly multiple times </li>
 <li> User setting page, where users can change everything about their profile in this page </li>
 <li> Mobile friendly </li>
 <li> Push Notifications </li>
  <li> Study [WebPush Notifications](https://itnext.io/an-introduction-to-web-push-notifications-a701783917ce) to add notification functionality to app. </li>
  <li> Consider using [Pusher Beams](https://pusher.com/beams), a  cross-platform push notifications API designed to deliver critical transactional information in realtime, without complex integrations and maintenance </li>
 <li> Toggle Display Theme </li>
  <li> Create a button in app's `General Settings` that allow users to toggle between light and dark mode on a click/tap. Libraries that can be used are [Fontawesome](https://fontawesome.com/) and [Bootstrap](https://getbootstrap.com/). </li>
  <li> Improve user experience and facilitate inclusivity by following [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/). (e.g. color blindness, dyslexia, etc.)  </li>


## Node dependecies 
 
* Express
* Cors
* Passport
* Validator
* Mongoose

 <h2> Prerequistes </h2>

<h3> Install Node.js</h3>

[Steps to install node](https://nodejs.org/en/) 

<h3> Connecting Mongo Database </h3>

[SIte for MongoDatabase](https://www.mongodb.com/)


<h2> Run This Locally </h2>

```
git clone https://github.com/DrummerDee/Shoppers-United.git
```
```
 cd shoppers-united
```
```
npm install --save
```
```
npm run start
```

Navigate to [`http://localhost:2021`](http://localhost:2021)


## License
Shoppers United is under the [MIT](https://choosealicense.com/licenses/mit/) license.
