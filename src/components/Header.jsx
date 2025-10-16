import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-full flex items-center justify-between px-8 py-4 bg-gradient-to-b from-black z-10">
      <img
        className="w-36"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
      />

      {user && (
        <div className="flex items-center gap-4">
          <img
            className="w-10 h-10 rounded"
            src={
              user?.photoURL ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ3SFVmXoYNHl2D22fjIEAwMuEqrbDYiUUwsWi6-K0AEnh9QZzAhgaOayZ6hFG4Eh_1m4&usqp=CAU"
            }
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
