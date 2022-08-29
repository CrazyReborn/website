import React from "react";
import JhuntScreenshot from '../images/cropped-jhunt-preview.png';
import HammiltonScreenshot from '../images/screencapture-justdare-github-io-Search-Algorithm-Visualizer-2022-06-06-16_07_58.png';
import LukasScreenshot from '../images/lightsaber-escape.jpg';
import ProjectPreview from "./ProjectPreview";
import '../stylesheets/PageTwo.css';

export default function PageTwo() {
  return (
    <div className="page-two">
      <h2>Projects</h2>
      <div className="project-wrapper">
        <ProjectPreview
          description="Jhunt is a applicaiton managment app that helps me to keep track of the process of looking for a job"
          screenshot={JhuntScreenshot}
          //this is a youtube link. should be an app link
          liveDemoLink={'https://jhunt-vk.netlify.app'}
          youtubeLink={'https://www.youtube.com/watch?v=mZMRupYp6QQ'}
          githubLink={'https://github.com/CrazyReborn/jhunt'}
        />
        <ProjectPreview
          description="Hamillton is a patfinding/sorting algorithms visualizer that i've made to learn algorithms and data structures."
          screenshot={HammiltonScreenshot}
          liveDemoLink={'https://crazyreborn.github.io/hamilton-canvas/'}
          youtubeLink={'https://www.youtube.com/watch?v=SABOhcXKXYI'}
          githubLink={'https://github.com/CrazyReborn/hamilton-canvas'}
        />
         <ProjectPreview
          description="Lukas is an experimental game where you can play as a jedi using your smartphone as a lighsaber!"
          screenshot={LukasScreenshot}
          //this is a youtube link. should be an app link
          liveDemoLink={'https://www.youtube.com/watch?v=mZMRupYp6QQ'}
          //RICKROLL REMOVE
          youtubeLink={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
          githubLink={'https://github.com/CrazyReborn/ccms-client'}
        />
      </div>
    </div>
  )
}