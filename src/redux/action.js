export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const LOAD_PAGE = 'LOAD_PAGE';
export const SEARCH = 'SEARCH';
export const UPDATE_JOKES_PER_PAGE = 'UPDATE_JOKES_PER_PAGE';
export const ERROR = 'ERROR';

export const fetchRequest = () => {
  return {
    type: FETCH_REQUEST,
  };
};

export const fetchSuccess = (jokesData) => {
  return {
    type: FETCH_SUCCESS,
    payload: jokesData,
  };
};

export const loadPage = (pageNo) => {
  return {
    type: LOAD_PAGE,
    payload: pageNo,
  };
};
export const searchJoke = (searchTxt) => {
  return {
    type: SEARCH,
    payload: searchTxt,
  };
};
export const updateJokesPerPage = (jokesCount) => {
  return {
    type: UPDATE_JOKES_PER_PAGE,
    payload: jokesCount,
  };
};

export const error = () => {
  return {
    type: ERROR,
  };
};
