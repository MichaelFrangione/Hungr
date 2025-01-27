import React, { Component } from "react";
import ErrorModal from "Components/ErrorModal";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.warn(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorModal />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
