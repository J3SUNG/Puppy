import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../img/Logo1.png";
import logo2 from "../img/Logo2.png";
import "./Navigation.css";

function Navigation() {
  return (
    <div>
      <header>
        <Link to="/" target="_top">
          <img src={logo1} className="logo" title="홈" alt="logo" />
          <img src={logo2} className="logo" title="홈" alt="logo" />
        </Link>
        <br />
      </header>
      <nav className="nav">
        <ul>
          <li>
            <Link to="Introduce">소개</Link>
          </li>
          <li>
            <Link to="Photo">사진</Link>
          </li>
          <li>
            <Link to="Video">영상</Link>
          </li>
          <li>
            <Link to="Question">질문</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
