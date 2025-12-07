/*
 * Created on Fri Dec 05 2025
 *
 * Copyright (c) 2025 Your Company
 */


import React, { useState } from "react";

type LoginPayload = {
  email: string;
  password: string;
};

type ArtConnectLoginProps = {
  onLogin?: (payload: LoginPayload) => void;
  onSwitch?: () => void;
};

const ArtConnectLogin: React.FC<ArtConnectLoginProps> = ({ onLogin, onSwitch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!email || !password) {
      alert("Mohon lengkapi email dan password");
      return;
    }
    onLogin?.({ email, password });
  };

  return (
    <div className="min-h-screen bg-[#EDEDED] flex items-center justify-center font-poppins">
      <div className="w-full max-w-md">

        {/* Logo */}
        <h1 className="text-5xl font-playball text-center mb-8">
          ArtConnect
        </h1>

        {/* Card */}
        <div className="bg-amber-50 rounded-3xl shadow-2xl p-8">
          
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">Selamat Datang!</h2>
            <p className="text-gray-700">
              Kamu mencari inspirasi dan ekspresi? Mari bergabung dengan komunitas seni kami!
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-lg font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan Email"
                className="w-full px-4 py-3 rounded-xl bg-white 
                        shadow-lg shadow-black/10 
                        border-0 focus:ring-2 focus:ring-gray-400 
                        outline-none placeholder-gray-400"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-lg font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan Password"
                className="w-full px-4 py-3 rounded-xl bg-white 
                        shadow-lg shadow-black/10 
                        border-0 focus:ring-2 focus:ring-gray-400 
                        outline-none placeholder-gray-400"
                required
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#8D8078] hover:bg-[#7a6f68] text-white font-semibold text-lg py-3 rounded-xl transition-colors"
            >
              Sign In
            </button>

            {/* Sign Up Link */}
            <p className="text-center text-gray-700">
              Belum punya akun?{" "}
              <button
                type="button"
                onClick={onSwitch}
                className="text-blue-600 underline hover:text-blue-800"
              >
                Buat akun
              </button>
            </p>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ArtConnectLogin;
