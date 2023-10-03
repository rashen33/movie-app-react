import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import MovieHeading from "./components/MovieHeading";
import SearchBox from "./components/SearchBox";
import AddFavourites from "./components/AddFavourites";
import RemoveFavourites from "./components/RemoveFavourites";

function App() {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const API_KEY = "449ca763";
  const OMDB_API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

  // Fetch movie data from the OMDB API
  const getMovieRequest = async (searchValue) => {
    try {
      const response = await fetch(`${OMDB_API_URL}&s=${searchValue}`);
      const responseJson = await response.json();

      if (responseJson.Search) {
        setMovies(responseJson.Search);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Load favorite movies from local storage on initial render
  useEffect(() => {
    const movieFavourites = JSON.parse(localStorage.getItem("my-fav"));
    if(movieFavourites) {
      setFavourits(movieFavourites);
    }

  }, []);

  // Save items to local storage
  const saveToLocalStorage = (items) => {
    localStorage.setItem("my-fav", JSON.stringify(items));
  };

  // Add a movie to favorites
  const addFavouriteMovie = (movie) => {
    setFavourits(prev => [...prev,movie]);
    saveToLocalStorage([...favourites,movie]);
  };

  // Remove a movie from favorites
  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  // Fetch movies when the searchValue changes
  useEffect(() => {
    if (searchValue.trim() !== "") {
      getMovieRequest(searchValue);
    }
  }, [searchValue]);

  return (
    <div>
      <div className="w-full h-[80px] flex justify-between items-center">
        <MovieHeading heading="FilmFlow" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>

      <MovieList
        movies={movies}
        favouriteComponent={AddFavourites}
        handleFavouriteClick={addFavouriteMovie}
      />

      {favourites.length > 0 && (
        <div>
          <MovieHeading heading="Favourites" />
          <MovieList
            movies={favourites}
            favouriteComponent={RemoveFavourites}
            handleFavouriteClick={removeFavouriteMovie}
          />
        </div>
      )}
    </div>
  );
}

export default App;
