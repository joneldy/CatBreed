import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchCatApi } from '../api';
import { CatActionTypes, CatActions } from '../redux/actions';

export function* fetchCatSaga({ payload }) {
  yield put(CatActions.fetchCatStart({ isLoading: true }));
  try {
    const resp = yield call(fetchCatApi, payload);
    yield put(
      CatActions.fetchCatSuccess({
        data: resp.data,
        isLoading: false,
      })
    );
  } catch (err) {
    yield put(
      CatActions.fetchCatFailed({
        error: err.message,
        isLoading: false,
      })
    );
  }
}

export default function* fetchCatFlow() {
  yield takeLatest(CatActionTypes.FETCH_CAT, fetchCatSaga);
}
