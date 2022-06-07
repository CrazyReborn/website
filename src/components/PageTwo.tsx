import React from "react";
import JhuntScreenshot from '../images/cropped-jhunt-preview.png';
import AlgoVisScreenshot from '../images/cropped-jhunt-preview.png';
import LukasScreenshot from '../images/lightsaber-escape.jpg';
import ProjectPreview from "./ProjectPreview";

export default function PageTwo() {
  return (
    <div className="page-two">
      <h2>Projects</h2>
      <div className="project-wrapper">
        <ProjectPreview
          description="Jhunt is a applicaiton managment app that helps me to keep track of the process of looking for a job"
          screenshot={JhuntScreenshot}
          />
      </div>
    </div>
  )
}