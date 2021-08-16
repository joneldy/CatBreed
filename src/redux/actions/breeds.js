export const CatBreedActionTypes = {
  FETCH_CAT_BREED: 'FETCH_CAT_BREED',
  FETCH_CAT_BREED_START: 'FETCH_CAT_BREED_START',
  FETCH_CAT_BREED_SUCCESS: 'FETCH_CAT_BREED_SUCCESS',
  FETCH_CAT_BREED_FAILED: 'FETCH_CAT_BREED_FAILED',
};

export const CatBreedActions = {
  fetchCatBreed: (payload) => {
    return {
      type: CatBreedActionTypes.FETCH_CAT_BREED,
      payload,
    };
  },
  fetchCatBreedStart: (payload) => {
    return {
      type: CatBreedActionTypes.FETCH_CAT_BREED_START,
      payload,
    };
  },
  fetchCatBreedSuccess: (data) => {
    return {
      type: CatBreedActionTypes.FETCH_CAT_BREED_SUCCESS,
      payload: data,
    };
  },
  fetchCatBreedFailed: (data) => {
    return {
      type: CatBreedActionTypes.FETCH_CAT_BREED_FAILED,
      payload: data,
    };
  },
};
