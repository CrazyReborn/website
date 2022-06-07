import React from 'react';
import YTLogo from '../images/yt_logo_mono_dark.png';
import GHLogo from '../images/GitHub-Mark-Light-64px.png';
import '../stylesheets/ProjectPreview.css';

interface ProjectInfo {
  description: string,
  screenshot: string,
}

export default function ProjectPreview(props: ProjectInfo) {
  const screenshot = props.screenshot;
  const description = props.description;
  return (
    <div className="project-preview">
      <img src={screenshot} />
      <article className="project-description">
        <p>{description}</p>
        <ul className="links">
          <a className="live-demo-link" href="#">Live Demo</a>
          <a className="yt-link" href="#"><img className="yt-logo" src={YTLogo} /></a>
          <a className="gh-link" href="#"><img className="gh-logo" src={GHLogo} /></a>
      </ul>
      </article>
    </div>
  )
}