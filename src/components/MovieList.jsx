import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {movies.map((movie, index) => (
        <MovieCard movie={movie} key={index} />
      ))}
    </div>
  );
};

export default MovieList;
