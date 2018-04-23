import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import asyncComponent from "./asyncComponent";

// import Home from './home'
import About from './about'
import Topics from './topics'
//
const Home = asyncComponent(() => import("./home").then(module => module.default),{ name: "Page 1" })
// const About = asyncComponent(() => import("./about").then(module => module.default),{ name: "Page 1" })
// const Topics = asyncComponent(() => import("./topics").then(module => module.default),{ name: "Page 1" })

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />
      <Route exact path="/" component={About} />
      <Route path="/about" component={Home} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

render(<App />, document.getElementById("root"));
