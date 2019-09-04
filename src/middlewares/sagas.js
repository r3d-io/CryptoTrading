import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

function* fetchPrice(action) {
  let user = '1'
  yield put({ type: "USER_FETCH_SUCCEEDED", user: user });
}

export default fetchPrice;
