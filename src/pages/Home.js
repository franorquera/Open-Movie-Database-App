import { useState } from "react";
import styled from "styled-components";
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
        <StyledHome>
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
        </StyledHome>
    );
}

const StyledHome = styled.div`
    .cont {
        display: flex;
        justify-content: center;
    }

    .form {
        width: 50%;
        position: relative;
        height: 50%;
    }

    .form input {
        width: 100%;
        height: 100%;
        color: #595f6e;
        padding-top: 20px;
        border: none;
        outline: none;
        margin-top: 1rem;
        box-shadow: 0px 0px 30px rgba(0,0,0,0.2);
        font-weight: bold;
    }

    .form label {
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        pointer-events: none;
        border-bottom: 1px solid black;
    }

    .form label::after {
        content: "";
        position: absolute;
        left: 0px;
        bottom: -1px;
        height: 100%;
        width: 100%;
        border-bottom: 3px solid #D9D9D9;
        transform: translateX(-200%); /* Resolver */
        transition: transform 0.3 ease;
    }

    .contant-name {
        position: absolute;
        bottom: 5px;
        left: 0px;
        transition: all 0.3s ease;
    }

    .form input:focus + .label-name .contant-name {
        transform: translateY(-100%);
        font-size: 14px ;
        color: #A6A6A6;
    }

    .form input:focus + .label-name::after {
        transform: translateX(0%);
    }
`

export default Home;