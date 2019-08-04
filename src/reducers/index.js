import { combineReducers } from 'redux';
import { authentication } from './authentication';
// import { notification } from './notification';

// const rootReducer = combineReducers({authentication, notification});
const rootReducer = combineReducers({authentication});
export default rootReducer;