import React, { createContext, useState, useEffect } from "react";
import { ClipLoader } from "react-spinners"; // Import the ClipLoader from react-spinners
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticatedUser, setIsAuthenticatedUser] = useState(false);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("LoggedUser");
    if (token) {
      const verifyToken = async () => {
        try {
          let res = await fetch(
            "https://studentsathi-backend.onrender.com/checkAuthUser",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
              }
            }
          );
          res = await res.json();

          if (res.success === true) {
            setIsAuthenticatedUser(true);
            setUsername(username);
          } else {
            localStorage.removeItem("token");
            localStorage.removeItem("LoggedUser");
          }
        } catch (err) {
          console.error("Error verifying token:", err);
          localStorage.removeItem("token");
          localStorage.removeItem("LoggedUser");
        } finally {
          setLoading(false);
        }
      };

      verifyToken();
    } else {
      setLoading(false);
    }
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader size={50} color={"#123abc"} loading={loading} />
      </div>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticatedUser,
        setIsAuthenticatedUser,
        username,
        setUsername,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
