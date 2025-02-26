import React from 'react';

class Search extends React.Component {
  state = {
    search: '',
    type: 'all',
  };

  handlekey = (event) => {
    if (event.key === 'Enter') {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handlefilter = (event) => {
    this.setState(() => ({ type: event.target.dataset.type }), () => {
        this.props.searchMovies(this.state.search, this.state.type);
    });
  };

  render() {
    const { search } = this.state;

    return (
      <div className="searchbar">
        <input
          className="find-film"
          placeholder="Let`s find our favorite movie 🔥"
          type="search"
          value={search}
          onChange={(e) => this.setState({ search: e.target.value })}
          onKeyDown={this.handlekey}
        />
        <button
          className="waves-effect waves-light btn search-btn"
          onClick={() => this.props.searchMovies(this.state.search, this.state.type)}
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
              onChange={this.handlefilter}
              checked={this.state.type === "all"}
            />
            <span className="radio-text">All</span>
          </label>
          <label className="radio-label">
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="movie"
              onChange={this.handlefilter}
              checked={this.state.type === "movie"}
            />
            <span className="radio-text">Movies only</span>
          </label>
          <label className="radio-label">
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="series"
              onChange={this.handlefilter}
              checked={this.state.type === "series"}
            />
            <span className="radio-text">Series only</span>
          </label>
        </div>
      </div>
    );
  }
}

export { Search };
