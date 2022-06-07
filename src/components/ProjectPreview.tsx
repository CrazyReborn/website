import React from 'react';
import YTLogo from '../images/yt_logo_mono_dark.png';
import GHLogo from '../images/GitHub-Mark-Light-64px.png';

export default function ProjectPreview(description: string, screenshot: string) {
  return (
    <div className="project-preview">
      <img src={screenshot} />
      <article className="project-description">
        {description}
      </article>
      <ul className="links">
        <a className="live-demo-link" href="#">Live Demo</a>
        <a className="yt-link" href="#"><img src={YTLogo} /></a>
        <a className="gh-link" href="#"><img src={GHLogo} /></a>
      </ul>
    </div>
  )
}