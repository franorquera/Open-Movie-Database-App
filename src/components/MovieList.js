import { Card, Button } from "react-bootstrap"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import addFavouriteMovie from "../actions/addFavouriteMovie";
import styled from "styled-components";

const MovieList = ({ movies }) => {
    const dispatch = useDispatch();

    const sendMovieToStore = (title) => {
        dispatch(addFavouriteMovie(title));
    }

    return (
        <StyledMovies>
            <div className="row movies">
                {
                    movies && movies.map((movie, index) => (
                        <Card style={{ width: '18rem' }} className="card">
                            <Card.Img className="photo" variant="top" src={movie.Poster} />
                            <Card.Body>
                                <Card.Title className="movie-info">{movie.Title}</Card.Title>
                                <Card.Text className="movie-info">
                                    {movie.Year | movie.Type}
                                </Card.Text>
                                <Button onClick={() => sendMovieToStore(movie.Title)} className="moive-button" variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    ))
                }
            </div>
        </StyledMovies>
    );
}

const StyledMovies = styled.div`
    .movies {
        display: flex;
        flex-wrap: wrap; /* --> flex in the container */
        justify-content: space-evenly;
        align-items: center;
        min-height: 100vh;
    }

    .card {
        /* grow shrink basis */
        flex: 0 0 23rem;
        margin-top: 1.5rem;
        background-color: #595959;
        padding: 1rem;
        border-radius: 1rem;
    }

    .photo {
        height: 400px;
        width: 250px;
        align-self: center;
        border-radius: 0.6rem;
    }

    .movie-info {
        color: #D9D9D9;
    }

    .moive-button {
        background-color: #A6A6A6;
        border-radius: 0.6rem;
        border-color: rgb(32, 31, 31);
        color: rgb(51, 43, 43);
    }

    .moive-button:hover {
        background-color: #D9D9D9;
        color: rgb(51, 43, 43);
        border-color: rgb(32, 31, 31);
    }
`

export default MovieList;