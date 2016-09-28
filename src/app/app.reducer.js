import { combineReducers } from 'redux';
import terminal  from '../terminal/terminal.reducer';

const rootReducer = combineReducers({
  terminal,
});

export default rootReducer;
