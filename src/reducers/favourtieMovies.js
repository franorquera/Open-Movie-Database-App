const initialFavMovies = {
    favourite: []
}

const favouriteMovies = (state = initialFavMovies, action) => {
    switch (action.type) {
        case "SAVE":
            state.favourite.push(action.payload)
        //return { ...state, favourite: action.payload }
        default:
            return state
    }
}

export default favouriteMovies;