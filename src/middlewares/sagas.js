import { call, put, takeEvery, takeLatest, take } from 'redux-saga/effects'
import fetchPrice from '../data/api.js'
import { updateCoinList } from '../actions';

function* updatePriceList() {
  while (true) {
    let action = yield take('ADD_COINLIST')
    let coinPriceList = yield call(fetchPrice, action.data.coinList);
    yield put(updateCoinList(coinPriceList, false));
  }
}

export default updatePriceList;
