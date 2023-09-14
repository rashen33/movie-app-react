import React from "react";

const MovieList = (props) => {
  return (
    <div>
      {props.movies.map((movie) => (
        <div>
          <img src={movie.Poster} alt="poster-img" />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
