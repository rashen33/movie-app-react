import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import MovieHeading from "./components/MovieHeading";
import SearchBox from "./components/SearchBox";

function App() {
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async () => {
    const url = "http://www.omdbapi.com/?s=avengers&apikey=449ca763";

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);
    setMovies(responseJson.Search);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <div>
      <MovieHeading heading="FilmFlow" />
      <SearchBox />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
