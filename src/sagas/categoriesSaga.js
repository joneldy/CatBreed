import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchCategoriesApi } from '../api';
import { CategoriesActionTypes, CategoriesActions } from '../redux/actions';

export function* fetchCategoriesSaga({ payload }) {
  yield put(CategoriesActions.fetchCategoriesStart({ isLoading: true }));
  try {
    const resp = yield call(fetchCategoriesApi, payload);
    yield put(
      CategoriesActions.fetchCategoriesSuccess({
        data: resp.data,
        isLoading: false,
      })
    );
  } catch (err) {
    yield put(
      CategoriesActions.fetchCategoriesFailed({
        error: err.message,
        isLoading: false,
      })
    );
  }
}

export default function* categoriesFlow() {
  yield takeLatest(CategoriesActionTypes.FETCH_CATEGORIES, fetchCategoriesSaga);
}
