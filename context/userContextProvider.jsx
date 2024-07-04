import { useContext, useEffect, useState } from "react";
import { UserContext } from "./userContext";
import authService from "../services/auth";

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setloading] = useState(true);
  const [userData, setuserData] = useState({});
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await authService.getUser();
        setuserData(res);
        console.log(userData);
        if (res.$id) {
          console.log("User Context : User Session There");
          setIsLoggedIn(true);
        } else {
          console.log("User Context : User Session Not There");
          setIsLoggedIn(false);
          setloading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, []);
  return (
    <UserContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, loading, userData }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
