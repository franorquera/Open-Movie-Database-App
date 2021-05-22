import { Card, Button } from "react-bootstrap"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import addFavouriteMovie from "../actions/addFavouriteMovie";
import { CardStyle } from "../components/CardStyleComponent";

const MovieList = ({ movies }) => {
    const dispatch = useDispatch();

    const sendMovieToStore = (title) => {
        dispatch(addFavouriteMovie(title));
    }

    return (
        <CardStyle>
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
                                <Button onClick={() => sendMovieToStore(movie)} className="moive-button" variant="primary">Add ⭐</Button>
                            </Card.Body>
                        </Card>
                    ))
                }
            </div>
        </CardStyle>
    );
}

export default MovieList;