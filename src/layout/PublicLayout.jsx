import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useLocation } from "react-router-dom";

const PublicLayout = ({ children }) => {
  const location = useLocation();

  // Define all valid paths
  const validPaths = [
    "/",
    "/about",
    "/solutions",
    "/contact",
    "/packages",
    "/auth/login",
    "/auth/register",
    "/auth/password/reset",
    "/profile",
    "/free-trial",
    "/freetest",
    "/freetest/test-result",
    "/freetest/test-result/testresultsone",
    "/freetest/hard-skill-test-result",
    "/freetest/hard-skill-test-result/testresultstwo",
  ];

  const isValidPath = validPaths.includes(location.pathname);
  return (
    <div
      className="d-flex flex-column justify-content-between"
      style={{ height: "100vh" }}
    >
      {isValidPath && <Header />}
      <main>{children}</main>
      {isValidPath && <Footer />}
    </div>
  );
};

export default PublicLayout;
