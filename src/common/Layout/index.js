import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Header from "../Header";
import Footer from "../Footer";

const Layout = (props) => {
  const [isScrolled, setScroll] = useState(window.scrollY > 30);
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const Y = window.scrollY;
    setScroll(Y > 30);
  };

  return (
    <Fragment>
      <Header showBackground={isScrolled} />
      <main
        style={{
          gridRow: "2 / 3 ",
          height: "100%",
          background: "#f7ebeb",
          padding: ".5rem",
        }}
      >
        {props.children}
      </main>
      <Footer />
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.object,
  ]),
};

export default Layout;
