import { createContext, useState } from "react";

const UserContext = createContext();

export const initState = {
  title: "example",
  iconPath: "https://picsum.photos/200/300",
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
