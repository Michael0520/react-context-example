import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { initState,UserContext } from "../context/UserContext";

const UserMenu = () => {
  const { userData, setUserData } = useContext(UserContext);

  const signOut = () => {
    setUserData(initState);
  };
  useEffect(() => {
    setUserData((prev) => ({
      ...prev,
      title: "DashBoard Page",
      iconPath: "https://picsum.photos/id/237/200/300",
    }));
  }, []);

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-slate-700 text-xl text-white">
      <h1 className="pb-4 text-6xl font-bold">User Menu</h1>
      <h2>
        This is my Name
        <span className="pl-1 font-bold text-pink-500 underline">
          {userData.title}
        </span>
      </h2>
      <div className="flex">
        <h2>This is my avatar</h2>
        <img
          className="h-40 w-40 rounded-full"
          src={userData.iconPath}
          alt="picsum"
        />
      </div>

      <NavLink
        className="z-10 mt-5 rounded-full bg-pink-500 px-4 py-2 font-bold hover:bg-pink-400"
        to="/"
        onClick={signOut}
      >
        Sigh Out
      </NavLink>
    </div>
  );
};

export default UserMenu;
