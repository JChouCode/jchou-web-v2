import React from "react"
import { Link, Router } from 'components/Router'
import { NavLink } from 'react-router-dom';
import "./css/header.css"

export class Header extends React.Component {

  activeStyle = { borderBottom: '2px solid #1C1D1E' };

  constructor(props) {
    super(props);
    this.state = {
      active: "Home"
    };
    this.setActive = this.setActive.bind(this);
  }

  setActive(item) {
    this.setState({ active: item });
  }

  render() {
    return (
      <div className="header-wrapper">
        <Link to="/" className="logo">
          <img alt="logo" src={require("./../assets/logo.png")}></img>
          <div>Chou</div>
        </Link>
        <nav id="navbar">
          <Link to="/" style={this.state.active === "Home" ? this.activeStyle : {}}
            onClick={() => this.setActive("Home")}>Home</Link>
          <Link to="/about" style={this.state.active === "About" ? this.activeStyle : {}}
            onClick={() => this.setActive("About")}>About</Link>
          <Link to="/experience" style={this.state.active === "Work" ? this.activeStyle : {}}
            onClick={() => this.setActive("Work")}>Work</Link>
          <Link to="/blog" style={this.state.active === "Blog" ? this.activeStyle : {}}
            onClick={() => this.setActive("Blog")}>Blog</Link>
          <Link to="/contact" style={this.state.active === "Contact" ? this.activeStyle : {}}
            onClick={() => this.setActive("Contact")}>Contact</Link>
        </nav>
        {/* <div id="nav-right">
         <a id="git" href="https://github.com/JChouCode">
            <svg width="19px" height="22px" viewBox="0 0 19 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
              <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Toolbar/Dark" transform="translate(-46.000000, -2.000000)" fillRule="nonzero" stroke="#000000">
                  <g id="Group-3" transform="translate(0.000000, 2.000000)">
                    <path d="M58.8972767,19.6145492 L58.8972767,17.4934028 C58.8972767,16.3784561 58.5228424,15.5584034 57.7738655,15.0331892 C58.2431536,14.9871362 58.673948,14.9226178 59.0664652,14.8396893 C59.4589824,14.7567607 59.8741302,14.6369566 60.3116921,14.4803322 C60.7493623,14.3237078 61.1418794,14.1371186 61.4892436,13.9205645 C61.836716,13.7040104 62.1705451,13.4229932 62.4908391,13.0774576 C62.8112414,12.731922 63.0796149,12.3403334 63.2961761,11.9026365 C63.5127373,11.4649396 63.6842538,10.9397255 63.810509,10.3269941 C63.9368724,9.71426271 64,9.03927962 64,8.3021554 C64,6.87395994 63.5443552,5.65767457 62.6329574,4.65329928 C63.0481052,3.54758531 63.0029522,2.34512136 62.4976067,1.04590744 C61.834388,1.06739515 61.2997525,1.15493084 60.8937003,1.30851451 C60.2846219,1.53889002 59.6011006,1.9166572 58.8431364,2.44187133 C57.769426,2.13779999 56.6550021,1.98576432 55.5000271,1.98576432 C54.3360106,1.98576432 53.2261345,2.13779999 52.1703986,2.44187133 C51.6921774,2.11015714 51.0537916,1.62030489 50.2345378,1.30851451 C49.6883685,1.10065426 49.1109871,1.01311857 48.5023933,1.04590744 C48.1354304,2.71984783 48.0903135,3.92231177 48.3670426,4.65329928 C47.4556989,5.65767457 47,6.87395994 47,8.3021554 C47,9.03927962 47.0631817,9.71426271 47.189491,10.3269941 C47.3158004,10.9397255 47.4872627,11.4649396 47.7038239,11.9026365 C47.9203851,12.3403334 48.1888127,12.731922 48.5091609,13.0774576 C48.829509,13.4229932 49.1633381,13.7040104 49.5107564,13.9205645 C49.8581747,14.1371186 50.2506919,14.3237078 50.6883079,14.4803322 C51.125924,14.6369566 51.5410176,14.7567607 51.9335348,14.8396893 C52.326052,14.9226178 52.7569005,14.9871362 53.2261345,15.0331892 C52.486199,15.5491706 52.1162583,16.3692787 52.1162583,17.4934028 L52.1162583,19.6559029 C52.5926195,20.5627671 53.7205334,21.0107731 55.5,20.9999212 C57.2794666,20.9890692 58.4118922,20.5272785 58.8972767,19.6145492 Z" id="Shape"></path>
                  </g>
                </g>
              </g>
            </svg>
          </a>
          <a id="linked" href="https://www.linkedin.com/in/jeffreychoucu/">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 512 512" space="preserve">
  <g transform="translate(1)">
    <g>
      <g>
        <path d="M68.12,4.267c-18.773,0-35.84,6.827-48.64,19.627C5.827,37.547-1,54.613-1,72.533c0,18.773,7.68,35.84,20.48,48.64
          c12.8,12.8,30.72,20.48,47.787,19.627c0,0,0.853,0,1.707,0c17.067,0,33.28-6.827,46.08-19.627
          c12.8-12.8,20.48-29.867,20.48-48.64c0.853-17.92-6.827-34.987-19.627-47.787C103.107,11.093,86.04,4.267,68.12,4.267z
           M103.107,109.227c-9.387,9.387-22.187,15.36-35.84,14.507c-12.8,0-26.453-5.12-35.84-14.507
          c-10.24-9.387-15.36-23.04-15.36-36.693s5.12-26.453,15.36-36.693c9.387-9.387,22.187-14.507,36.693-14.507
          c12.8,0,25.6,5.12,34.987,14.507c10.24,10.24,15.36,23.04,15.36,36.693S113.347,99.84,103.107,109.227z"/>
        <path d="M101.4,157.867H32.28c-13.653,0-24.747,11.093-24.747,25.6v298.667c0,13.653,11.947,25.6,25.6,25.6H101.4
          c13.653,0,25.6-11.947,25.6-24.747v-299.52C127,169.813,115.053,157.867,101.4,157.867z M109.933,482.987
          c0,4.267-4.267,7.68-8.533,7.68H33.133c-4.267,0-8.533-4.267-8.533-8.533V183.467c0-4.267,3.413-8.533,7.68-8.533h69.12
          c4.267,0,8.533,4.267,8.533,8.533V482.987z"/>
        <path d="M391.533,149.333h-17.92c-33.28,0-64.853,14.507-85.333,37.547v-11.947c0-8.533-8.533-17.067-17.067-17.067H185.88
          c-7.68,0-17.067,6.827-17.067,16.213v318.293c0,9.387,9.387,15.36,17.067,15.36h93.867c7.68,0,17.067-5.973,17.067-15.36v-184.32
          c0-28.16,20.48-50.347,46.933-50.347c13.653,0,26.453,5.12,35.84,14.507c8.533,7.68,11.947,19.627,11.947,34.987v183.467
          c0,8.533,8.533,17.067,17.067,17.067h85.333c8.533,0,17.067-8.533,17.067-17.067v-220.16
          C511,202.24,458.947,149.333,391.533,149.333z M493.933,489.813l-0.853,0.853h-83.627L408.6,307.2
          c0-20.48-5.12-35.84-16.213-46.933c-12.8-12.8-29.867-19.627-47.787-19.627c-35.84,0.853-64,29.867-64,67.413v182.613h-93.867
          V174.933h84.48l0.853,0.853v53.76l23.04-23.04l0.853-0.853c17.067-23.893,46.933-39.253,78.507-39.253h17.92
          c57.173,0,101.547,46.08,101.547,104.107V489.813z"/>
      </g>
    </g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  </svg>
          </a>
        </div> */}
      </div>
    )
  }
}
