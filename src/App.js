import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/home';
import Navbar from './components/navbar';
import Form from './components/Form';
import SearchImage from './components/search';
import Footer from './components/footer';
import Geo from './components/geo';

const App = function () {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<SearchImage />} />
          <Route path="form" element={<Form />} />
          <Route path="geo" element={<Geo />} />
          {/* Use Navigate to redirect to Home on unknown routes */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

