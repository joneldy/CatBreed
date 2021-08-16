import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchCatBreedApi } from '../api';
import {
  CatBreedActionTypes,
  CatBreedActions,
  ModalActions,
} from '../redux/actions';

export function* fetchCatBreedSaga({ payload }) {
  yield put(CatBreedActions.fetchCatBreedStart({ isLoading: true }));
  try {
    const resp = yield call(fetchCatBreedApi, payload);
    const paginationCount = resp.headers['pagination-count'];
    yield put(
      CatBreedActions.fetchCatBreedSuccess({
        data: resp.data,
        isLoading: false,
        paginationCount,
      })
    );
  } catch (err) {
    yield put(
      ModalActions.showModal({
        title: 'Error Occured',
        message:
          'Apologies but we could not load new cats for you at this time! Miau!',
      })
    );
    yield put(
      CatBreedActions.fetchCatBreedFailed({
        error: err.message,
        isLoading: false,
      })
    );
  }
}

export default function* catBreedFlow() {
  yield takeLatest(CatBreedActionTypes.FETCH_CAT_BREED, fetchCatBreedSaga);
}
