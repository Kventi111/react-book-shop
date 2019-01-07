const initialState = {
  bookList : []
}

export default (state = initialState,action) =>  {
  switch(action.type) {
    case "SET__BOOKS":
    return {
        bookList : action.payload
      }
    default:
      return state
  }
}