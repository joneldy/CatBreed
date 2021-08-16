import { all } from 'redux-saga/effects';
import catBreedFlow from './breedSaga';
import fetchCatFlow from './catSaga';
import categoriesFlow from './categoriesSaga';

export default function* root() {
  yield all([catBreedFlow(), fetchCatFlow(), categoriesFlow()]);
}
