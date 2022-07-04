import { combineReducers } from 'redux';
import dataApiReducer from './dataApiReducer';
import shoppingBagReducer from './shoppingBagReducer';

const rootReducer = combineReducers({ 
  dataApiReducer, 
  shoppingBagReducer,
});

export default rootReducer;
