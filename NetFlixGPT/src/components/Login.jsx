import Header from "./Header";

const Login = () => {
  return (
    <div className="">
      <Header />
      <img
        className=" w-screen h-screen absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt=""
      />
      <form
        action=""
        className="p-16 my-10 bg-black absolute w-4/12 mt-12 mx-auto left-0 right-0 "
      >
        <p className="text-white text-3xl">Sign In</p>

        <input
          type="text"
          placeholder="Email address"
          className="p-4 w-full mt-4 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 w-full mt-4 rounded-md"
        />
        <button className="  mt-8 py-3 w-full bg-white text-white rounded-md bg-red-600">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
