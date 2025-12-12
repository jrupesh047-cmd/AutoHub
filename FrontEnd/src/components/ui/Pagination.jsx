const Pagination = () => {
  return (
    <div className="flex justify-center items-center gap-4 p-4">
      <button className="px-3 py-1 border rounded">Prev</button>
      <span>Page 1 of X</span>
      <button className="px-3 py-1 border rounded">Next</button>
    </div>
  );
};

export default Pagination;
