import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import MovieHeading from "./components/MovieHeading";
import SearchBox from "./components/SearchBox";
import AddFavourites from "./components/AddFavourites";
import RemoveFavourites from "./components/RemoveFavourites";

function App() {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourits] = useState([]);
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

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem('my-fav')
    );
    setFavourits(movieFavourites);
  },[]);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("my-fav", JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourits(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setFavourits(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  return (
    <div>
      <MovieHeading heading="FilmFlow ." />
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <MovieList
        movies={movies}
        favouriteComponent={AddFavourites}
        handleFavouriteClick={addFavouriteMovie}
      />
      <MovieHeading heading="Favourites" />
      <MovieList
        movies={favourites}
        favouriteComponent={RemoveFavourites}
        handleFavouriteClick={removeFavouriteMovie}
      />
    </div>
  );
}

export default App;
