import axios from "axios";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("appUser")) || null,
  );

  const login = async (data) => {
    const res = await axios.post("http://localhost:5555/login", data);
    setCurrentUser(res.data.user);
    localStorage.setItem("appUser", JSON.stringify(res.data.user));
    localStorage.setItem("token", res.data.token);
    return res;
  };

  const logout = () => {
    localStorage.removeItem("appUser");
    setCurrentUser(null);
  };

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("appUser", JSON.stringify(currentUser));
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ login, currentUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
