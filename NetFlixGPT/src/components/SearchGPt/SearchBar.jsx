const SearchBar = () => {
  return (
    <div className=" mt-24">
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className=" px-5 pr-32 py-1 rounded-md h-12 "
          placeholder="What do you want to watch"
        />
        <button className="ml-2  py-1 px-4 font-bold bg-red-700 text-white rounded-md h-12">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
