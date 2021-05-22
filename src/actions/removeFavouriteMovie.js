const removeFavouriteMovie = (movie) => {
    return {
        type: "REMOVE",
        payload: movie
    }
}

export default removeFavouriteMovie;