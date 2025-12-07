/*
 * Created on Sat Nov 29 2025
 *
 * Copyright (c) 2025 Your Company
 */

import { createContext, useContext, useState } from "react";

interface User {
  email: string;
  name?: string;
}

interface AuthContextType {
  user: User | null;
  login: (payload: { email: string; password: string }) => Promise<void>;
  signup: (payload: { email: string; name: string; password: string }) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async ({ email }: { email: string; password: string }) => {
    setUser({ email }); 
    localStorage.setItem("user", email);
  };

  const signup = async ({ email, name }: { email: string; name: string; password: string }) => {
    setUser({ email, name });
    localStorage.setItem("user", email);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};
