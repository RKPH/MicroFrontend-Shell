// src/Layouts/DefaultLayout.jsx

import React, { lazy, Suspense } from "react";
import "tailwindcss/tailwind.css";
import PropTypes from "prop-types";
import Chatbot from "../Components/Chatbot";
import ErrorBoundary from "../Components/ErrorBoundary";
import { useLocation } from "react-router-dom";

const NoheaderLayout = ({ children }) => {
  const location = useLocation(); // Get current path

  return (
    <div className="w-full min-h-screen">
     
      {/* Reset ErrorBoundary key when path changes */}
      <ErrorBoundary key={location.pathname}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </ErrorBoundary>
      <Chatbot />
    </div>
  );
};

NoheaderLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NoheaderLayout;
