import { useState, useEffect } from "react";
function useAuth() {
  const [isAuthenticatedUser, setIsAuthenticatedUser] = useState(false);
  const [authMessage, setAuthMessage] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("This the function for checking validation", token);
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
            setAuthMessage("User Logged");
          } else {
            localStorage.removeItem("token");
            localStorage.removeItem("LoggedUser");
          }
        } catch (err) {
          setIsAuthenticatedUser(false);
          setAuthMessage("Error in Accessing user");
          localStorage.removeItem("token");
          localStorage.removeItem("LoggedUser");
        } finally {
          setLoading(false);
        }
      };
      verifyToken();
    } else {
      setLoading(false);
      setIsAuthenticatedUser(false);
      setAuthMessage("User is not logged");
    }
  }, []);
  return { isAuthenticatedUser, authMessage, loading };
}

export default useAuth;
