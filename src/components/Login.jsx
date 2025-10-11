import { ValidateData } from "../utils/validate";
import Header from "./Header";
import { useRef, useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

  const email = useRef(null);
  const password = useRef(null);
  const firstName = useRef(null);
  const lastName = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    let message;
    if (isSignInForm) {
      message = ValidateData(email.current.value, password.current.value);
    } else {
      message = ValidateData(
        email.current.value,
        password.current.value,
        firstName.current.value,
        lastName.current.value
      );
    }
    setErrorMessage(message);
  };

  return (
    <div className="relative h-screen w-screen bg-black">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover opacity-40"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>

      <Header />

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 min-w-[320px] p-10 bg-black bg-opacity-75 rounded-md text-white flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>

        {!isSignInForm && (
          <>
            <input
              ref={firstName}
              type="text"
              placeholder="First Name"
              className="p-3 my-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              ref={lastName}
              type="text"
              placeholder="Last Name"
              className="p-3 my-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </>
        )}

        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-3 my-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <p className="text-red-500 mx-2 py-2">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          type="submit"
          className="p-3 my-4 bg-red-600 hover:bg-red-700 rounded font-semibold cursor-pointer"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p
          onClick={toggleSignInForm}
          className="text-sm text-gray-400 text-center cursor-pointer"
        >
          {isSignInForm ? "New to Netflix? " : "Already a user? "}
          <span className="text-white hover:underline">
            {isSignInForm ? "Sign up now" : "Sign in now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
