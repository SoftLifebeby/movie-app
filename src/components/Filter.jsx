const Filter = ({ onTitleChange, onRatingChange }) => {
  return (
    <div className="flex gap-4 justify-center my-4">
      <input
        type="text"
        placeholder="Search by title"
        onChange={(e) => onTitleChange(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="number"
        min="0"
        max="10"
        placeholder="Min rating"
        onChange={(e) => onRatingChange(e.target.value)}
        className="border p-2 rounded"
      />
    </div>
  );
};

export default Filter;
