import { ACTIONS } from './constants';
import { fromJS } from 'immutable'

const initialAppState = {
  version: "",
  role : "",
  mode : "",
  loading : true
}

const initialBookState = {
  list : [],
  loading : false
}

const initialState = fromJS({
  application : initialAppState,
  books : initialBookState
})

const appliactionInitSuccess = (state) => {
  return state.setIn(['application','loading'],false)
}

// const appliactionGetBookRequest = (state) => {
//   return state.setIn(['application','books','loading'],true)
// }


export function application(state = initialState,action) {
  switch (action.type) {
    case ACTIONS.APPLICATION_INIT:
      return appliactionInitSuccess(state)
    case ACTIONS.APPLICATION_GET_BOOK_SUCCESS:
        return state.merge({
          list: action.payload,
          loader: false
        });
    default:
      return state
  }
}
 

