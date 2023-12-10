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
import { BG_IMAGE, PROFILE_AVATAR } from "../utils/constants";

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
            photoURL: PROFILE_AVATAR,
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
  };
  return (
    <div className="">
      <img
        className=" h-full w-full object-cover absolute "
        src={BG_IMAGE}
        alt=""
      />
      <form
        onSubmit={(e) => e.preventDefault()}
        action=""
        className=" p-10 md:p-16 my-10 bg-black    bg-opacity-80 absolute  w-4/5 md:w-4/12  mt-28 md:mt-12 mx-auto left-0 right-0 rounded-md"
      >
        <p className="text-white  text-2xl font-bold md:text-3xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </p>

        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-2 md:p-4 w-full mt-4 rounded-md text-sm"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className="p-2 md:p-4 w-full mt-4 rounded-md text-sm"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 md:p-4 w-full mt-4 rounded-md text-sm"
        />
        <p className="text-red-600 mt-6">{errorMessage}</p>
        {/** Submit button */}
        <button
          className="  md:mt-6 py-3 w-full  text-white rounded-md bg-red-600"
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
