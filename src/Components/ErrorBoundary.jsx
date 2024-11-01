// src/Components/ErrorBoundary.jsx
import React from "react";
import PropTypes from "prop-types";
import error from "../assets/error.jpg";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught by ErrorBoundary:", error, info);
  }

  componentDidUpdate(prevProps, prevState) {
    // If there's an error, set the body overflow to hidden
    if (this.state.hasError && !prevState.hasError) {
      document.body.style.overflow = "hidden";
    }

    // If the error state has changed back to false, restore the overflow
    if (!this.state.hasError && prevState.hasError) {
      document.body.style.overflow = "auto";
    }
  }

  componentWillUnmount() {
    // Clean up when the component unmounts
    document.body.style.overflow = "auto";
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full  flex justify-center items-center overflow-hidden">
          <img
            src="https://media.istockphoto.com/id/1142645029/vi/vec-to/c%C3%A1ch-ly-d%C6%B0%E1%BB%9Bi-b%C4%83ng-x%C3%A2y-d%E1%BB%B1ng.jpg?s=612x612&w=0&k=20&c=xlGpG7ydcrtxyHL03-ZCiBcEVULfxy6GWYaJej_zIqw="
            alt="Site under maintenance"
            className="bg-cover"
          />
        </div>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
