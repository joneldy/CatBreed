import { CatBreedActionTypes } from '../actions';

const initialState = {
  data: [],
  isLoading: false,
  paginationCount: 0,
  error: '',
};

const breedReducer = (state = initialState, action) => {
  switch (action.type) {
    case CatBreedActionTypes.FETCH_CAT_BREED_START:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case CatBreedActionTypes.FETCH_CAT_BREED_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
        paginationCount: parseInt(action.payload.paginationCount, 10),
      };
    case CatBreedActionTypes.FETCH_CAT_BREED_FAILED:
      return {
        ...state,
        isLoading: false,
        data: [],
        page: 0,
        paginationCount: 0,
        error: action.payload.error,
      };

    default:
      return state;
  }
};

export default breedReducer;
