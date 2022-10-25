import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserMenu from "./components/UserMenu";
import logo from "./logo.svg";
import { UserContext } from "./context/UserContext";

function App() {
  const { userData, setUserData } = useContext(UserContext);
  console.log(userData);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-y-4 bg-[#282c34] text-center text-4xl text-white selection:bg-green-900">
      <header className="flex w-full flex-col items-center justify-center">
        iconPath:
        <img
          src={userData.iconPath}
          className="animate-speed h-60 w-60 rounded-full motion-safe:animate-spin"
          alt="logo"
        />
        <style>
          {
            "\
            .animate-speed{\
              animation-duration:20s;\
            }\
            "
          }
        </style>
      </header>
      <main className="flex flex-col items-center justify-center font-bold">
        title: {userData.title}
      </main>
      <NavLink
        className="z-10 rounded-full bg-pink-500 px-4 py-2 text-lg font-bold hover:bg-pink-400"
        to="/dashBoard"
        element={<UserMenu />}
      >
        Go To DashBoard
      </NavLink>
    </div>
  );
}

export default App;
