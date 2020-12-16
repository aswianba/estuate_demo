import React from "react";

class ErrorBounday extends React.Component {
  state = { error: false };

  componentDidCatch(error, errorInfo) {
    this.setState({ error: true });
  }

  render() {
    return this.state.error ? (
      <div className="row">
        <div className="col-sm-6">ERROR LOADING PAGE</div>
      </div>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBounday;
