Freecharge Sample assessment at hackerearth.com

This is the  assessment project for Freecharge's UI Developer hiring chaallenge at https://hackerearth.com. Project required concept of Controlled Component  dynamically render search result based on user input of different categories.

## Top feature
* JSON Data fetched from provided address in context.js component, which is a code architecture for state management.
*  onClick()  event displays details of the recipe and navigate url to localhost/details where User can Buy items.
* Search form use a npm package with command `npm i escape-string-regexp`
* after matching text pattern according to input in form Homepage (localhost:300) shows filtered result based on recipe name(could be changed to price, or country of origin or any related data.)
### Run this with localhost

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What is inside this
```bash

├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   |── index.html
   ├── icons # Helpful images for  app.
   │   ├── buy.svg
   │   ├── comment.svg
   │   ├── fb.svg
   │   ├── insta.svg
   │   ├── linkedin.svg
   │   ├── profile.svg
   │   ├── sample.jpg
   │   ├── save.svg
   │   ├── search0.svg
   │   ├── share.svg
   ├── favicon.ico
   ├── index.html
   ├── logo192.png
   ├── logo512.png
   ├── manifest.json
   ├── recipelogo.png
   ├── robots.txt  

└── src
     ├── components
        ├── Footer.js #footer component , contains stuffs to stay in touch with organization
        ├── HomePage.js # Default and interactive UI
        ├── Navbar.js # Top Component of application
        ├── Payment.js # planned payment component
        ├── Recipecard.js #Each recipe in display
        ├── RecipeDetails.js # component to display on clicking to recipe card
   ├── App.css # Styles for your app. Feel free to customize this as you desire.
   ├── App.js # This is the root of your app. Contains static HTML right now.
   ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
   ├── context.js # This is the file where state management being handled;
   ├── index.css # Global styles.
   └── index.js #  It is used for DOM rendering only.
```






This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
