import React from "react";

const MovieList = (props) => {
  return (
    <div>
      <div className="flex items-center">
        {props.movies.map((movie) => (
          <img
            className="w-[200px] inline-block cursor-pointer hover:scale-105 ease-in-out duration-300 mx-2"
            src={movie.Poster}
            alt="poster-img"
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
