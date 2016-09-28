import { createStore, applyMiddleware } from 'redux';
import createLogger  from 'redux-logger';
import rootReducer  from '../app/app.reducer';

export default function configureStore() {
  // Load state from localStorage
  const middlewares = [];
  // Log actions and states in development mode
  if (process.env.NODE_ENV !== 'production') {
    const loggerMiddleware = createLogger(); // neat middleware that logs actions
    middlewares.push(loggerMiddleware);
  }

  const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
  );

  return store;
}
