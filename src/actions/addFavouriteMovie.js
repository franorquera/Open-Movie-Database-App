const addFavouriteMovie = (movie) => {
    return {
        type: "SAVE",
        payload: movie
    };
};

export default addFavouriteMovie;