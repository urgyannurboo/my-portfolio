import LightWave from "../Waves/LightWave";
import "./Contact.css";
import { FaLinkedin, FaMailBulk } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div data-aos="fade-right" className="contact__body">
        <h2 className="contact__heading">Contact Me</h2>
        {
          <p className="contact__p">
            Currently I am looking for Software Developer Roles
          </p>
        }
        <div className="contact__option">
          <FaMailBulk className="contact__logo" size={45} />
          <a href="mailto: unurboo@gmail.com">
            <span className="contact__text">unurboo@gmail.com</span>
          </a>
        </div>
        <div className="contact__option">
          <FaLinkedin className="contact__logo" size={45} />
          <a
            href="https://www.linkedin.com/in/urgyan-n-666a0213b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="my Linkedin"
          >
            <span className="contact__text">Urgyan Nurboo</span>
          </a>
        </div>
      </div>
      <LightWave />
    </section>
  );
}

export default Contact;
