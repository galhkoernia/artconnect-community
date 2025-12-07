/*
 * Created on Sun Dec 07 2025
 *
 * Copyright (c) 2025 Your Company
 */

import React from "react";
import { useNavigate } from "react-router-dom";
import ArtConnectLogin from "../components/ArtConnectLogin";
import { useAuth } from "../../../../providers/AuthProviders";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (payload: { email: string; password: string }) => {
    try {
      await login(payload);
      navigate("/feed");
    } catch (error) {
      alert("Login gagal, periksa kembali email dan password");
    }
  };

  const handleSwitch = () => {
    navigate("/signup");
  };

  return (
    <ArtConnectLogin
      onLogin={handleLogin}
      onSwitch={handleSwitch}
    />
  );
};

export default LoginPage;
