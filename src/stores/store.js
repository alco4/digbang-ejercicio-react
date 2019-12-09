import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import creditAmountReducer from '../reducers/creditAmountReducer';
import numberOfMonthsReducer from '../reducers/numberOfMonthsReducer';
import cuotaFinalReducer from '../reducers/cuotaFinalReducer';

const mainReducer = combineReducers({
  creditAmountReducer,
  numberOfMonthsReducer,
  cuotaFinalReducer,
});

export default createStore(mainReducer, applyMiddleware(thunk));
