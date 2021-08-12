# DEV NOTES:
## Design Inspiration

I took pinterest as an inspiration on how I would like the list of cat to be tiled across the page. Each tile is hoverable with effect that shows details and a button to view the cat detail.  The cat detail page will be just be a simple card with all the needed info and a back button

## KEY FEATURES

1. Home page with list of cats
  a. As a user I Should see a load more button to paginate and should disappear if all cat in the category is loaded
  b. As a user I should be able to select cat breeds on a select input box and my selection will act as a filter on the cat query
2. Cat Details Page
  a. As a User, when I clicked on any cat from the home page it should redirect me to another page
  b. As a user, this page should show me the ff. details of the selected cat
    1. Image
    2. Breed Name
    3. Origin
    4. Temperament
    5. description
  c. As a user, I'm expecting to have a back button then when clicked will lead me back to the home page
    1. When redirected back to the home page, the user should expect that the previous selected category and the loaded cat list is preserved
3. Exception Handling - on the event that an API error occured, the user should see an alert or banner saying :  “Apologies but we could not load new cats for you at this time! Miau!” 
## Non-functional Requirements

1. Effective Class, method, comments, and variable names - make it concise
2. Avoid code duplication
3. Code should be readable and consistent
4. Effective source tree directory structure and separation of concern
5. Effective file organization - codes should not be in one single file (no spag code)
6. Correct Exception handling - as dscribed on #3 key feature
7. Git utilisation

### Linting
https://www.npmjs.com/package/eslint-plugin-react



# [DEFAULT REACT README FROM HERE BELOW] Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
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

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
