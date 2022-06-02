import React from 'react';
import { ReactComponent as Blob } from '../images/blob.svg';

export default function PageOne () {
  return (
    <div className="page-one">
      <div className="name-and-title">
        <h1 className="my-name">Vladislav Kuznetsov</h1>
        <h2 className="my-title">Software Developer</h2>
      </div>
        <Blob className="blob" />
    </div>
  )
}