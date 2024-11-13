// src/Layouts/DefaultLayout.jsx
import Header from "../Components/Header";
import React, {Suspense} from "react";
import "tailwindcss/tailwind.css";
import PropTypes from "prop-types";
import Chatbot from "../Components/Chatbot";
import ErrorBoundary from "../Components/ErrorBoundary";
import {useLocation} from "react-router-dom";
import {ScaleLoader} from "react-spinners";

const DefaultLayout = ({children}) => {
    const location = useLocation(); // Get current path

    // Define default values for loader
    const color = "#000"; // Set your preferred color
    const loading = true; // This is the loading state
    const override = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
    };

    return (
        <div className="w-full min-h-screen">
            <Header/>
            {/* Reset ErrorBoundary key when path changes */}
            <ErrorBoundary key={location.pathname}>
                <Suspense fallback={
                    <div className="w-full h-full flex items-center justify-center">
                        <ScaleLoader
                            color={color}
                            loading={loading}
                            cssOverride={override}
                            size={250}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    </div>
                }>
                    {children}
                </Suspense>
            </ErrorBoundary>
            {/*/!*<Chatbot/>*  uncomment this to use your chat/}*/}
        </div>
    );
};

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
