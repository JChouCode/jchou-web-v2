import React from 'react'
import { Link, Router } from 'components/Router'
import GitHubButton from 'react-github-btn'
import "./css/index.css"
// import { ScrollToTopController } from 'components/scroll'

export default () => (
  <div className="index">
    <h1>Greetings 👋<br></br>
      my name is Jeffrey Chou</h1>
    {/* <div id="circles">
      <div id="circle-large"></div>
      <div id="circle-medium"></div>
      <div id="circle-small"></div>
    </div> */}
    <img alt="circles" id="circles" src={require("./../assets/circles-web.png")}></img>
    <div className="row">
      <div className="column">
        <div>
          <span>Student at Cornell</span><br></br>
          B.A Computer Science &<br></br>
          Physics '22
        </div>
        <div>
          <span>Passionate developer</span><br></br>
          Always learning new<br></br>
          tech stacks
        </div>
      </div>
      <div className="column">
        <div>
          <span>Diverse skillset</span><br></br>
          Knowledgable in<br></br>
          eight different<br></br>
          languages
        </div>
      </div>
    </div>
    <div className="contact">
      <div className="contact-item">
        <img className="contact-item-img"></img>
        <div className="contact-item-text">
          Follow me<br></br>
          on Github
        </div>
      </div>
      <div className="contact-item">
        <img className="contact-item-img"></img>
        <div className="contact-item-text">
          Check me<br></br>
          on LinkedIn
        </div>
      </div>
    </div>
    {/* <div className="footer">
      <GitHubButton href="https://github.com/jchoucode/jchou-web" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star jchoucode/jchou-web on GitHub">Star</GitHubButton>
      <p>Artwork by @Somosgalitos</p>
      <a href="https://github.com">Download Resume</a>
      <p>Copyright © Jeffrey Chou</p>
    </div> */}
  </div>

)
