import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className={classes.footer}>
      <h3>Come learn and connect!</h3>
      <a
        href="https://www.linkedin.com/in/simon-k-5bba6820a/"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.linkedIn}
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a
        href="https://github.com/simonkharel/React-Course"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.gitHub}
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/lifeatcredera/"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.instagram}
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a
        href="https://www.youtube.com/results?search_query=credera"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.youtube}
      >
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
    </footer>
  );
}
export default Footer;
