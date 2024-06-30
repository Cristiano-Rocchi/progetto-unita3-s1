import React, { Component } from "react";
import { Card, CardImg, Col, Container, Row } from "react-bootstrap";

class Gallery extends Component {
  state = { movies: [] };

  fetchMovies = () => {
    fetch(`http://www.omdbapi.com/?s=${this.props.saga}&apikey=26b5a229`)
      .then((response) => response.json())
      .then((moviesObject) => this.setState({ movies: moviesObject.Search }))
      .catch((error) => console.log("Error", error));
  };

  componentDidMount() {
    this.fetchMovies();
  }
  firstLetterUpper = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  render() {
    return (
      <div className="bg-dark">
        <h2 className="fs-4 mt-4 mb-2">
          {this.firstLetterUpper(this.props.saga)}
        </h2>
        <Row>
          {this.state.movies.map((movie) => (
            <Col
              lg={3}
              md={6}
              sm={12}
              key={movie.imdbID}
              className="movieCol mb-3"
            >
              <Card className="cardStyle h-100 border border-0">
                <CardImg className="rounded h-100" src={movie.Poster} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Gallery;
