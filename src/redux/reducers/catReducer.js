import { CatActionTypes } from '../actions';

const initialState = {
  data: {},
  isLoading: false,
  error: '',
};

const catReducer = (state = initialState, action) => {
  switch (action.type) {
    case CatActionTypes.FETCH_CAT_START:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case CatActionTypes.FETCH_CAT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
      };
    case CatActionTypes.FETCH_CAT_FAILED:
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

export default catReducer;
