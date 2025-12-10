/*
 * Created on Thu Nov 27 2025
 *
 * Copyright (c) 2025 Your Company
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryProvider } from './providers/QueryProvider';

import LoginPage from "./app/routes/auth/register/RegisterPage";
import SignupPage from "./app/routes/auth/signin/SigninPage";

import HomePage from './app/routes/home/HomePage';
import { FeedPage } from './app/routes/community/feed/FeedPage';
import { FeaturePage } from './app/routes/community/feature/FeaturePage';

import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { Section1 } from './layout/Section1';

import './styles/globals.css';

function App() {
  return (
    <QueryProvider>
      <Router>
        <Routes>

          {/* Halaman Auth */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          {/* Halaman Utama */}
          <Route
            path="/"
            element={
              <div className="min-h-screen flex flex-col">
                <Header />

                <Section1 />

                <main className="flex-1">
                  <HomePage />
                </main>

                <Footer />
              </div>
            }
          />

          <Route
            path="/feed"
            element={
              <div className="min-h-screen flex flex-col">
                <Header />
                <Section1 />
                <main className="flex-1">
                  <FeedPage />
                </main>
                <Footer />
              </div>
            }
          />

          <Route
            path="/feature"
            element={
              <div className="min-h-screen flex flex-col">
                <Header />
                <Section1 />
                <main className="flex-1">
                  <FeaturePage />
                </main>
                <Footer />
              </div>
            }
          />

        </Routes>
      </Router>
    </QueryProvider>
  );
}

export default App;

