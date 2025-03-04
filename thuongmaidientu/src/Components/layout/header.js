import React, { useEffect, useRef, useState } from "react";
import { animateScroll, Link as Links } from "react-scroll";
import "../Css/header.css";
import {
  CgChevronDown,
  CgUser,
  CgSearch,
  CgShoppingCart,
} from "react-icons/cg";
import logo from "../../Assets/img/shopping.png";
export default function Header() {
  const [scrollHeader, setScrollHeader] = useState(false);
  /*=========================scrolling===========================*/
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
  // scroll khi chuyen ve trang chu
  useEffect(() => {
    window.addEventListener("scroll", changeHeader);
  }, []);
  /*===========================thời gian hiển thị của dropdown=========================*/
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [hoveredMenu, setHoverdMenu] = useState(false);
  useEffect(() => {
    let timer;
    if (hoveredMenu == "home") {
      setIsHomeDropdownOpen(true);
      setIsShopDropdownOpen(false);
      setIsAboutDropdownOpen(false);
    } else if (hoveredMenu == "shop") {
      setIsShopDropdownOpen(true);
      setIsHomeDropdownOpen(false);
      setIsAboutDropdownOpen(false);
    } else if (hoveredMenu == "about") {
      setIsAboutDropdownOpen(true);
      setIsHomeDropdownOpen(false);
      setIsShopDropdownOpen(false);
    } else {
      timer = setTimeout(() => {
        setIsHomeDropdownOpen(false);
        setIsShopDropdownOpen(false);
        setIsAboutDropdownOpen(false);
      }, 200);
    }
    return () => clearTimeout(timer);
  }, [hoveredMenu]);

  /*===========================ô tìm kiếm=========================*/
  const searchInputRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(e.target)
      ) {
        searchInputRef.current.classList.remove("open");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const toggleSearch = () => {
    searchInputRef.current.classList.toggle("open");
    if (searchInputRef.current.classList.contains("open")) {
      searchInputRef.current.focus();
    }
  };

  return (
    <div>
      <header className={`${scrollHeader ? "scroll-header" : ""} header`}>
        <nav className="nav container">
          <Links to="/" onClick={scrollTop} className="nav__logo">
            <img src={logo} alt="" className="nav__logo-img" />
          </Links>
          <div className="nav__left container">
            <ul className="nav__list">
              <li
                className="dropdown"
                onMouseEnter={() => setHoverdMenu("home")}
                onMouseLeave={() => setHoverdMenu(false)}
              >
                <a className="">
                  Trang chủ <CgChevronDown />
                </a>

                {isHomeDropdownOpen && (
                  <div className="dropdown__menu">
                    <h3>
                      <strong>Trang chủ</strong>
                    </h3>
                    <ul className="">
                      <li className="">
                        <a className="" href="#">
                          Bán chạy
                        </a>
                      </li>
                      <li className="">
                        <a className="" href="#">
                          thời trang
                        </a>
                      </li>
                      <li className="">
                        <a className="" href="#">
                          Thiết bị điện tử
                        </a>
                      </li>
                      <li className="">
                        <a className="" href="#">
                          nhà cửa & đời sống
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li
                className="dropdown"
                onMouseEnter={() => setHoverdMenu("shop")}
                onMouseLeave={() => setHoverdMenu(false)}
              >
                <a className="">
                  Cửa hàng <CgChevronDown />
                </a>

                {isShopDropdownOpen && (
                  <div className="dropdown__menu shop-dropdown">
                    <div className="shop-dropdown__column">
                      <h3>
                        <strong>Loại sản phẩm</strong>
                      </h3>
                      <ul className="">
                        <li className="">
                          <a className="" href="#">
                            Tất cả sản phẩm
                          </a>
                        </li>
                        <li className="">
                          <a className="" href="#">
                            phụ kiện
                          </a>
                        </li>
                        <li className="">
                          <a className="" href="#">
                            quần áo <span className="hot-tag">HOT</span>
                          </a>
                        </li>
                        <li className="">
                          <a className="" href="#">
                            giày dép
                          </a>
                        </li>
                        <li className="">
                          <a className="" href="#">
                            công nghệ <span className="hot-tag">HOT</span>
                          </a>
                        </li>
                        <li className="">
                          <a className="" href="#">
                            sách
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="shop-dropdown__column">
                      <h3>
                        <strong>Tìm kiếm</strong>
                      </h3>
                      <ul className="">
                        <li className="">
                          <a className="" href="#">
                            sản phẩm theo loại{" "}
                            <span className="hot-tag">HOT</span>
                          </a>
                        </li>
                        <li className="">
                          <a className="" href="#">
                            sản phẩm theo đơn giá
                          </a>
                        </li>
                      </ul>
                      <h3>
                        <strong>Trang điện tử</strong>
                      </h3>
                      <ul className="">
                        <li className="">
                          <a className="" href="#">
                            giỏ hàng
                          </a>
                        </li>
                        <li className="">
                          <a className="" href="#">
                            Tài khoản
                          </a>
                        </li>{" "}
                        <li className="">
                          <a className="" href="#">
                            lịch sử mua hàng
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </li>

              <li
                className="dropdown"
                onMouseEnter={() => setHoverdMenu("about")}
                onMouseLeave={() => setHoverdMenu(false)}
              >
                <a className="">
                  Thông tin <CgChevronDown />
                </a>

                {isAboutDropdownOpen && (
                  <div className="dropdown__menu">
                    <h3>
                      <strong>Thông tin cửa hàng</strong>
                    </h3>
                    <ul className="">
                      <li className="">
                        <a className="" href="#">
                          Về chúng tôi
                        </a>
                      </li>
                      <li className="">
                        <a className="" href="#">
                          Liên hệ
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </div>
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item search-container">
                <CgSearch className="nav__item-search" onClick={toggleSearch} />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Tìm kiếm sản phẩm..."
                  className="search-input"
                />
              </li>

              <li className="nav__item">
                <a className="" href="">
                  <CgUser />
                </a>
              </li>
              <li className="nav__item">
                <a className="" href="">
                  <CgShoppingCart />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}
