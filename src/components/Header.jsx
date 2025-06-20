import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constant";
import { toogleGptSearch } from "../utils/gptSlice";
import menu from "../assets/menu.svg";

function Header() {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const isGptPage = useSelector((state) => state.gpt.isGptPage);
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef();
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setToggle(toggle);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
  }, []);

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
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  const handleMenu = () => {
    setToggle(!toggle);
  };

  const handleGptSeachClick = () => {
    dispatch(toogleGptSearch());
  };
  return (
    <div
      ref={menuRef}
      className=" header flex  justify-between absolute w-full mt-3 h-18 z-10 bg-gradient-to-b from-black border "
    >
      <img className=" w-44" src={LOGO} alt="Logo" />

      <div className="block sm:hidden w-full">
        <button
          onClick={handleMenu}
          className="border h-full w-full justify-end pr-8  grid items-center "
        >
          <img className="w-10 " src={menu} alt="" />
        </button>
      </div>

      {user && toggle && (
        <div className="block sm:hidden  ">
          <div className="  flex  flex-col  absolute right-0 top-20 bg-gray-700 p-6 ">
            <div className="text-white">Hi, {user.fullName}</div>

            <button
              onClick={handleGptSeachClick}
              className="py-2 px-4 my-2  cursor-pointer bg-green-700 rounded-lg text-white"
            >
              {isGptPage ? "Home Page" : " GPT Search"}
            </button>

            <img className="h-10 hidden sm:block" src={USER_AVATAR} alt="" />
            <button
              className="  cursor-pointer py-2 px-4 my-2 hover:opacity-90 bg-red-600 rounded-lg text-white"
              onClick={handleSignout}
            >
              Sign Out
            </button>
          </div>
        </div>
      )}

      <div className="hidden sm:block">
        {user && (
          <div className="flex    gap-4 justify-between items-center mr-10">
            <button
              onClick={handleGptSeachClick}
              className=" cursor-pointer py-2 px-4 my-2 bg-green-700 rounded-lg text-white"
            >
              {isGptPage ? "Home Page" : " GPT Search"}
            </button>
            <div className="hidden sm:block"></div>
            <div className="text-white">Hi, {user.fullName}</div>
            <img className="h-10 hidden sm:block" src={USER_AVATAR} alt="" />
            <button
              className="  cursor-pointer py-2 px-4 my-2 hover:opacity-90 bg-red-600 rounded-lg text-white"
              onClick={handleSignout}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
