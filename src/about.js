import React, { Fragment } from "react";
// import Home from './home'
import asyncComponent from './asyncComponent'

class AboutPage extends React.Component {
  constructor() {
    super()
    this.HomeComponent = <Fragment />
    this.showHome = this.showHome.bind(this)
  }

  showHome() {
    const Home = asyncComponent(() => import("./home").then(module => module.default),{ name: "Page 1" })
    this.HomeComponent = <Home />
  }

  render() {
    return (
      <div>
        <h1>about</h1>
        <button onClick={this.showHome}>load home</button>
        { this.HomeComponent }
      </div>
    )
  }
}

export default AboutPage
