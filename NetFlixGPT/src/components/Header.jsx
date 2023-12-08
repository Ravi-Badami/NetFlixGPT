import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { LOGO } from "../utils/constants";
import { toggleGpt } from "../utils/redux/gptSlice";

const Header = () => {
  const user = useSelector((store) => store?.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authRightButton = useSelector((store) => store.auth);
  const gpt = useSelector((store) => store.gpt.toggleSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // dispatch(removeUser());
        navigate("/");
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
  };

  return (
    <div className=" absolute  px-9 py-5 w-full bg-gradient-to-b from-black  z-20 flex  justify-between">
      <img className=" h-14" src={LOGO} alt="" />
      {authRightButton !== null && (
        <div className=" text-white flex items-center gap-2">
          <button
            className=" p-2 rounded-lg ml-2 bg-teal-300 font-bold text-black "
            onClick={handleToggleGpt}
          >
            Search GPT
          </button>
          <img
            src={user?.photoURL}
            className="h-10 rounded-full"
            alt="nothing"
          />
          {!gpt && (
            <p
              className=" p-2 rounded-lg ml-2 bg-red-700 font-bold select-none cursor-pointer"
              onClick={handleSignOut}
            >
              Signout
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
