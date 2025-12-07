/*
 * Created on Fri Dec 05 2025
 *
 * Copyright (c) 2025 Your Company
 */

import React from "react";
import { useNavigate } from "react-router-dom";
import ArtConnectSignup from "../components/ArtConnectSignup";
import { useAuth } from "../../../../providers/AuthProviders";

const SignupPage: React.FC = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();

  const handleSignup = async (payload: { email: string; name: string; password: string }) => {
    try {
      await signup(payload);
      navigate("/feed");
    } catch (error) {
      alert("Registrasi gagal, coba lagi");
    }
  };

  const handleSwitch = () => {
    navigate("/login");
  };

  return (
    <ArtConnectSignup
      onSignup={handleSignup}
      onSwitch={handleSwitch}
    />
  );
};

export default SignupPage;
