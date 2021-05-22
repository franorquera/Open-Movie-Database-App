import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = ({ movies_url }) => {

    return (
        <StyledNav>
            <h1 id="logo"><Link to="/">Cine App</Link></h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    <Link to="/favourite">Favourite Movies</Link>
                </li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;

    a {
        color: white;
        text-decoration: none;
    }

    ul {
        display: flex;
        list-style: none;
    }

    li {
        a {
            padding-left: 5rem;
        }
    }

    #logo {
        font-size: 1.5rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;
    }
`

export default Nav;