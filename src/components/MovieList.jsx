import React from "react";

const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  return (
    <div>
      <div className="flex items-center">
        {props?.movies.map((movie) => (
          <div className="w-[200px]   inline-block cursor-pointer hover:scale-105 ease-in-out duration-300 mx-1">
            <img className="object-cover" src={movie.Poster} alt="poster-img" />
            <div
              className="w-full h-full flex  justify-center items-center backdrop-brightness-50 p-3"
              onClick={() => props.handleFavouriteClick(movie)}
            >
              <FavouriteComponent />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
