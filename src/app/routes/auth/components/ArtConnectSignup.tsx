/*
 * Created on Fri Dec 05 2025
 *
 * Copyright (c) 2025 Your Company
 */

import React, { useState } from "react";

type SignupPayload = {
  email: string;
  name: string;
  password: string;
};

type ArtConnectSignupProps = {
  onSignup?: (payload: SignupPayload) => void;
  onSwitch?: () => void;
};

const ArtConnectSignup: React.FC<ArtConnectSignupProps> = ({ onSignup, onSwitch }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!email || !name || !password) {
      alert("Mohon lengkapi semua field");
      return;
    }
    onSignup?.({ email, name, password });
  };

  return (
    <div className="min-h-screen bg-[#EDEDED] flex items-center justify-center">
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
                autoComplete="email"
              />
            </div>

            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-lg font-semibold mb-2">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Masukkan Nama"
                className="w-full px-4 py-3 rounded-xl bg-white 
                        shadow-lg shadow-black/10 
                        border-0 focus:ring-2 focus:ring-gray-400 
                        outline-none placeholder-gray-400"
                autoComplete="name"
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
                autoComplete="new-password"
              />
            </div>

            {/* Terms Text */}
            <p className="text-sm text-gray-700">
              Dengan membuat akun, Anda menyetujui{" "}
              <a href="#" className="underline hover:text-gray-900">
                Ketentuan Penggunaan
              </a>{" "}
              dan{" "}
              <a href="#" className="underline hover:text-gray-900">
                Kebijakan Privasi
              </a>
              .
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#8D8078] hover:bg-[#7a6f68] text-white font-bold text-md py-3 rounded-xl transition-colors"
            >
              Buat Akun
            </button>

            {/* Login Link */}
            <p className="text-center text-gray-700">
              Sudah punya akun?{" "}
              <button
                type="button"
                onClick={onSwitch}
                className="text-blue-600 underline hover:text-blue-800"
              >
                Login akun
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ArtConnectSignup;
