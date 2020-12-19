import React from "react";
import bgm from "../../sound/BGM.mp3";
import photo_mang_1 from "../../img/8.jpg";
import photo_mang_2 from "../../img/7.1.jpg";
import photo_mang_3 from "../../img/10.1.jpg";
import photo_mang_4 from "../../img/16.jpg";
import photo_mang_5 from "../../img/15.jpg";
import photo_bori_1 from "../../img/5.jpg";
import photo_bori_2 from "../../img/1.jpg";
import photo_bori_3 from "../../img/2.jpg";
import "./Photo.css";

const Photo = () => {
  return (
    <div>
      <header>
        <h1 className="header"> 보리와 망치의 사진첩입니다! </h1>
        <br />
        <br />
      </header>

      <article className="music">
        <p className="p_1">
          <audio controls loop>
            <source src={bgm} type="audio/mp3" />
          </audio>
          <br />
          음악과 함께 감상하세요~
        </p>
        <br />
      </article>

      <section className="clearfix">
        <img src={photo_mang_1} className="img_w" alt="mangchi" />
        <h2 className="h2_s">
          {" "}
          <em>우리집으로 온 망치 </em>
        </h2>
        <p className="p_s">
          {" "}
          망치가 형이랑 살다가 우리집에 살게되서 집으로 처음 왔을때 찍었던
          사진이에요 저는 이때 해외에 있었어서 사진으로만 망치를 봤어요.
          <a
            href="https://www.google.co.kr/search?q=%ED%8F%AC%EB%A9%94%EB%9D%BC%EB%8B%88%EC%95%88&oq=%ED%8F%AC%EB%A9%94%EB%9D%BC%EB%8B%88%EC%95%88&aqs=chrome..69i57j0l5.1002j0j7&sourceid=chrome&ie=UTF-8"
            target="포메라니안 검색"
          >
            포메라니안
          </a>
          이라는 종인데 너무 귀여웠어요. 얼른 집에가서 보고싶었던{" "}
          <i>기억에 남는 사진</i> 이에요.
        </p>
      </section>
      <br />
      <br />

      <section className="clearfix">
        <img src={photo_mang_2} className="img_w" alt="mangchi" />
        <h2 className="h2_s"> 진격의 망치 </h2>
        <p className="p_s">
          {" "}
          자고 일어났는데 일어나는 소리를 들은건지 다리를 들고 침대 밑에서
          얼굴만 <b>빼꼼</b> 내밀고 쳐다보고 있었어요! 귀여운 망치
        </p>
      </section>
      <br />
      <br />

      <section className="clearfix">
        <img src={photo_mang_3} className="img_w" alt="mangchi" />
        <h2 className="h2_s"> 물개 망치 </h2>
        <p className="p_s">
          {" "}
          망치가 자고 있는 모습이 물개 같아서 사진을 찍으려고 했는데 제가 사진
          찍는 소리에 깨버렸어요. 졸린 눈동자가 보이나요?{" "}
        </p>
      </section>
      <br />
      <br />

      <section className="clearfix">
        <img src={photo_mang_4} className="img_w" alt="mangchi" />
        <h2 className="h2_s"> 이불 속 망치 </h2>
        <p className="p_s">
          {" "}
          망치에게 베개에 누워있길래 이불을 덮히고 사진을 찍었는데 찍고 보니
          망치가{" "}
          <q>
            형 <span className="span" />
            불좀 꺼줘
          </q>
          라고 하는거 같아서 웃겼어요 ㅋㅋㅋ
        </p>
      </section>
      <br />
      <br />

      <section className="clearfix">
        <img src={photo_mang_5} className="img_w" alt="mangchi" />
        <h2 className="h2_s"> 홀딱 젖은 망치 </h2>
        <p className="p_s">
          {" "}
          산책을 갔다와서 시원하게 목욕을 했어요 근데 망치는{" "}
          <q>
            형 나한테 <span className="span_1">왜이래?</span>
          </q>
          라는 표정을 짓고 있네요 ㅋㅋㅋㅋ
        </p>
      </section>
      <br />
      <br />

      <section className="clearfix">
        <img src={photo_bori_1} className="img_w" alt="bori" />
        <h2 className="h2_s">
          {" "}
          <em>우리집으로 온 보리</em>{" "}
        </h2>
        <p className="p_s">
          {" "}
          보리가 우리집으로 왔어요~ 겁이 많아서 망치에게서 도망다녀요. 아직
          애기라서 털에 윤기도 나고 다리도 짧아요. 많이 클아이라 그런지 발은
          망치의 <b>두배</b>에요! 크기는 같은데! 믹스인데 생긴게
          <a
            href="https://www.google.co.kr/search?q=%EB%B3%B4%EB%8D%94%EC%BD%9C%EB%A6%AC&oq=%EB%B3%B4%EB%8D%94%EC%BD%9C%EB%A6%AC&aqs=chrome..69i57j0l5.1249j0j7&sourceid=chrome&ie=UTF-8"
            target="보더콜리 검색"
          >
            보더콜리
          </a>
          같고 다리가 짧은게
          <a
            href="https://www.google.co.kr/search?ei=eu4XW4uQMcm80gTlh744&q=%EC%9B%B0%EC%8B%9C%EC%BD%94%EA%B8%B0&oq=%EC%9B%B0%EC%8B%9C%EC%BD%94%EA%B8%B0&gs_l=psy-ab.3..0i67k1j0l9.65308.66639.0.66744.10.8.0.2.2.0.163.915.3j5.8.0....0...1c.1j4.64.psy-ab..6.4.268...0i131k1.0.lhTeHCq8wek"
            target="웰시코기 검색"
          >
            웰시코기
          </a>
          가 믹스된거 같은 느낌이 나요.
        </p>
      </section>
      <br />
      <br />

      <section className="clearfix">
        <img src={photo_bori_2} className="img_h" alt="bori" />
        <h2 className="h2_s"> 보리와 망치의 다툼 </h2>
        <p className="p_s">
          {" "}
          둘이 투닥투닥 싸우다가{" "}
          <span className="span_2">
            <small>(대체적으로 보리가 이겨요. 보리가 크거든요.)</small>
          </span>{" "}
          서로 맘상했는지 고개를 팍 돌리고 있는게 귀여워서 찍었어요.
        </p>
      </section>
      <br />
      <br />

      <section className="clearfix">
        <img src={photo_bori_3} className="img_h" alt="bori" />
        <h2 className="h2_s"> 보리와 망치의 산책 </h2>
        <p className="p_s">
          {" "}
          밖에 산책을 갔는데 언제 싸웠냐는 듯이 둘이서 신나게 잘 노는 모습이
          보기좋아요.
        </p>
      </section>
      <br />
      <br />
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

export default Photo;
