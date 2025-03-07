import React, { useState } from 'react';

const Search = (props) => {
  const {
    searchMovies = Function.prototype,
  } = props;

  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  const handlekey = (event) => {
    if (event.key === 'Enter') {
      searchMovies(search, type);
    }
  };

  const handlefilter = (event) => {

    setType(event.target.dataset.type);
    searchMovies(search, event.target.dataset.type);

  };


  return (
    <div className="searchbar">
      <input
        className="find-film"
        placeholder="Let`s find our favorite movie 🔥"
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handlekey}
      />
      <button
        className="waves-effect waves-light btn search-btn"
        onClick={() => searchMovies(search, type)}
      >
        Find!
      </button>
      <div className="radios">
        <label className="radio-label">
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="all"
            onChange={handlefilter}
            checked={type === "all"}
          />
          <span className="radio-text">All</span>
        </label>
        <label className="radio-label">
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="movie"
            onChange={handlefilter}
            checked={type === "movie"}
          />
          <span className="radio-text">Movies only</span>
        </label>
        <label className="radio-label">
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="series"
            onChange={handlefilter}
            checked={type === "series"}
          />
          <span classNam e="radio-text">Series only</span>
        </label>
      </div>
    </div>
  );
}

export { Search };
