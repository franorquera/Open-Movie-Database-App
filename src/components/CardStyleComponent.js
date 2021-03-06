import styled from "styled-components";

export const CardStyle = styled.div`
    .movies {
        display: flex;
        flex-wrap: wrap; /* --> flex in the container */
        justify-content: space-evenly;
        align-items: center;
        min-height: 100vh;
    }

    .card {
        /* grow shrink basis */
        flex: 0 0 23rem;
        margin-top: 1.5rem;
        background-color: #595959;
        padding: 1rem;
        border-radius: 1rem;
    }

    .photo {
        height: 400px;
        width: 250px;
        align-self: center;
        border-radius: 0.6rem;
    }

    .movie-info {
        color: #D9D9D9;
    }

    .moive-button {
        background-color: #A6A6A6;
        border-radius: 0.6rem;
        border-color: rgb(32, 31, 31);
        color: rgb(51, 43, 43);
    }

    .moive-button:hover {
        background-color: #D9D9D9;
        color: rgb(51, 43, 43);
        border-color: rgb(32, 31, 31);
    }
`