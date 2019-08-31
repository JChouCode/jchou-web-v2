import React from 'react'
import { Link, Router } from 'components/Router'
import GitHubButton from 'react-github-btn'
import "./css/index.css"

export default () => (
  <div className="index">
    <h1>Greetings 👋<br></br>
      my name is Jeffrey Chou</h1>
    {/* <div id="circles">
      <div id="circle-large"></div>
      <div id="circle-medium"></div>
      <div id="circle-small"></div>
    </div> */}

    <div id="circle-medium">
      <svg
        width="600"
        height="600"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(300,300)">
          <path d="M163.5,-105.1C192,-45.2,181.3,26.7,147.5,80C113.7,133.3,56.9,168.2,-3.2,170C-63.2,171.8,-126.4,140.7,-168.3,82.7C-210.2,24.7,-230.7,-60.2,-199,-121.9C-167.4,-183.7,-83.7,-222.3,-8.1,-217.7C67.5,-213,135.1,-165,163.5,-105.1Z" fill="#681d7e" />
        </g>
      </svg>
    </div>
    <div id="circle-small">
      <svg
        width="600"
        height="600"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(300,300)">
          <path d="M137.1,-60.2C179,-6.7,215.1,69.2,191.2,122.4C167.4,175.7,83.7,206.3,15,197.7C-53.7,189,-107.4,141,-130,88.4C-152.7,35.8,-144.3,-21.3,-117.5,-66.2C-90.6,-111,-45.3,-143.5,1.2,-144.2C47.6,-144.8,95.3,-113.7,137.1,-60.2Z" fill="#ff5847" />
        </g>
      </svg>
    </div>
    <div id="circle-large">
      <svg
        width="600"
        height="600"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(300,300)">
          <path d="M135.9,-131.2C181.7,-90,228.4,-45,238.6,10.3C248.9,65.5,222.7,131.1,176.9,176.1C131.1,221.1,65.5,245.5,8.5,237C-48.6,228.6,-97.1,187.1,-122.1,142.1C-147.1,97.1,-148.6,48.6,-148.2,0.4C-147.8,-47.8,-145.7,-95.7,-120.7,-136.9C-95.7,-178,-47.8,-212.5,-1.4,-211.1C45,-209.7,90,-172.4,135.9,-131.2Z" fill="#ffdfca" />
        </g>
      </svg>
    </div>
    {/* <img alt="circles" id="circles" src={require("./../assets/circles-web.png")}></img> */}
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
        <div className="contact-item-img">
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
        </div>
        <div className="contact-item-text">
          Follow me<br></br>
          on Github
        </div>
      </div>
      <div className="contact-item">
        <div className="contact-item-img">
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn icon</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
        </div>
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
