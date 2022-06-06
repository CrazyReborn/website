import React from 'react';
import { ReactComponent as Blob } from '../images/blob.svg';
import Navbar from './Navbar';

export default function PageOne() {
  return (
    <div className="page-one">
      <div className='nav-container'>
        <Navbar />
      </div>
      <div className="name-and-title">
        <h1 className="my-name">Vladislav Kuznetsov</h1>
        <h2 className="my-title">Software Developer</h2>
      </div>
    </div>
  )
}