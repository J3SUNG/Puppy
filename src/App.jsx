import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import Home from "./routes/Home/Home";
// import Navigation from "./component/Navigation";

function App() {
  return (
    <HashRouter>
      {/* <Navigator /> */}
      {/* <Link to="/">Home</Link> */}
      <Route path="/" exact={true} component={Home} />
      <div className="route"></div>
    </HashRouter>
  );
}

export default App;
