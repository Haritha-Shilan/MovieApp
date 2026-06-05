import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

function MovieList({movieType}) {
    const state=useSelector(state=>state.movie);
    const movies = movieType ==="Favourite Movies"?state.favourites:state.movies;
    return (
        <Container>
            <Row>
                <Col>{movieType}</Col>
            </Row>
            <Row>{
                state.isLoading ? <Col>Loading...</Col> :
                    state.error? <Col>{state.error}</Col>:
                    movies.length===0? <Col>No movies found</Col>:
                    movies.map((movie) =>
                        <MovieCard movie={movie} key={movie.id} movieType={movieType}/>
                    )}
            </Row>
        </Container>
    )
}

export default MovieList