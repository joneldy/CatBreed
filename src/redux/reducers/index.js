import { combineReducers } from 'redux';
import breedReducer from './breedReducer';
import catReducer from './catReducer';
import categoriesReducer from './categoriesReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  breeds: breedReducer,
  cat: catReducer,
  categories: categoriesReducer,
  modal: modalReducer,
});

export default rootReducer;
