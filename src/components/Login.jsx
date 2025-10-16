import { ValidateData } from "../utils/validate";
import Header from "./Header";
import { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const firstName = useRef(null);
  const lastName = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage("");
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

    if (message) return;
    if (!isSignInForm) {
      //signUp logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: firstName.current.value,
            photoURL:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJ2R9O5THIdzGHJl3RjnK2Bxzj20iYSsMQA&s",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
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
