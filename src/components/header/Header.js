import React, { useRef, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "../header/header.css";
export default function Header() {
  const headerRef = useRef(null);
  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky");
      } else {
        headerRef.current.classList.remove("stick");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  const nav_link = [
    {
      path: "/home",
      display: "home",
    },
    {
      path: "/about",
      display: "About",
    },
    {
      path: "/tours",
      display: "tours",
    },
  ];
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/* ---------logo---------  */}
            <div className="logo">
              <img src={logo} alt="img_notFound" />
            </div>
            {/* ---------logo end--------*/}
            {/* -------menu start-------- */}
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav_link.map((item, idx) => (
                  <li key={idx} className="nav_item">
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active_link" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* -------menu end-------- */}

            <div className="nav_right d-flex align-items-center gap-4">
              <div className="nav_btns d-flex align-items-center gap-4">
                <Button className="btn secondary__btn">
                  <Link to={"/login"}></Link>
                  login
                </Button>
                <Button className="btn primary__btn">
                  <Link to={"/register"}></Link>
                  Register
                </Button>
              </div>
              <span className="mobile__menu"></span>
              <i className="ri-menu-2-line"></i>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
}
