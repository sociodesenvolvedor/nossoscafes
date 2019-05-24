/* Presentational */
import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

/* Actions */
import Explore from '~/store/ducks/explore';

/* Get Explore */
export function* getExplore() {
  const response = yield call(api.get, 'coffeesShops');
  switch (response.status) {
    case 200:
      yield put(Explore.exploreAccept(response.data.data));
      break;
    default:
      yield put(Explore.exploreRequestFail());
  }
}
