// src/Layouts/DefaultLayout.jsx
import Header from "../Components/Header";
import React, {lazy, Suspense} from "react";
import "tailwindcss/tailwind.css";
import PropTypes from "prop-types";
import Chatbot from "../Components/Chatbot";
import ErrorBoundary from "../Components/ErrorBoundary";
import {useLocation} from "react-router-dom";

const DefaultLayout = ({children}) => {
    const location = useLocation(); // Get current path

    return (
        <div className="w-full min-h-screen">
            <Header/>
            {/* Reset ErrorBoundary key when path changes */}
            <ErrorBoundary key={location.pathname}>
                <Suspense fallback={<div
                    className="w-full h-full bg-red-200 items-center justify-center">Loading...</div>}>{children}</Suspense>
            </ErrorBoundary>
            <Chatbot/>
        </div>
    );
};

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
