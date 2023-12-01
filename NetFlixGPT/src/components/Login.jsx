import { useRef, useState } from "react";
import { vailidateData } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/redux/authSlice";

const Login = () => {
  const dispatch = useDispatch();

  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const validateForm = () => {
    const message = vailidateData(email.current.value, password.current.value);
    setErrorMessage(message);
    /** if an error message is returned than return from here if null is returned than go ahead */
    if (message) return;
    /** !isSignIn=== signup */
    if (!isSignIn) {
      /** sign up logic */
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/89252630?v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              // console.log(uid, email, displayName);
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
          // console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      /** Sign in logic */
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          const { uid, email, displayName, photoURL } = auth.currentUser;
          // console.log(uid, email, displayName);
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }

    // console.log(email.current.value);
    // console.log(password.current.value);
    // console.log(message);
  };
  return (
    <div className="">
      <img
        className=" w-screen h-screen absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt=""
      />
      <form
        onSubmit={(e) => e.preventDefault()}
        action=""
        className="p-16 my-10 bg-black sm:bg-red-300   bg-opacity-80 absolute w-4/12 mt-12 mx-auto left-0 right-0 rounded-md"
      >
        <p className="text-white text-3xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </p>

        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-4 w-full mt-4 rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className="p-4 w-full mt-4 rounded-md"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 w-full mt-4 rounded-md"
        />
        <p className="text-red-600 mt-6">{errorMessage}</p>
        {/** Submit button */}
        <button
          className="  mt-6 py-3 w-full  text-white rounded-md bg-red-600"
          onClick={validateForm}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-white mt-6  ">
          <span className="opacity-50">
            {isSignIn ? " New to Netflix?" : "Already have an account?"}
          </span>
          <span
            className="cursor-pointer hover:underline opacity-100 "
            onClick={toggleSignIn}
          >
            {isSignIn ? "  Sign Up now." : " Sign In now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
