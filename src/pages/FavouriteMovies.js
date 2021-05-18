import styled from "styled-components";

const FavouriteMovies = () => {
    return (
        <StyledFavMovies>
            <div>
                <div className="favourite-movies">
                    <h1>Hello world</h1>
                </div>
            </div>
        </StyledFavMovies>
    );
};

const StyledFavMovies = styled.div`
    .favourite-movies {
        min-height: 100vh;
    }

    .favourite-movies h1 {
        color: white;
    }
`

export default FavouriteMovies;