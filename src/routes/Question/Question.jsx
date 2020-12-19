import React from "react";
import { Link } from "react-router-dom";
import "./Question.css";

const Question = () => {
  return (
    <div>
      <header>
        <h1 className="header"> 보리와 망치에게 질문해보세요! </h1>
        <br />
        <br />
      </header>
      <section className="survey">
        <form action="question.php" method="post" />
        <h3> 질문자 </h3>
        이름 &nbsp;:&nbsp;
        <input type="text" name="name" />
        <br />
        <br />
        번호 &nbsp;:&nbsp;
        <input type="text" name="number" />
        <br />
        <br />
        성별 &nbsp;:&nbsp;
        <input type="radio" name="gender" value="남" />
        남&nbsp;&nbsp;
        <input type="radio" name="gender" value="여" />여<br />
        <br />
        <br />
        <br />
        <h3> 질문내용 </h3>
        <input type="radio" name="what" value="보리" />
        보리&nbsp;&nbsp;
        <input type="radio" name="what" value="망치" />
        망치&nbsp;&nbsp;
        <input type="radio" name="what" value="둘다" />
        둘다&nbsp;&nbsp;
        <input type="radio" name="what" value="기타" />
        기타
        <br />
        <br />
        <div className="textarea">
          <textarea name="title" rows="2" cols="90"></textarea>
          <textarea name="cont" rows="20" cols="90"></textarea>
        </div>
        <br />
        <br />
        <br />
        <h3> 설문조사 </h3>
        <p> 어떤 애완동물을 선호합니까? </p>
        <input type="checkbox" name="animal" value="강아지" />
        강아지&nbsp;&nbsp;
        <input type="checkbox" name="animal" value="고양이" />
        고양이&nbsp;&nbsp;
        <input type="checkbox" name="animal" value="그 외" />그 외&nbsp;&nbsp;
        <input type="checkbox" name="animal" value="관심없음" />
        관심없음
        <br />
        <br />
        <Link to="/">
          <button type="submit" name="submit">
            보내기
          </button>
        </Link>
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

export default Question;
