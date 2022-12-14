import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import Logo from "../../static/images/logo.webp";
import useWindowDimensions from "../../utils/useWindowDimensions";
import classes from "./index.module.scss";
import Sidebar from "../Sidebar/index";

const Navbar = () => {
  const history = useHistory();
  const location = useLocation();
  const goToHome = () => {
    history.push("/");
  };
  const { width } = useWindowDimensions();

  return (
    <div className={classes.navbarContainer}>
      <div className={classes.logoWrapper}>
        <img className={classes.logo} src={Logo} alt='logo' onClick={goToHome} />
      </div>
      {width === "lg" ? (
        <div className={classes.menuWrapper}>
          <a className={location.pathname === "/" ? `${classes.active}` : ""}>
            <Link className="link" to="/">
              Beranda
            </Link>
          </a>
          <a className={location.pathname === "/about" ? `${classes.active}` : ""}>
            <Link className="link" to="/about">
              Tentang Sekolah
            </Link>
          </a>
          <a className={location.pathname === "/information" ? `${classes.active}` : ""}>
            <Link className="link" to="/information">
              Informasi
            </Link>
          </a>
          <a className={location.pathname === "/contact" ? `${classes.active}` : ""}>
            <Link className="link" to="/contact">
              Hubungi Kamu
            </Link>
          </a>
          <a className={location.pathname === "/login" ? `${classes.active}` : ""}>
            <Link className="link" to="/login">
              Login
            </Link>
          </a>
        </div>
      ) : (
        <Sidebar />
      )}
    </div>
  );
};

export default Navbar;
