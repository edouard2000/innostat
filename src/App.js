// src/App.js
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorBoundary from "./components/ErrorBoundary";

const Home = lazy(() => import("./components/Home"));
const TeamPage = lazy(() => import("./pages/TeamPage"));
const FaqPage = lazy(() => import("./pages/FaqPage"));
const ServiceDetailPage = lazy(() => import("./pages/ServiceDetailPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/services/:id" element={<ServiceDetailPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
}

export default App;
