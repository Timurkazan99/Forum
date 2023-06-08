import {
  applyMiddleware, combineReducers, compose, createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import postReducer from './reducers/postReducer';
import userReducer from './reducers/userReducer';
import commentReducer from './reducers/commentReducer';
import rootWatcher from './saga';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
  })
  : compose;

const rootReducer = combineReducers({
  posts: postReducer,
  user: userReducer,
  comments: commentReducer,
});

const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  );
  sagaMiddleware.run(rootWatcher);
  return store;
};

export default configureStore;
