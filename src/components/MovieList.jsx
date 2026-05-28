import React from 'react'
import MovieCard from './MovieCard'
import { Col, Container, Row } from 'react-bootstrap'
import { MovieContext } from '../context/MovieContext';
import { useMovies } from '../hooks/useMovies';

function MovieList({movieType}) {
    const {state} = useMovies();
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