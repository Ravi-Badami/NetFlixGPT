import { useRef, useState } from "react";
import Header from "./Header";
import { vailidateData } from "../utils/validation";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const toggleSignIn = () => {
    setIsSignUp(!isSignUp);
  };
  const email = useRef(null);
  const password = useRef(null);

  const validateForm = () => {
    const ravi = vailidateData(email.current.value, password.current.value);
    setErrorMessage(ravi);
    // console.log(email.current.value);
    // console.log(password.current.value);
    // console.log(ravi);
  };
  return (
    <div className="">
      <Header />
      <img
        className=" w-screen h-screen absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt=""
      />
      <form
        onSubmit={(e) => e.preventDefault()}
        action=""
        className="p-16 my-10 bg-black absolute w-4/12 mt-12 mx-auto left-0 right-0 "
      >
        <p className="text-white text-3xl">
          {isSignUp ? "Sign Up" : "Sign In"}
        </p>

        {!isSignUp && (
          <input
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
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
        <p className="text-white mt-6  ">
          <span className="opacity-50">
            {isSignUp ? " New to Netflix?" : "Already have an account?"}
          </span>
          <span
            className="cursor-pointer hover:underline opacity-100 "
            onClick={toggleSignIn}
          >
            {isSignUp ? "  Sign up now." : " Sign In now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
