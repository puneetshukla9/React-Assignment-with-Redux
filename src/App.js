import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Jokes from './components/Jokes';

import Search from './components/Search';
import Paginator from './components/Paginator';
import Loader from './components/Loader';
import { fetchJokesData } from './api/fetchJokes';
import './style.css';
import { loadPage, updateJokesPerPage, searchJoke } from './redux/action';

export default function App() {
  const jokesData = useSelector((state) => state.jokesData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchJokesData(jokesData));
  }, [jokesData.currentPage, jokesData.pageLimit, jokesData.query]);

  const fetchJokes = (pageEvent) => {
    if (
      pageEvent.type === 'next' &&
      jokesData.currentPage < jokesData.totalPages
    ) {
      dispatch(loadPage(jokesData.currentPage + 1));
    } else if (pageEvent.type === 'prev' && jokesData.currentPage > 1) {
      dispatch(loadPage(jokesData.currentPage - 1));
    }
  };

  const loadJokes = () => {
    if (jokesData.error) {
      return <div className="alert-danger">Error fetching data</div>;
    }
    if (jokesData.jokes.length) {
      const startNumber = (jokesData.currentPage - 1) * jokesData.pageLimit + 1;
      return <Jokes jokes={jokesData.jokes} startNumber={startNumber} />;
    }
    return <h3>No data found</h3>;
  };

  const setJokesPerPage = (pageLimit) => {
    dispatch(updateJokesPerPage(pageLimit));
  };

  const setQueryText = (searchText) => {
    dispatch(searchJoke(searchText));
  };

  return (
    <div>
      <h2>Random Jokes</h2>
      <Search setQueryText={setQueryText} />
      {!jokesData.error && (
        <Paginator
          handleClick={fetchJokes}
          currentPage={jokesData.currentPage}
          totalJokes={jokesData.totalJokes}
          pageLimit={jokesData.pageLimit}
          totalPages={jokesData.totalPages}
          loading={jokesData.loading}
          setJokesPerPage={setJokesPerPage}
        />
      )}

      {jokesData.loading ? <Loader /> : loadJokes()}
    </div>
  );
}
