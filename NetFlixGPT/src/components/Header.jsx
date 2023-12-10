import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { LOGO, SUPPORT_LANGUAGE } from "../utils/constants";
import { goBack, toggleGpt } from "../utils/redux/gptSlice";
import { changeLang } from "../utils/redux/configSlice";
import { useEffect } from "react";

const Header = () => {
  const user = useSelector((store) => store?.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authRightButton = useSelector((store) => store.auth);
  const gpt = useSelector((store) => store.gpt.toggleSearch);
  const goBackButton = useSelector((store) => store.gpt.home);
  useEffect(() => {
    const handlePopState = () => {
      // This function will be called when the user clicks the browser's back button
      // You can add your custom logic for handling the back button here
      navigate("/browse");
    };

    // Add the event listener for the popstate event
    window.addEventListener("popstate", handlePopState);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // dispatch(removeUser());
        navigate("/");
        window.location.reload();

        // User deleted.
      })
      .catch((error) => {
        // An error ocurred
        console.log(error);
        // ...
      });
  };
  const handleToggleGpt = () => {
    dispatch(toggleGpt());
    dispatch(goBack(true));
  };
  const handleLangChange = (e) => {
    dispatch(changeLang(e.target.value));
  };

  return (
    <div className=" fixed  md:px-9 py-5 w-full bg-gradient-to-b from-black  z-20 flex  justify-between flex-col md:flex-row items-center">
      <img className=" w-40 md:h-14 mb-4 md:mb-0" src={LOGO} alt="" />
      {authRightButton !== null && (
        <div className=" text-white flex items-center  gap-2 ">
          {gpt ? (
            <div>
              {goBackButton && (
                <select
                  className="text-black   outline-none px-2 py-1 "
                  onChange={handleLangChange}
                >
                  {SUPPORT_LANGUAGE.map((lang) => (
                    <option
                      key={lang.identifier}
                      value={lang.identifier}
                      className="text-black px-2 py-1"
                    >
                      {lang.name}
                    </option>
                  ))}
                </select>
              )}
            </div>
          ) : (
            <p
              className=" p-2 rounded-lg ml-2 bg-red-700 font-bold select-none cursor-pointer"
              onClick={handleSignOut}
            >
              Signout
            </p>
          )}
          <button
            className=" p-2 rounded-lg ml-2 bg-teal-300 font-bold text-black "
            onClick={handleToggleGpt}
          >
            Search GPT
          </button>
          <img
            src={user?.photoURL}
            className="h-10 rounded-full  "
            alt="nothing"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
