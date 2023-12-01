// import { useDispatch } from "react-redux";
// import { removeUser } from "../utils/redux/authSlice";

import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Browse = () => {
  // const dispatch = useDispatch;

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // dispatch(removeUser());
        // User deleted.
      })
      .catch((error) => {
        // An error ocurred
        console.log(error);
        // ...
      });
  };
  return (
    <div>
      <div className=" h-screen font-bold flex justify-center items-center">
        <button className="border border-black p-2" onClick={handleSignOut}>
          signout
        </button>
      </div>
    </div>
  );
};

export default Browse;
