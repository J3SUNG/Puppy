import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import logo1 from "../../img/Logo1.png";
import logo2 from "../../img/Logo2.png";
import home_img1 from "../../img/2.jpg";
function header() {
  return `<a href="main.html" target="_top">
            <img src="img/logo2.png" class="logo" title="홈">
            <img src="img/logo4.png" class="logo" title="홈">
          </a><br>`;
}

const Home = () => {
  return (
    <div className="test">
      <header>
        <Link to="/" target="_top">
          <img src={logo1} class="logo" title="홈" />
          <img src={logo2} class="logo" title="홈" />
        </Link>
        <br />
      </header>
      <nav>
        <ul>
          <li>
            <a href="introduce.html">소개</a>
          </li>
          <li>
            <a href="photo.html">사진</a>
          </li>
          <li>
            <a href="video.html">영상</a>
          </li>
          <li>
            <a href="question.html">질문</a>
          </li>
        </ul>
      </nav>
      <header>
        <h1 class="header"> 망치와 보리 홈페이지에 오신것을 환영합니다! </h1>
      </header>
      <section>
        <img
          src={home_img1}
          id="main_img"
          alt="망치와 보리 사진"
          title="망치와 보리"
        />
      </section>
      <footer>
        <div class="footer">
          <b>
            망치와 보리
            <br />
            Contact : wptjd6141@gmail.com
          </b>
        </div>
      </footer>
    </div>
  );
};

export default Home;
