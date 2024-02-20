import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';  // Import the Layout component
import Home from './pages/Home';
import Applicants from './pages/Applicants';
import AddApplicant from './pages/AddApplicant';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the home page */}
        <Route path="/" element={<Layout><Home /></Layout>} />

        {/* Route for the applicants page */}
        <Route path="/applicants" element={<Layout><Applicants /></Layout>} />

        {/* Route for the add applicant page */}
        <Route path="/add-applicant" element={<Layout><AddApplicant /></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;

/* This is the main component that sets up routing for the application using React Router.
The BrowserRouter is used to enable navigation within the application.
The Routes component defines the routes for different pages.
The Route components associate a path with a specific page component.
The Layout component is wrapped around each page to provide a consistent layout structure.
Three routes are defined for the home page, applicants page, and add applicant page.
Each route renders the associated page component within the Layout.*/
