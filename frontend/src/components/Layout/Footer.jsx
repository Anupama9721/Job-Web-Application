import { useContext } from "react";
import { Context } from "../../main"; // adjust path if your Context lives elsewhere
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const { isAuthorized } = useContext(Context);

  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>
        <Link
          to="https://github.com/Anupama9721"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </Link>

        <Link
          to="https://www.linkedin.com/in/anupama-pandey-07513a24b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </Link>

        <Link
          to="https://leetcode.com/u/pandeyanupama255/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLeetcode />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
