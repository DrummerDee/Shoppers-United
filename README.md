# Shoppers United

A simple web application that syncs with multiple devices and allows users to easily create lists on a single platform. Go ahead and create your shopping list! 

## Get Started
To run this app, clone the repository and install dependencies:

```bash
$ git clone https://github.com/DrummerDee/Shoppers-United.git

$ cd shoppers-united

$ npm install <package> --save
```
Then start the server
```bash
$ npm start 
```
Navigate to [`http://localhost:2021`](http://localhost:2021)

## Tech Stack
JavaScript, HTML, CSS, Node.js, MongoDB, Mongoose, Express, Passport.js

## Overview
This app illustrates how to build an app with sign-in functionality using Express, Passport, and the [`passport-local`](https://www.passportjs.org/packages/passport-local/) strategy.

This app is a traditional web application, in which application logic and data persistence resides on the server. HTML pages and forms are rendered by the server and client-side JavaScript is kept to a minimum. HTML pages are rendered using EJS templates, and are styled using vanilla CSS.

When a user first arrives at this app, they are prompted to sign in. Once authenticated, a login session is established and maintained between the server and the user's browser.

After signing in, the user can view, create, and edit list items. Interaction occurs by clicking links and submitting forms, which trigger HTTP requests. 


## Next Steps
* Credential Management
  * Learn how to use the [Credential Managment](https://www.w3.org/TR/credential-management-1/)
  API to help the user store and select their password.
* Push Notifications
  * Study [WebPush Notifications](https://itnext.io/an-introduction-to-web-push-notifications-a701783917ce) to add notification functionality to app. 
  * Consider using [Pusher Beams](https://pusher.com/beams), a  cross-platform push notifications API designed to deliver critical transactional information in realtime, without complex integrations and maintenance
* Toggle Display Theme
  * Create a button in app's `General Settings` that allow users to toggle between light and dark mode on a click/tap. Libraries that can be used are [Fontawesome](https://fontawesome.com/) and [Bootstrap](https://getbootstrap.com/).
  * Improve user experience and facilitate inclusivity by following [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/). (e.g. color blindness, dyslexia, etc.)  


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change or fix.

Please make sure to update tests as appropriate.

## License
Shoppers United is under the [MIT](https://choosealicense.com/licenses/mit/) license.
