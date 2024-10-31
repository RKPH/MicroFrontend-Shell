// src/Layouts/DefaultLayout.jsx
import Header from "../Components/Header";
import React, { lazy, Suspense } from "react";
import PropTypes from "prop-types";
import Chatbot from "../Components/Chatbot";

const DefaultLayout = ({ children }) => {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <Suspense fallback={<>Loading...</>}>{children}</Suspense>
      <Chatbot />
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
