import { createContext, useState, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import ToastContext from "./ToastContext";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

  const { toast } = useContext(ToastContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  // CHECK USER IS LOGGED IN.
  const checkUserLoggedIn = async () => {
    try {
      const res = await fetch('http://localhost:8050/api/me', {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const result = await res.json();
      if (!result.error) {
        setUser(result);
        
        if (
          location.pathname === "/login" ||
          location.pathname === "/register"
        ) {
          navigate("/", { replace: true });
        }

      } else {
        console.log(result);
      }
    } catch (err) {
      console.log(err);
    }
  };


  // LOGIN REQUEST.
  const loginUser = async (userData) => {
    try {
      const res = await fetch(`http://localhost:8050/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...userData }),
      });

      const result = await res.json();
      if (!result.error) {
        localStorage.setItem("token", result.token);
        setUser(result.user);
        toast.success(`Logged in ${result.user.name}`);

        navigate("/", { replace: true });
      } else {
        toast.error(result.error);
      }
    } catch (err) {
      console.log(err);
    }
  };


  // REGISTER REQUEST.
  const registerUser = async (userData) => {
    try {
      const res = await fetch(`http://localhost:8050/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...userData }),
      });
      const result = await res.json();

      if (!result.error) {
        toast.success("User registered successfully! Login into your account!");
        navigate("/login", { replace: true });

      } else {
        toast.error(result.error);
      }
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <AuthContext.Provider value={{ loginUser, registerUser, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};


export default AuthContext;