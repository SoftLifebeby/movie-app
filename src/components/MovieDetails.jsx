import { useParams, useNavigate } from "react-router-dom";

const MovieDetails = ({ movies }) => {
  const { title } = useParams();
  const navigate = useNavigate();

  const movie = movies.find(
    (m) => m.title.toLowerCase() === title.toLowerCase()
  );

  if (!movie) return <p className="text-center mt-10">Movie not found</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <button
        onClick={() => navigate("/")}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        ⬅ Back to Home
      </button>
      <h2 className="text-3xl font-bold mb-4">{movie.title}</h2>
      <p className="mb-4 text-gray-700">{movie.description}</p>
      {movie.trailer && (
        <iframe
          width="100%"
          height="400"
          src={movie.trailer}
          title={movie.title}
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default MovieDetails;
