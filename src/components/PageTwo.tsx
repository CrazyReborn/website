import React from 'react';
import JsIcon from '../images/js-icon.png';
import {ReactComponent as TsIcon} from '../images/ts-icon.svg';
import {ReactComponent as NodeIcon} from '../images/node-icon.svg';
import ExpressIcon from '../images/express-icon.png';
import '../stylesheets/PageTwo.css';

export default function PageTwo() {
  return (
    <div className="page-two">
      <h2>Skillset</h2>
      <div className="icons">
        <img src={JsIcon} />
        <TsIcon />
        <NodeIcon />
        <img src={ExpressIcon} />
      </div>
    </div>
  )
}