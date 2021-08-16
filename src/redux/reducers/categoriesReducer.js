import { CategoriesActionTypes } from '../actions';

const initialState = {
  data: [],
  isLoading: false,
  error: '',
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CategoriesActionTypes.FETCH_CATEGORIES_START:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
      };
    case CategoriesActionTypes.FETCH_CATEGORIES_FAILED:
      return {
        ...state,
        isLoading: false,
        data: [],
        error: action.payload.error,
      };

    default:
      return state;
  }
};

export default categoriesReducer;
