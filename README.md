# Single Page App

[Live Demo](https://alperacabey.github.io/github-react/)

This is a lightweight solution with [GitHub Pages][ghpagesoverview]. You can easily deploy a [React][react] single page app, or a single page app built with any frontend library or framework.

# Before Start

Generate personel access token from [github tokens page](https://github.com/settings/tokens).\
Rename .env.development to .env.\
Fill the REACT_APP_ACCESS_TOKEN field in .env file.

## Available Scripts

In the project directory, you can run:

### `yarn start` or `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test` or `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build` or `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn docker:build --build-arg REACT_APP_ACCESS_TOKEN={REACT_APP_ACCESS_TOKEN} .`

Builds an image upon which your container will be built.\

### `yarn docker:run --build-arg REACT_APP_ACCESS_TOKEN={REACT_APP_ACCESS_TOKEN} .`

Runs the app on docker container.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.