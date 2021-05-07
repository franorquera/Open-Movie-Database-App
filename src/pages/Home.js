import { useState } from "react";
import MovieList from "../components/MovieList";

const Home = ({ movies_url }) => {

    const [movies, setMovies] = useState([]);
    const [movie, setMovieName] = useState('');

    const InputText = async (text) => {
        setMovieName(text.target.value);
        const movie_name = movies_url(text.target.value);
        const movie_response = await fetch(movie_name);
        const movie_response_json = await movie_response.json();
        setMovies(movie_response_json.Search);
    }

    return (
        <div className="home-style">
            <div className="cont">
                <div className="form">
                    <input type="text" onChange={InputText} value={movie} className="form-control input-sm" />
                    <label htmlFor="name" className="label-name">
                        <span className="contant-name">Name</span>
                    </label>
                </div>
            </div>
            <MovieList movies={movies} />
        </div >
    );
}

export default Home;