import {combineReducers} from "redux" 

import book from "./book"
import cart from "./cart"

export default combineReducers({
  book,
  cart
})