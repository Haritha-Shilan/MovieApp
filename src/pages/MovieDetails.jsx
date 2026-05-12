import React, { useEffect, useReducer } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getMovieDetailsById } from '../services/movieService';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { IMAGE_BASE_URL } from '../utils/apiUrls';
import { detailsInitalState, movieDetailsReducer } from '../reducers/movieDetails';
import { FaArrowLeft } from 'react-icons/fa';

function MovieDetails() {
    const { id } = useParams();
    const [state, dispatch] = useReducer(movieDetailsReducer, detailsInitalState);
    const navigate=useNavigate();
    const getMovieDetails = async () => {
        dispatch({ type: "FETCH_START" });
        try {
            const data = await getMovieDetailsById(id);
            dispatch({ type: "FETCH_SUCCESS", payload: data })
           
        }
        catch (error) {
            dispatch({ type: "FETCH_FAILURE", payload: error.message })
        }
    }

    const handleBackButtonClick=()=>{
        navigate(-1);
    }

    useEffect(() => {
        getMovieDetails();
    }, [])

    return (

        <Container className="mt-4 ">
            <div className="d-flex align-items-center mb-4">
                {/* <Link to="/" className="me-3 text-dark">
                    <FaArrowLeft size={20} />
                </Link> */}
                 <FaArrowLeft size={20} onClick={handleBackButtonClick} style={{ cursor: "pointer" }}/>
                <h3 className="mb-0">Movie Details</h3>
            </div>

            {state.isLoading ? (
                <div className="text-center mt-5">
                    <Spinner animation="border" />
                </div>
            ) : state.error ? (
                <div className="text-center text-danger">
                    <p>{state.error}</p>
                </div>
            ) : state.movie ? (
                <Row className="align-items-center">
                    {/* Poster */}
                    <Col md={4} className="text-center mb-4">
                        <img
                            src={
                                state.movie.poster_path
                                    ? IMAGE_BASE_URL + state.movie.poster_path
                                    : "https://via.placeholder.com/300x450?text=No+Image"
                            }
                            alt="movie"
                            className="img-fluid rounded shadow"
                        />
                    </Col>

                    {/* Details */}
                    <Col md={8}>
                        <div className="p-3 shadow-sm rounded bg-light text-dark">
                            <h2 className="mb-3">{state.movie.title}</h2>

                            <p className="text-muted mb-2">
                                Release Date: {state.movie.release_date}
                            </p>

                            <p className="mb-3">
                                <strong>Rating:</strong> ⭐ {state.movie.vote_average}
                            </p>

                            <p style={{ lineHeight: "1.6" }}>
                                {state.movie.overview || "No description available"}
                            </p>
                        </div>
                    </Col>
                </Row>
            ) : (
                <div className="text-center">
                    <p>No data available</p>
                </div>
            )}
        </Container>
    )
}

export default MovieDetails