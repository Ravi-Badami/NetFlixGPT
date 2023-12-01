import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { LOGO } from "../utils/constants";

const Header = () => {
  const user = useSelector((store) => store?.auth);
  const navigate = useNavigate();

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

  return (
    <div className=" absolute  px-9 py-5 w-full bg-gradient-to-b from-black  z-10 flex  justify-between">
      <img className=" h-14" src={LOGO} alt="" />
      {
        <div className=" text-white flex items-center ">
          <img
            src={user?.photoURL}
            className="h-10 rounded-full"
            alt="nothing"
          />
          <p
            className="border border-black p-2 rounded-lg ml-2 bg-red-700 font-bold"
            onClick={handleSignOut}
          >
            Signout
          </p>
        </div>
      }
    </div>
  );
};

export default Header;
