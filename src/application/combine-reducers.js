import { combineReducers }  from 'redux-immutable';
import { application } from './reducer';

/**
 *
 * @param injectedReducers
 * @returns {Function}
 */
export default combineReducers({
  application,
});
