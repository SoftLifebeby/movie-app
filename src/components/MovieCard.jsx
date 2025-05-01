import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movies/${encodeURIComponent(movie.title)}`}>
      <div className="bg-white shadow-md rounded p-4 m-2 w-64">
        <img
          src={movie.posterURL}
          alt={movie.title}
          className="w-full h-48 object-cover rounded"
        />
        <h2 className="text-xl font-bold mt-2">{movie.title}</h2>
        <p className="text-sm text-gray-600">{movie.description}</p>
        <p className="mt-1 text-yellow-600 font-semibold">⭐ {movie.rating}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
