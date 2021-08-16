export const CategoriesActionTypes = {
  FETCH_CATEGORIES: 'FETCH_CATEGORIES',
  FETCH_CATEGORIES_START: 'FETCH_CATEGORIES_START',
  FETCH_CATEGORIES_SUCCESS: 'FETCH_CATEGORIES_SUCCESS',
  FETCH_CATEGORIES_FAILED: 'FETCH_CATEGORY_FAILED',
};

export const CategoriesActions = {
  fetchCategories: () => {
    return {
      type: CategoriesActionTypes.FETCH_CATEGORIES,
    };
  },
  fetchCategoriesStart: (payload) => {
    return {
      type: CategoriesActionTypes.FETCH_CATEGORIES_START,
      payload,
    };
  },
  fetchCategoriesSuccess: (data) => {
    return {
      type: CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS,
      payload: data,
    };
  },
  fetchCategoriesFailed: (data) => {
    return {
      type: CategoriesActionTypes.FETCH_CATEGORIES_FAILED,
      payload: data,
    };
  },
};
