import { useDispatch } from "react-redux";
import { removeUser } from "../utils/redux/authSlice";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Browse = () => {
  // const dispatch = useDispatch;
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
    <div>
      <div className="font-bold">
        <button className="border border-black p-2" onClick={handleSignOut}>
          signout
        </button>
      </div>
    </div>
  );
};

export default Browse;
