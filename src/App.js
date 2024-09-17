import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import FrontPage from './Components/FrontPage/FrontPage';
import PropertyListing from './Components/Properties/PropertyListing';
import PropertyListingExtra from './Components/Properties/PropertyListingExtra';
import PropertyTypesBlock from './Components/Properties/PropertyTypes/PropertyTypesBlock'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
        <>
        <FrontPage />
        <PropertyTypesBlock animationStatus={false} />
        <PropertyListing/>
        </>
        } />
        <Route path="/property-listing" element={<PropertyListing />} />
        <Route path="/property-listing-extra" element={<PropertyListingExtra />} />
      </Routes>
    </Router>
  );
}

export default App;
