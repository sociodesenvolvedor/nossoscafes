import { combineReducers } from 'redux';

import { reducer as explore } from './explore';

const reducers = combineReducers({
  explore,
});

export default reducers;
