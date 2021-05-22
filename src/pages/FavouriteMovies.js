import styled from "styled-components";
import { Card, Button } from "react-bootstrap"
import { useSelector } from "react-redux";
import { CardStyle } from "../components/CardStyleComponent";

const FavouriteMovies = () => {

    const favouriteMovies = useSelector(store => store)
    const arrayOfFavouriteMovies = favouriteMovies.favourite

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
                                <Button className="moive-button" variant="primary">Remove ❌</Button>
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