export const CatActionTypes = {
  FETCH_CAT: 'FETCH_CAT',
  FETCH_CAT_START: 'FETCH_CAT_START',
  FETCH_CAT_SUCCESS: 'FETCH_CAT_SUCCESS',
  FETCH_CAT_FAILED: 'FETCH_CAT_FAILED',
};

export const CatActions = {
  fetchCat: (payload) => {
    return {
      type: CatActionTypes.FETCH_CAT,
      payload,
    };
  },
  fetchCatStart: (payload) => {
    return {
      type: CatActionTypes.FETCH_CAT_START,
      payload,
    };
  },
  fetchCatSuccess: (data) => {
    return {
      type: CatActionTypes.FETCH_CAT_SUCCESS,
      payload: data,
    };
  },
  fetchCatFailed: (data) => {
    return {
      type: CatActionTypes.FETCH_CAT_FAILED,
      payload: data,
    };
  },
};
