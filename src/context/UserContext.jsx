import { createContext, useState } from "react";

/**
 * FIXME:遇到關於 Hooks 使用錯誤的問題，打開註解即可重現錯誤狀況，
 * 我不清楚如何使用 Hook 在 function componets 外層
 *
 * useLocalstorageState github repo: https://react-hooks.org/docs/useLocalstorageState
 * 希望能夠 rooks 套件內裡的 useLocalstorageState methods，快速取得 localStorage 內的數值
 * 並且塞回到 initState 去 覆蓋原有的 state
 */
// 這三行是使用方法， import localStorage 近來
// import { useAuthTokenState, useUserProfileState } from "./localStorage";

// [get,set,remove] = useAuthTokenState()
// const [authToken, setAuthToken, removeAuthToken] = useAuthTokenState();
// const [userProfile, setUserProfile, removeUserProfile] = useUserProfileState();

const UserContext = createContext();

export const initState = {
  title: "example",
  iconPath: "https://picsum.photos/200/300",

  // 希望能改成下方的判斷，當 localStorage 有數值時，就會賦予進來，沒有的話就傳預設值
  // title: userProfile ? userProfile.title : 'example',
  // iconPath: userProfile ? userProfile.iconPath: ''
  // token: authToken ? authToken : null,
};

const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(initState);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
