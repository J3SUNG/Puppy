import React from "react";
import video_1 from "../../video/2.mp4";
import video_2 from "../../video/3.mp4";
import "./Video.css";

const Video = () => {
  return (
    <div>
      <header>
        <h1 class="header"> 영상을 통해 구경해보세요! </h1>
        <br />
        <br />
      </header>

      <section>
        <video controls className="video">
          <source src={video_1} type="video/mp4" />
        </video>
        <h2 class="header">보리의 호이 호이</h2>
        <br />
        <br />
      </section>

      <section>
        <video controls className="video">
          <source src={video_2} type="video/mp4" />
        </video>
        <h2 class="header">보리와 망치</h2>
        <br />
        <br />
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

export default Video;
