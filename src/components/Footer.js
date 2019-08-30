import React from "react"
import GitHubButton from 'react-github-btn'
import "./css/footer.css"

export class Footer extends React.Component {
  render() {
    return (
      <div className="footer-wrapper">
        <div className="logo">
          <img alt="logo" src={require("./../assets/logo.png")}></img>
          <div>Chou</div>
        </div>
        <div className="bar"></div>
        <div id="copyright">© Copyright 2019 Chou.<br></br>All rights reserved.</div>
      </div>
    )
  }
}