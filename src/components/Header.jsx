import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGPTSearchView } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    // toggle GPT search
    dispatch(toggleGPTSearchView());
  };

  return (
    <div className="absolute w-full flex items-center justify-between px-8 py-4 bg-gradient-to-b from-black z-10">
      <img
        className="w-36"
        src={LOGO}
        alt="Netflix Logo"
      />

      {user && (
        <div className="flex items-center gap-4">
          <button
            className="py-2 px-4 mx-5 rounded-lg bg-red-700 cursor-pointer"
            onClick={handleGptSearchClick}
          >
            GPT Search
          </button>
          <img
            className="w-10 h-10 rounded"
            src={user?.photoURL}
            alt="User Icon"
          />

          <button
            onClick={handleSignOut}
            className="text-white font-semibold hover:underline cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
