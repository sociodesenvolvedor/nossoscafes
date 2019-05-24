import { all, takeLatest } from 'redux-saga/effects';

/* Types */
import { Types as ExploreTypes } from '~/store/ducks/explore';

/* Saga */
import { getExplore } from './explore';

export default function* rootSaga() {
  yield all([takeLatest(ExploreTypes.EXPLORE_REQUEST, getExplore)]);
}
