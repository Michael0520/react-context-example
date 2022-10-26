import React, { useContext, useEffect } from "react";
import { UserContext } from "./context/UserContext";
import { useAuthTokenState, useUserProfileState } from "./localStorage";
import { useNavigate } from "react-router-dom";

function App() {
  const { userData, setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  /**
   * 依照順序排列，[get,set,remove]，也可以省略只使用有用到的參數，例如[,set,] or [get,,]
   */
  const [authToken, setAuthToken, removeAuthToken] = useAuthTokenState();
  const [userProfile, setUserProfile, removeUserProfile] =
    useUserProfileState();

  /**
   * 使用範例：
   * 不確定為什麼這邊要加上 async await
   * 發現 navigate 的速度太快，沒有執行到 setAuthToken，所以加上 async await
   */
  const setLocalStorage = async () => {
    await setAuthToken("012345678");
    await setUserProfile((prev) => ({ ...prev, title: "Michael" }));
    navigate("/dashBoard");
  };

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
      <div
        className="z-10 rounded-full bg-pink-500 px-4 py-2 text-lg font-bold hover:bg-pink-400"
        onClick={setLocalStorage}
      >
        Go To DashBoard
      </div>
    </div>
  );
}

export default App;
