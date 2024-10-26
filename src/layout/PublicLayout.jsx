import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const PublicLayout = ({children}) => {
  return (
    <div
      className="d-flex flex-column justify-content-between"
      style={{ height: "100vh" }}
    >
      {/* <Header /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default PublicLayout;
