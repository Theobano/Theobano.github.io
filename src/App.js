import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components";
import ErrorFallback from "./components/ErrorFallback";
import Loader from "./components/Loader";
import NotFound from "./routes/NotFound";

const Home = React.lazy(() => import("./routes/home/Home"));
const About = React.lazy(() => import("./routes/about/About"));
const Contact = React.lazy(() => import("./routes/contact/Contact"));
const Projects = React.lazy(() => import("./routes/projects/Projects"));
const Footer = React.lazy(() => import("./components/Footer"));

function App() {
  return (
    <div id="app">
      <NavBar />
      {/* <div> */}
      <section className="main-container">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              path="/"
              element={
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                  <Home />
                </ErrorBoundary>
              }
            />
            <Route
              path="/about"
              element={
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                  <About />
                </ErrorBoundary>
              }
            />
            <Route
              path="/contact"
              element={
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                  <Contact />
                </ErrorBoundary>
              }
            />
            <Route
              path="/projects"
              element={
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                  <Projects />
                </ErrorBoundary>
              }
            />
           
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </section>
      <Suspense>
        <Footer />
      </Suspense>
      {/* </div> */}
    </div>
  );
}

export default App;
