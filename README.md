# Technical Test

Created on Node version 14 and Yarn version 1.22.19.

## Description

1. This is a monorepo that contains:

- `api` - a node service written using Express.
- `app` - a web application written using React.

2. Both services are in the `packages` folder.

## How to run

- Run `yarn` to install all of the dependencies
- Running `yarn start` from the route will spin up the Node server and run the React application simultaneously

The Node server is running on `localhost:3001` and the React application runs on `localhost:3000`

## What i would improve given more time

- I would add a GraphQL middleware layer in between the React app and the Nodeserver if it required it (variables started to be sent from the frontend)
- I would write unit tests for both the backend and frontend, using Jest
- I would also include an E2E if this became more complex, using something such as Testcafe
- I would handle errors much more gracefully as there is next to no error handling at the moment
- I would add a module bundler such as Webpack
- I would add other config such as nvmrc, prettier/linting
- Remove bloatware from React app (it was created using create-react-app)
- Greatly improve CSS, all I have currently added is minimal to allow it to be seen easier

> Note: Please ignore the name of the application, it was done on my current work laptop so i was trying to remain slightly inconspicuous!
