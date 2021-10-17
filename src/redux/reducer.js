import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  LOAD_PAGE,
  SEARCH,
  UPDATE_JOKES_PER_PAGE,
  ERROR,
} from './action';

const initialState = {
  loading: true,
  jokes: [],
  totalJokes: 0,
  totalPages: 0,
  currentPage: 1,
  pageLimit: 5,
  query: '',
  error: false,
};
export const jokesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return {
        ...state,
        jokes: action.payload.jokes,
        totalJokes: action.payload.totalJokes,
        totalPages: action.payload.totalPages,
        loading: false,
      };
    case LOAD_PAGE:
      return {
        ...state,
        currentPage: action.payload,
        loading: false,
      };
    case UPDATE_JOKES_PER_PAGE:
      return {
        ...state,
        pageLimit: action.payload,
        loading: false,
      };
    case SEARCH:
      return {
        ...state,
        query: action.payload,
        loading: false,
      };
    case ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
