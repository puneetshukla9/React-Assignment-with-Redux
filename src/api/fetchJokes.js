import axios from 'axios';
import { BASE_URL } from '../api/config';
import { fetchSuccess, fetchRequest } from '../redux/action';
export const fetchJokesData = (jokesData) => {
  return (dispatch) => {
    dispatch(fetchRequest());
    axios
      .get(
        `${BASE_URL}/search?term=${jokesData.query}&limit=${jokesData.pageLimit}&page=${jokesData.currentPage}`,
        {
          headers: {
            Accept: 'application/json',
          },
        }
      )
      .then(({ data }) => {
        dispatch(
          fetchSuccess({
            jokes: data.results,
            totalJokes: data.total_jokes,
            totalPages: data.total_pages,
          })
        );
      })
      .catch((error) => {});
  };
};
