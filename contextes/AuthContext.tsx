"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import Cookies from "js-cookie";
import { User } from "@/types";

interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider to wrap the app with the context
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Load user data from cookies on initial load if exist
    const userCookie = Cookies.get("user");
    if (userCookie) {
      setUser(JSON.parse(userCookie));
    }
  }, []);

  const login = (userData: User) => {
    setUser(userData);
    Cookies.set("user", JSON.stringify(userData), { expires: 1 }); // Set cookie for 1 day
  };

  const logout = () => {
    setUser(null);
    Cookies.remove("user");
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

//export context to use in component
export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
