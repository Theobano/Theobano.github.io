import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./index.css";

function NotFound() {
  const [randomQuote, setRandomQuote] = useState();

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setRandomQuote(data);
      });
  }, []);
  return (
    <div className="center">
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <div className="not-found">
        <div className="oops">
          <h1>Oops!</h1>
          <div className="tiny-text">404 - page not found</div>
          <div>Looks like you lost your way.</div>
          <div>
            Let's go <Link to="/">home</Link>
          </div>
        </div>
        {randomQuote ? (
          <div>
            <div>Here is a random quote for you:</div>
            <div className="quote">
              <div>
                <div className="quote-text">
                  <q>{randomQuote.content}</q>
                </div>
                <div className="quote-author">- {randomQuote.author}</div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default NotFound;
