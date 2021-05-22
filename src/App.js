// Pages
import Home from "./pages/Home"
import FavouriteMovies from "./pages/FavouriteMovies";
// Components
import Nav from "./components/Nav";
import { movies_url } from "./api";
import GlobalStyle from "./components/GlobalStyle";
// Style
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <Home movies_url={movies_url} />
        </Route>
        <Route path="/favourite">
          <FavouriteMovies />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
