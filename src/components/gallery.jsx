import React, { Component } from "react";

class Gallery extends Component {
  state = { movies: [] };

  fetchMovies = () => {
    const apiKey = "26b5a229"; // Usa la tua chiave API
    const saga = this.props.saga;
    fetch(`http://www.omdbapi.com/?s=${saga}&apikey=${apiKey}`)
      .then((response) => response.json())
      .then((moviesObject) => this.setState({ movies: moviesObject.Search }))
      .catch((error) => console.error("Error fetching movies:", error));
  };

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    return (
      <div className="gallery">
        <h2>{this.props.saga}</h2>
        <div className="movie-row">
          {this.state.movies.map((movie) => (
            <div key={movie.imdbID} className="movie">
              <img src={movie.Poster} alt={movie.Title} />
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Gallery;
