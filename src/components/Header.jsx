import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constant";

function Header() {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            fullName: displayName,
          })
        );
navigate('/browse')

      } else {
        dispatch(removeUser());
navigate('/')
      }
    });
  }, []);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
      
      })
      .catch((error) => {
       
      });
  };
  return (
    <div className="flex  justify-between absolute w-screen h-18 z-10 bg-gradient-to-b from-black">
      <img
        className=" w-44"
        src={LOGO}
        alt="Logo"
      />

      {user && (
        <div className="flex  gap-4 justify-between items-center mr-10">
          <div>Hi, {user.fullName}</div>
          <img
            className="h-10"
            src={USER_AVATAR}
            alt=""
          />
          <button
            className="bg-red-600 text-white p-3 font-bold"
            onClick={handleSignout}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
