import { useEffect, useState } from "react";
import { UserContext } from "./userContext";
import authService from "../services/auth";

export default UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sessionId, setsessionId] = useState("");
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await authService.getUser();
        console.log("User Context");
        if (userData.$id) {
          console.log("user there");
          setIsLoggedIn(true);
          setsessionId(userData.$id);
        } else {
          console.log("no user there");
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
      value={{ isLoggedIn, setIsLoggedIn, sessionId, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};
