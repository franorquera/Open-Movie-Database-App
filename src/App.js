import Home from "./pages/Home"
import FavouriteMovies from "./pages/FavouriteMovies";
import { movies_url } from "./api";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/App.css";
import "./style/Home.css";
import "./style/FavouriteMovie.css";
import "./style/MovieList.css"
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
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
