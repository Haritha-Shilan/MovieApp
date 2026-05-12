import React, { useContext } from 'react'
import MovieCard from './MovieCard'
import { Col, Container, Row } from 'react-bootstrap'
import { MovieContext } from '../context/MovieContext';

function MovieList({movieType}) {
    const {state} = useContext(MovieContext);
    const movies = movieType ==="Favourite Movies"?state.favourites:state.movies;
    return (
        <Container>
            <Row>
                <Col>{movieType}</Col>
            </Row>
            <Row>{
                state.isLoading ? <Col>Loading...</Col> :
                    state.error? <Col>{error}</Col>:
                    movies.length===0? <Col>No movies found</Col>:
                    movies.map((movie) =>
                        <MovieCard movie={movie} key={movie.id} movieType={movieType}/>
                    )}
            </Row>
        </Container>
    )
}

export default MovieList