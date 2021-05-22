const initialFavMovies = {
    favourite: []
}

const favouriteMovies = (state = initialFavMovies, action) => {
    switch (action.type) {
        case "SAVE":
            state.favourite.push(action.payload)
        default:
            return state
    }
}

export default favouriteMovies;


/*

case "REMOVE":
            const index = state.favourite.indexOf(action.payload);
            if (index > -1) {
                state.favourite.splice(index, 1);
            }

*/