import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave";
import "./ProjectLight.css";
import React from "react";

function Project3() {
  return (
    <article className="project light">
      <div className="project__main">
        <img
          className="project__image"
          src="/images/vegieboy_image_large.png"
          srcSet="/images/vegieboy_image_small.png 750w, /images/vegieboy_image_large.png 1468w"
          sizes="50vw"
          alt="VegieBoy Agriproduct Sales Management System"
          width="50%"
          height="auto"
          loading="lazy"
        />
        <div data-aos="fade-left" className="project__right">
          <h3 className="project__title">VegieBoy</h3>
          <p className="project__description project__body">
            A <span className="project__specialText">trading platform</span>
            for agriproducts where sellers can list their products and consumers
            can place orders directly. Implemented secure user authentication
            and authorization features for both sellers and consumers. The
            platform also includes a{" "}
            <span className="project__specialText">search functionality</span>
            to help users easily find products based on categories or keywords.
          </p>
          <p className="project__tech project__body">
            &gt; PHP · MySQL · HTML · CSS · JavaScript · Bootstrap
          </p>
          <a
            className="project__sourceCode"
            //href="https://github.com/urgyan-ladakh/VegieBoy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
          >
            <FaGithub className="project__githubLogo" size={25} />
            <h3 className="project__sourceCodeText">Source Code</h3>
          </a>
        </div>
      </div>
      <DarkWave />
    </article>
  );
}

export default Project3;
