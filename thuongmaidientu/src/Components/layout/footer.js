import React from "react";
import logo from "../../Assets/img/shopping.png";
import {
  FaRegEnvelope,
  FaCaretRight,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import "../Css/footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid container grid">
        <div className="footer__content">
          <a href="/" className="footer__logo">
            <img src={logo} alt="" className="footer__logo-img" />
          </a>
          <p className="footer__description">
            Bạn thấy trang thương mại điện tử này như thế nào? có khiến bạn hài
            lòng hay thất vọng? hãy liên hệ và góp ý cho chúng tôi.
          </p>
          <ul className="tooter__contact">
            <li className="footer__contact-item">
              <AiOutlinePhone className="icon" /> +84 7777 566 84
            </li>
            <li className="footer__contact-item">
              <MdOutlineLocationOn className="icon" /> Ho Chi Minh
            </li>
            <li className="footer__contact-item">
              <FaRegEnvelope className="icon" /> thuongmaidientu@reactjs.com
            </li>
          </ul>
        </div>
        <div className="footer__content">
          <h3 className="footer__title">Thông tin</h3>
          <ul className="footer__links">
            <li>
              <a href="#about" className="footer__link">
                <FaCaretRight className="icon" />
              </a>
            </li>
            <li>
              <a href="#menu" className="footer__link">
                <FaCaretRight className="icon" />
              </a>
            </li>
            <li>
              <a href="#features" className="footer__link">
                <FaCaretRight className="icon" />
              </a>
            </li>
            <li>
              <a href="#gallery" className="footer__link">
                <FaCaretRight className="icon" />
              </a>
            </li>
            <li>
              <a href="#team" className="footer__link">
                <FaCaretRight className="icon" />
              </a>
            </li>
            <li>
              <a href="#reservation" className="footer__link">
                <FaCaretRight className="icon" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__content">
          <h3 className="footer__title">Khuyến mãi</h3>
          <div className="footer__opening-hour">
            <ul className="opening__hour-list">
              <li className="opening__hour-item">
                <span></span>
                <span></span>
              </li>
              <li className="opening__hour-item">
                <span></span>
                <span></span>
              </li>
              <li className="opening__hour-item">
                <span></span>
                <span></span>
              </li>
              <li className="opening__hour-item">
                <span></span>
                <span></span>
              </li>
              <li className="opening__hour-item">
                <span></span>
                <span></span>
              </li>
              <li className="opening__hour-item">
                <span></span>
                <span></span>
              </li>
              <li className="opening__hour-item">
                <span></span>
                <span></span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__content">
          <h3 className="footer__title">Ủng hộ</h3>
          <p className="footer__description">
            để lại ủng hộ để chúng tôi có thể phát triển hơn
          </p>
          <div action="" className="subscribe__form">
            <input type="text" className="" placeholder="" />
            <label>Email</label>
            <button className="btn btn--flex subscribe__btn">
              <FaRegEnvelope /> Ủng hộ ngay
            </button>
          </div>
          <div className="footer__socials">
            <h3 className="footer__social-follow">Theo dõi chúng tôi</h3>
            <div className="footer__social-links">
              <div className="footer__social-link">
                <FaFacebookF />
              </div>
              <div className="footer__social-link">
                <FaTwitter />
              </div>
              <div className="footer__social-link">
                <FaLinkedinIn />
              </div>
              <div className="footer__social-link">
                <FaYoutube />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="copyright__text">
        &copy; Copyright 2025 <span>Title</span> All Rights Reserved.
      </p>
    </footer>
  );
}
