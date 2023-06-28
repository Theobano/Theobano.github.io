import React from "react";
import { Helmet } from "react-helmet";
import { ErrorFallbackContainer } from "./ErrorFallback.style";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="center">
      <ErrorFallbackContainer>
      <Helmet>
        <title>Error - Theobano</title>
      </Helmet>
      <div className="error-fallback" role="alert">
        <h1> {error.name} </h1>
        <h2> {error.message} </h2>
        <button onClick={resetErrorBoundary}> Try again </button>
      </div>
    </ErrorFallbackContainer>
      </div>
  );
}

export default ErrorFallback;
