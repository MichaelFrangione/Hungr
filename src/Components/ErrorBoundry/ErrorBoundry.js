import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";

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
      return <Typography variant="h1">An error has occured.</Typography>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
