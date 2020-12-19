import React from "react";
import mang_1 from "../../img/8.1.png";
import mang_2 from "../../img/망치4.png";
import bori_1 from "../../img/5.1.png";
import bori_2 from "../../img/보리2.png";
import "./Introduce.css";

const Introduce = () => {
  return (
    <div>
      <header>
        <h1 className="header"> 망치와 보리를 소개합니다! </h1>
        <br />
        <br />
      </header>

      <section>
        <a href={mang_1} className="introduce_img" target="Mangchi">
          클릭!
        </a>
        <iframe src={mang_2} className="iframe" name="Mangchi"></iframe>
        <ul className="ul_list">
          <li className="li_list">
            이름 : <strong>망치</strong>
          </li>
          <li className="li_list">별명 : 해머</li>
          <li className="li_list">나이 : 1살</li>
          <li className="li_list">성별 : 수컷</li>
          <li className="li_list">종 : 포메</li>
          <li className="li_list">몸무게 : 3.5kg</li>
          <li className="li_list">성격 : 활발함</li>
          <li className="li_list">좋아하는것: 산책, 간식</li>
          <li className="li_list">사는 곳 : 대구</li>
        </ul>
        <br />
        <br />
        <br />
      </section>

      <section>
        <a href={bori_1} className="introduce_img" target="Boli">
          클릭!
        </a>
        <iframe src={bori_2} className="iframe" name="Boli"></iframe>
        <ul className="ul_list">
          <li className="li_list">
            이름 : <strong>보리</strong>{" "}
          </li>
          <li className="li_list">별명 : 아이보리</li>
          <li className="li_list">나이 : 7개월</li>
          <li className="li_list">성별 : 암컷</li>
          <li className="li_list">종 : 믹스</li>
          <li className="li_list">
            몸무게 :{" "}
            <abbr title="보리의 몸무게에 소수점은 버려주세요!">
              <del>7.2kg</del>
            </abbr>{" "}
            7kg
          </li>
          <li className="li_list">
            성격 : <mark>내성적</mark> <small>(갑자기 다가가면 놀래요!)</small>
          </li>
          <li className="li_list">좋아하는것: 주인님, 산책</li>
          <li className="li_list">사는 곳 : 대구</li>
        </ul>
        <br />
        <br />
      </section>

      <header className="header">
        <h2> 한눈에 비교하기 </h2>
      </header>

      <section>
        <table className="table">
          <tbody>
            <tr>
              <td></td>
              <td>
                <b>망치</b>
              </td>
              <td>
                <b>보리</b>
              </td>
            </tr>
            <tr>
              <td>이름</td>
              <td>망치</td>
              <td>보리</td>
            </tr>
            <tr>
              <td>별명</td>
              <td>해머</td>
              <td>아이보리</td>
            </tr>
            <tr>
              <td>나이</td>
              <td>1살</td>
              <td>7개월</td>
            </tr>
            <tr>
              <td>성별</td>
              <td>수컷</td>
              <td>암컷</td>
            </tr>
            <tr>
              <td>종</td>
              <td>포메</td>
              <td>믹스</td>
            </tr>
            <tr>
              <td>몸무게</td>
              <td>3.5kg</td>
              <td>7.0kg</td>
            </tr>
            <tr>
              <td>성격</td>
              <td>활발함</td>
              <td>내성적</td>
            </tr>
            <tr>
              <td>좋아하는 것</td>
              <td>산책, 간식</td>
              <td>주인님, 산책</td>
            </tr>
            <tr>
              <td>사는 곳</td>
              <td colSpan="2">대구</td>
            </tr>
          </tbody>
        </table>
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

export default Introduce;
