import React, { Component } from "react";
import { Card, CardImg, Col, Container, Row } from "react-bootstrap";

class Gallery extends Component {
  state = { movies: [] };

  fetchMovies = () => {
    const apiKey = "26b5a229";
    const saga = this.props.saga;
    fetch(`http://www.omdbapi.com/?s=${saga}&apikey=${apiKey}`)
      .then((response) => response.json())
      .then((moviesObject) => this.setState({ movies: moviesObject.Search }))
      .catch((error) => console.log("Error", error));
  };

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    return (
      <div>
        <h2 className="fs-4">{this.props.saga}</h2>
        <Row>
          {this.state.movies.map((movie) => (
            <Col lg={3} md={6} sm={12} key={movie.imdbID} className="movieCol">
              <Card className="cardStyle h-100">
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
