import { Card, Button } from "react-bootstrap"


const MovieList = ({ movies }) => {
    return (
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
                            <Button className="moive-button" variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                ))
            }
        </div>
    );
}

export default MovieList;