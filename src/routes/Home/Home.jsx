import React from "react";
import "./Home.css";
import home_img1 from "../../img/2.jpg";

const Home = () => {
  return (
    <div>
      <header>
        <h1 className="header">
          {" "}
          망치와 보리 홈페이지에 오신것을 환영합니다!{" "}
        </h1>
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
        <div className="footer">
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
