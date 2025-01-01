import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './pages/Courses';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <h1 className="text-4xl font-bold text-center py-10">HCA Training</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Courses />
            </>
          } />
          <Route path="/courses" element={<Courses />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 