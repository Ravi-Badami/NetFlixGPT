import { useEffect } from "react";
import { BG_IMAGE } from "../../utils/constants";
import MovieSuggestion from "./MovieSuggestion";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { goBack, toggleGpt } from "../../utils/redux/gptSlice";

const SearchGpt = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const handlePopState = () => {
      // This function will be called when the user clicks the browser's back button
      // You can add your custom logic for handling the back button here
      navigate("/browse");
      dispatch(goBack(false));
      dispatch(toggleGpt());
    };

    // Add the event listener for the popstate event
    window.addEventListener("popstate", handlePopState);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []); // Empty dependency array ensures that this effect runs only once during mount
  return (
    <div className="absolute flex flex-col w-screen ">
      <img src={BG_IMAGE} alt="" className="-z-10 absolute w-screen h-screen" />
      <SearchBar />
      <MovieSuggestion />
    </div>
  );
};

export default SearchGpt;
