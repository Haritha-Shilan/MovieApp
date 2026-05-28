import React, { useContext, useEffect } from 'react'
import { Card, Col } from 'react-bootstrap'
import { IMAGE_BASE_URL } from '../utils/apiUrls'
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { MovieContext } from '../context/MovieContext';
import { useMovies } from '../hooks/useMovies';

function MovieCard({ movie,movieType}) {
    const {state,handleAddToFavourite} = useMovies();
    const handleFavouriteToggle = (e) => {
        e.stopPropagation();
        e.preventDefault();

        handleAddToFavourite(movie.id);
    }

    const isFavourite = state.favourites?.some(fav => fav.id === movie.id)||false;

    return (
        <Col md={4} lg={3} sm={6} className="mb-4 d-flex">
            <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Card className="h-100 shadow-sm w-100">
                    <div
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            cursor: "pointer",
                            backgroundColor: "rgba(0,0,0,0.6)",
                            borderRadius: "50%",
                            padding: "6px",
                            zIndex: 2
                        }}
                    >
                        {
                            isFavourite
                                ? <FaHeart color="red" onClick={(e) => handleFavouriteToggle(e)}/>
                                : <FaRegHeart color="white" onClick={(e) => handleFavouriteToggle(e)}/>
                        }

                    </div>
                    <Card.Img variant="top" src={movie.poster_path ? IMAGE_BASE_URL + movie.poster_path : "https://via.placeholder.com/300x450?text=No+Image"} style={{ height: "320px", objectFit: "cover" }} />
                    <Card.Body>
                        <Card.Title>{movie.title}</Card.Title>
                        <Card.Subtitle className="text-muted">{movie.release_date}</Card.Subtitle>
                        <Card.Text>
                            {movie.overview.slice ? movie.overview.slice(0, 120) + "..." : "No description available"}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    )
}

export default MovieCard