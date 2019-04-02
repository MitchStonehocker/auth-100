This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and AWS Amplify.

A show-n-tell DEV site is available [here](http://auth-100-20190320122941-hostingbucket-dev.s3-website-us-east-1.amazonaws.com/).

Overview:
This is one ‘starting point’ module of a larger set of modules needed to produce a full PROD single page site that is highly secure, authenticated, offers high availability and easy open-ended scalability. This barebones DEV project shows user management. Styling, content, and navigation is held to a minimum while user management processing is developed.  
We use [AWS Amplify](https://aws-amplify.github.io/) to setup a [Cognito infrastructure](https://aws-amplify.github.io/docs/js/authentication). The user management functionality includes:

- User sign-up with email delivered confirmation code.
- User sign-in with ‘forgot password’.
- Once user is signed in, change password.
- Additional change functionality can be added easily as needed (change email, phone, etc.)
  User input is validated in browser useing [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) validation checks (i.e. correct formatted emails). Password requirements are setup in and enforced by Cognito (8 characters including one special character) as well as process exception handling (i.e. ‘user already exists’, ‘incorrect username/password’ and the like).
  The implementation is coded 100% functional JavaScript in ReactJS with use of [hooks](https://reactjs.org/docs/hooks-intro.html) for creating and managing the global state of the app using useContext, useState, useReducer, useEffect and so on.

AWS Apmlify and Build directories and Congito config file is not included in this GitHub repository.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
