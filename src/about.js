import React, { Fragment } from "react";
import Home from './home'
import asyncComponent from './asyncComponent'

class AboutPage extends React.Component {
  constructor() {
    super()
    this.HomeComponent = <Fragment />
    this.state = {
      show: false
    }
    this.showHome = this.showHome.bind(this)
  }

  showHome() {
    // const Home = asyncComponent(() => import("./home").then(module => module.default),{ name: "Page 1" })
    this.HomeComponent = <Home />
    this.setState({ show: true })
  }

  render() {
    const { HomeComponent } = this
    console.log(HomeComponent);
    return (
      <div>
        <h1>about</h1>
        <button onClick={this.showHome}>load home</button>
        { HomeComponent }
      </div>
    )
  }
}

export default AboutPage
