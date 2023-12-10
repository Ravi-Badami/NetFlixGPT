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
    // TODO:Remove the data of getMovieNames and getMovie from the redux store if you go back to the browse page
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
    <>
      <div className="fixed top-0 left-0 w-screen h-screen -z-10 ">
        <img src={BG_IMAGE} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="relative ">
        <SearchBar />
        <MovieSuggestion />
      </div>
    </>
  );
};

export default SearchGpt;
