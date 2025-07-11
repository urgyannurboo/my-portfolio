import { FaGithub } from "react-icons/fa";
import LightWave from "../Waves/LightWave";
import "./ProjectDark.css";
import React from "react";

function Project2() {
  return (
    <article className="project dark">
      <div className="project__main">
        <div data-aos="fade-right" className="project__left">
          <h3 className="project__title project__titleDark">
            N-Queens Puzzle Solver Visualizer
          </h3>
          <p className="project__description project__body">
            An interactive <span className="project__specialText">tool</span>{" "}
            designed to solve the N-Queens problem, allowing users to specify
            the board size (N) and observe step-by-step algorithmic progress.
            The tool visually represents the solving process with{" "}
            <span className="project__specialText">animated backtracking</span>
            algorithms that strategically place queens on the board.
          </p>
          <p className="project__tech project__body">
            &gt; HTML · CSS · JavaScript
          </p>
          <a
            className="project__sourceCodeDark"
            href="https://github.com/urgyannurboo/N_Queen_Visualizer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
          >
            <FaGithub className="project__githubLogo" size={25} />
            <h3 className="project__sourceCodeText">Source Code</h3>
          </a>
        </div>
        <img
          className="project__image project__imageDark"
          src="/images/n_queens_project_image_large.png"
          srcSet="/images/n_queens_project_image_small.png 750w, /images/n_queens_project_image_large.png 1468w"
          sizes="50vw"
          alt="N-Queens Puzzle Solver Visualization"
          width="50%"
          height="auto"
          loading="lazy"
        />
      </div>
      <LightWave />
    </article>
  );
}

export default Project2;
