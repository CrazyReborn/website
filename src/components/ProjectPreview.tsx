import React from 'react';
import YTLogo from '../images/yt_logo_mono_dark.png';
import GHLogo from '../images/GitHub-Mark-Light-64px.png';
import '../stylesheets/ProjectPreview.css';

interface ProjectInfo {
  description: string,
  screenshot: string,
  liveDemoLink: string,
  youtubeLink: string,
  githubLink: string,
}

export default function ProjectPreview(props: ProjectInfo) {
  const { 
    screenshot,
    description,
    liveDemoLink,
    youtubeLink,
    githubLink,
  } = props
  console.log(liveDemoLink);
  return (
    <div className="project-preview">
      <img src={screenshot} />
      <article className="project-description">
        <p>{description}</p>
        <ul className="links">
          <a className="live-demo-link" href={liveDemoLink} target='_blank'>Live Demo</a>
          <a className="yt-link" href={youtubeLink} target='_blank'><img className="yt-logo" src={YTLogo} /></a>
          <a className="gh-link" href={githubLink} target='_blank'><img className="gh-logo" src={GHLogo} /></a>
      </ul>
      </article>
    </div>
  )
}