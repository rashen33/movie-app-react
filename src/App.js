import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import MovieHeading from "./components/MovieHeading";
import SearchBox from "./components/SearchBox";
import AddFavourites from "./components/AddFavourites";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=449ca763`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div>
      <MovieHeading heading="FilmFlow ." />
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <MovieList movies={movies} favouriteComponent={AddFavourites} />
    </div>
  );
}

export default App;
