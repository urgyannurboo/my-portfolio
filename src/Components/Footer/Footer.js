import Logo from "../NavBar/Logo";
import "./Footer.css";
import SocialMediaIcons from "./SocialMediaIcons";

function Footer() {
  return (
    <footer className="footer">
      <SocialMediaIcons />
      <Logo />
      <p className="footer__copyright">Copyright © 2025 Urgyan Nurboo.</p>
    </footer>
  );
}

export default Footer;
