import styled from "styled-components";

const Nav = () => {
    return (
        <StyledNav>
            <h1><a id="logo" href="/">Movie Web Page</a></h1>
            <ul>
                <li>
                    <a href="/">Home</a>
                    <a href="/favourite">Favourite Movies</a>
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