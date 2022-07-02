import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from '../reducers';

const makeStore = () => {
  const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
  ));

  return store;
};

export const storeWrapper = createWrapper(makeStore, { debug: false });
