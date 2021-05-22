import styled from "styled-components";
import { Card, Button } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux";
import { CardStyle } from "../components/CardStyleComponent";
import removeFavouriteMovie from "../actions/removeFavouriteMovie";

const FavouriteMovies = () => {

    const favouriteMovies = useSelector(store => store)
    const arrayOfFavouriteMovies = favouriteMovies.favourite
    const dispatch = useDispatch();

    const removeMovie = (movie) => {
        console.log(movie)
        //dispatch(removeFavouriteMovie(movie))
    }

    return (
        <CardStyle>
            <div className="favourite-movies movies">
                {
                    arrayOfFavouriteMovies && arrayOfFavouriteMovies.map((movie, index) => (
                        <Card style={{ width: '18rem' }} className="card">
                            <Card.Img className="photo" variant="top" src={movie.Poster} />
                            <Card.Body>
                                <Card.Title className="movie-info">{movie.Title}</Card.Title>
                                <Card.Text className="movie-info">
                                    {movie.Year | movie.Type}
                                </Card.Text>
                                <Button onClick={() => removeMovie(movie)} className="moive-button" variant="primary">Remove ❌</Button>
                            </Card.Body>
                        </Card>
                    ))
                }
            </div>
        </CardStyle>
    );
};

const StyledFavMovies = styled.div`
    .favourite-movies {
        min-height: 100vh;
    }
`

export default FavouriteMovies;