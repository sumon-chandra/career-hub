import { FaFacebook, FaYoutube, FaTwitter, FaGitAlt } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <>
      <div>
        <img className="w-24" src={logo} alt="logo" />
        <p className="font-bold text-5xl">Job Star.</p>
        <p className="text-2xl">Providing reliable tech since 1992</p>
        <p>Copyright © 2023 - All right reserved</p>
      </div>
      <div>
        <div className="flex gap-8">
          <FaFacebook className="w-8 h-8" />

          <FaGitAlt className="w-8 h-8" />

          <FaYoutube className="w-8 h-8" />

          <FaTwitter className="w-8 h-8" />
        </div>
      </div>
    </>
  );
};

export default Footer;
