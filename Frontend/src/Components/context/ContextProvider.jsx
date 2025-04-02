// import axios from "axios";
// import React, { createContext, useContext, useEffect, useState } from "react";

// const authContext = createContext();

// function ContextProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const login = (user) => {
//     setUser(user);
//   };

//   const varifyUser = async () => {
//     try {
//       const res = await axios.get("http://localhost:6002/api/auth/verify");
//       {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           }

//       if (res.data.success) {
//         setUser(res.data.user);
//       } else {
//         setUser(null);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     varifyUser();
//   }, []);

//   return (
//     <authContext.Provider value={{ user, login }}>
//       {children}
//     </authContext.Provider>
//   );
// }

// export const useAuth = () => useContext(authContext);
// export default ContextProvider;

import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

// Create the authentication context
const AuthContext = createContext();

// Context provider component
function ContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function to log in the user
  const login = (user) => {
    setUser(user);
    localStorage.setItem("token", user.token); // Store token on login
  };

  // Function to log out the user
  const logout = () => {
    setUser(null);
    localStorage.removeItem("token"); // Remove token on logout
  };

  // Function to verify the user session
  const verifyUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setUser(null);
        setLoading(false);
        return;
      }

      const res = await axios.get("http://localhost:6002/api/auth/verify", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data.success) {
        setUser(res.data.user);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Error verifying user:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // Run verification on component mount
  useEffect(() => {
    verifyUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the authentication context
export const useAuth = () => useContext(AuthContext);

// Export the provider
export default ContextProvider;
