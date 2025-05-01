import { useState } from "react";

const AddMovie = ({ onAdd }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newMovie.title || !newMovie.rating)
      return alert("Title and rating are required");
    onAdd({ ...newMovie, rating: parseFloat(newMovie.rating) });
    setNewMovie({ title: "", description: "", posterURL: "", rating: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap justify-center gap-4 mb-6"
    >
      <input
        name="title"
        value={newMovie.title}
        onChange={handleChange}
        placeholder="Title"
        className="border p-2 rounded w-60"
        required
      />
      <input
        name="description"
        value={newMovie.description}
        onChange={handleChange}
        placeholder="Description"
        className="border p-2 rounded w-60"
      />
      <input
        name="posterURL"
        value={newMovie.posterURL}
        onChange={handleChange}
        placeholder="Poster URL"
        className="border p-2 rounded w-60"
      />
      <input
        name="rating"
        type="number"
        step="0.1"
        value={newMovie.rating}
        onChange={handleChange}
        placeholder="Rating"
        className="border p-2 rounded w-60"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Movie
      </button>
    </form>
  );
};

export default AddMovie;
