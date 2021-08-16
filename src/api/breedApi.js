import axios from '../axiosApi';

// eslint-disable-next-line camelcase
export const fetchCatBreedApi = ({ page, limit, breed_id }) =>
  axios.get('/images/search', {
    params: {
      page,
      limit,
      breed_id,
    },
  });

export const fetchCategoriesApi = () => axios.get('/breeds');
