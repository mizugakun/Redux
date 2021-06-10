# Middleware
[Link](https://www.youtube.com/watch?v=8zPyXAWS0L4&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=11)

* Middleware is the suggested way to extend Redux with custom functionality
* Provide third-party extension point between dispatching an action, and the moment it reaches the reducer
* Use middleware for loggin, crashing reporting, performing asyncronous tasks, etc
* Redux library provide `applyMiddleware` method to apply the middlewares.

## redux-logger
* A middleware for redux, logging everything related to redux in the application
* install: `npm install redux-logger`
* Use `createLogger` method to create a `logger`
* Pass `applyMiddleware(logger)` into `createStore` as the second pareameter to apply the middleware

## Code
```javascript
// include the redux-logger package
const reduxLogger = require('redux-logger')

...

// apply middleware method in redux
const applyMiddleware = redux.applyMiddleware
// create a logger middleware
const logger = reduxLogger.createLogger()

...

// pass applyMiddleware method with logger middleware as parameter into createStore method as the second parameters 
const store = createStore(rootReducer, applyMiddleware(logger))
```