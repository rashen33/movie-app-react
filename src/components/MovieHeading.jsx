import React from "react";

const MovieHeading = (props) => {
  return (
    <div>
      <h1 className="text-2xl text-white py-4 px-3">{props.heading}</h1>
    </div>
  );
};

export default MovieHeading;
