import Header from "../Components/Header";
import React, { lazy, Suspense } from "react"; // Import Suspense
import PropTypes from "prop-types";
const DefaultLayout = ({ children }) => {
  return (
    <div className="w-full min-h-screen ">
      <Header />
      <Suspense fallback={<>Loading...</>}>{children}</Suspense>
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
