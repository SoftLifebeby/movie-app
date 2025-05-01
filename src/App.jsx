import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import MovieDetails from "./components/MovieDetails";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
      posterURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIglDzKK3uFgY2605v8R0AqWHbvdzQGTTkAA&s",
      rating: 8.8,
      trailer: "https://www.youtube.com/embed/8hP9D6kZseM?si=8HF4QJeJhXYsEkib",
    },
    {
      title: "Breaking Bad",
      description:
        "A struggling, frustrated high school chemistry teacher who becomes a crime lord in the local drug trade, driven to provide for his family financially",
      posterURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvCAZvPL5oqF1CP6Wzc1SZI8E8KsxgvLSLPA&s",
      rating: 9.5,
      trailer: "https://www.youtube.com/embed/VFkjBy2b50Q?si=wGk95LiOYZ_VwGfj",
    },
    {
      title: "The Matrix",
      description:
        "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
      posterURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrT346TOo_AWwFsbbgYMp9jTg_7SyRkgFTQQ&s",
      rating: 8.5,
      trailer: "https://www.youtube.com/embed/vKQi3bBA1y8?si=MkFgcw6hucut5aCU",
    },
    {
      title: "The dark knight",
      description:
        "Batman's struggle against the Joker, a chaotic criminal mastermind, as he tries to bring order to Gotham City",
      posterURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReTeyigRp8QjK24GDCDtxBGfWL3l1ElO45Xw&s",
      rating: 7.2,
      trailer: "https://www.youtube.com/embed/kmJLuwP3MbY?si=mtn5L8ao_d4VqFG8",
    },
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
  );

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🎬 My Movie App</h1>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filter
                onTitleChange={setTitleFilter}
                onRatingChange={setRatingFilter}
              />
              <AddMovie onAdd={addMovie} />
              <MovieList movies={filteredMovies} />
            </>
          }
        />
        <Route
          path="/movies/:title"
          element={<MovieDetails movies={movies} />}
        />
      </Routes>
    </div>
  );
};

export default App;
