import React, { useEffect, useState } from "react";
import { animateScroll, Link as Links } from "react-scroll";
import "../Css/header.css";
import logo from "../../Assets/img/shopping.png";
export default function Header() {
  const [scrollHeader, setScrollHeader] = useState(false);

  const changeHeader = () => {
    if (window.scrollY >= 80) {
      setScrollHeader(true);
    } else {
      setScrollHeader(false);
    }
  };
  const scrollTop = () => {
    animateScroll.scrollToTop();
  };
  useEffect(() => {
    window.addEventListener("scroll", changeHeader);
  }, []);
  return (
    <div>
      <header className={`${scrollHeader ? "scroll-header" : ""} header`}>
        <nav className="nav container">
          <Links to="/" onClick={scrollTop} className="nav__logo">
            <img src={logo} alt="" className="nav__logo-img" />
          </Links>
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">Trang Chủ</li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}
