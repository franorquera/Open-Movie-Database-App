// Pages
import Home from "./pages/Home"
import FavouriteMovies from "./pages/FavouriteMovies";
// Components
import Nav from "./components/Nav";
import { movies_url } from "./api";
import GlobalStyle from "./components/GlobalStyle";
// Style
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
// Redux
import { useSelector } from "react-redux";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
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
