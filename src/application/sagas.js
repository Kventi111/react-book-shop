import { all, put, takeEvery, call } from 'redux-saga/effects';
import { ACTIONS } from './constants';

import { getBookDataSaga } from '../dal/books/sagas'
import { fromJS } from 'immutable';

function* initSaga() {
  yield console.log("application init")
}

function* getBookList() {
  try {
    const books = yield call(getBookDataSaga)
    console.log(books);
    
    yield put({ type : ACTIONS.APPLICATION_GET_BOOK_SUCCESS, payload : fromJS(books) })
  }catch(error) {
    yield put({ type : ACTIONS.APPLICATION_GET_BOOK_FAIL, error })
  }
}

export default function* applicationSagas() {
  yield all([
    takeEvery(ACTIONS.APPLICATION_INIT, initSaga),
    takeEvery(ACTIONS.APPLICATION_GET_BOOK_REQUEST, getBookList),
  ]);
}
