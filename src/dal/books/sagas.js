import {put, call} from 'redux-saga/effects';
import { getBookList } from '../../api/book';
import { ACTIONS } from './constants'

export function* getBookDataSaga() {
  yield put({ type : ACTIONS.DAL_BOOKS_REQUIRED_GET_LIST_REQUEST })
  try {
    const result = yield call(getBookList)
    console.log(result)
    const data = (result && result.data) || []
    yield put({ type : ACTIONS.DAL_BOOKS_REQUIRED_GET_LIST_SUCCESS, payload : data })
    return data
  } catch(error) {
    yield put({ type : ACTIONS.DAL_BOOKS_REQUIRED_GET_LIST_FAIL })
    return error;
  }
}