import React from "react";
import { Helmet } from "react-helmet";
import "./index.css";

function NotFound() {
  return (
    <div className="center">
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <div className="not-found">
        <h1>404</h1>
        <div>Page not found</div>
      </div>
    </div>
  );
}

export default NotFound;
