import { ACTIONS } from './constants'

export const appInit = () => ({
  type : ACTIONS.APPLICATION_INIT
})

export const getBookListRequest = books => ({
  type : ACTIONS.APPLICATION_GET_BOOK_REQUEST,
  payload : books
})

export const getBookListSuccess = books => ({
  type : ACTIONS.APPLICATION_GET_BOOK_SUCCESS,
  payload : books
})

export const getBookListFail = books => ({
  type : ACTIONS.APPLICATION_GET_BOOK_FAIL,
  payload : books
})