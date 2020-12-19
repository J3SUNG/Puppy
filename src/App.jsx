import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import Home from "./routes/Home/Home.jsx";
import Introduce from "./routes/Introduce/Introduce.jsx";
import Photo from "./routes/Photo/Photo.jsx";
import Video from "./routes/Video/Video.jsx";
import Question from "./routes/Question/Question.jsx";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/Introduce" component={Introduce} />
      <Route path="/Photo" component={Photo} />
      <Route path="/Video" component={Video} />
      <Route path="/Question" component={Question} />
      <div className="route"></div>
    </HashRouter>
  );
}

export default App;
