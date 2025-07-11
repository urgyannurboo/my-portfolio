import LightWave from "../Waves/LightWave";
import { NavHashLink } from "react-router-hash-link";
import { useEffect } from "react";
import Aos from "aos";
import "./About.css";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="about" className="about">
      <div data-aos="fade-right" className="about__text">
        <h2 className="about__heading">About Me</h2>
        <p className="about__body">
          👋 Hello! My name is Urgyan Nurboo, and I am from{" "}
          <span className="about__specialText">Pachikhar, Ladakh</span>. I have
          completed my B.Tech in Information Technology from{" "}
          <span className="about__specialText">IIIT Allahabad (2024)</span>.
          <br />
          <br />
          💥 I am a passionate Software Developer with a strong foundation in{" "}
          <span className="about__specialText">algorithms</span>,{" "}
          <span className="about__specialText">data structures</span>, and{" "}
          <span className="about__specialText">full-stack development</span>.
        </p>
        <br />
        <p className="about__body">
          🛠️ My technical skill set includes proficiency in{" "}
          <span className="about__specialText">C</span>,{" "}
          <span className="about__specialText">C++</span>,{" "}
          <span className="about__specialText">Java</span>,{" "}
          <span className="about__specialText">Python</span>,{" "}
          <span className="about__specialText">MySQL</span>, and{" "}
          <span className="about__specialText">frontend technologies</span> like
          <span className="about__specialText"> HTML</span>,{" "}
          <span className="about__specialText">CSS</span>,{" "}
          <span className="about__specialText">Javascript</span>,{" "}
          <span className="about__specialText">React.js</span>, and{" "}
          <span className="about__specialText">Bootstratp</span>. I also have
          experience with{" "}
          <span className="about__specialText">backend development</span> using{" "}
          <span className="about__specialText">Node.js</span> and{" "}
          <span className="about__specialText">PHP</span>.
        </p>
        <br />
        <p className="about__body">
          🌟 I enjoy taking on challenges and learning new tools and
          technologies. I aim to collaborate with talented teams and contribute
          to innovative solutions, growing both personally and professionally.
        </p>
        <br />
        <p className="about__body">
          🎨 Outside of work, I love pursuing my hobbies, which include{" "}
          <span className="about__specialText">travelling</span>,{" "}
          <span className="about__specialText">driving</span>,{" "}
          <span className="about__specialText">sketching</span>, and{" "}
          <span className="about__specialText">playing football</span>. These
          activities keep me energized and creative!
        </p>
        <br />
        <p className="about__body">
          You can reach out to me on my{" "}
          <NavHashLink className="about__specialText" smooth to="#contact">
            contact
          </NavHashLink>{" "}
          page to connect or collaborate.
        </p>
      </div>
      <img
        className="about__headshot"
        src="/images/profile_pic.jpg"
        alt="Profile Picture of Urgyan Nurboo"
        width="300"
        height="300"
      />
      <LightWave />
    </section>
  );
}

export default About;
