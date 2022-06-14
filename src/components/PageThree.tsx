import React from 'react';
import JsLogo from '../images/js-icon-dark.png';
import TsLogo from '../images/ts-mono.png';
import NodeLogo from '../images/nodejs-icon-logo-black-and-white.png';
import ReactLogo from '../images/react-icon.png';
import MongoLogo from '../images/mongodb-icon-green.png';
import ExpressLogo from '../images/express-icon.png';
import '../stylesheets/PageThree.css';

export default function PageThree () {
  return (
    <div className="page-three">
      <h2>Skillset</h2>
      <div className="desktop">
        <img src={JsLogo} />
        <img src={TsLogo} />
        <img src={NodeLogo} />
        <img src={ReactLogo} />
        <img src={MongoLogo} />
        <img src={ExpressLogo} />
      </div>
      <div className="mobile" >
        <ul>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
        </ul>
        <ul>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>Java</li>
        </ul>
      </div>
    </div>
  )
}