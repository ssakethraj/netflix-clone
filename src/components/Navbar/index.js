import { useEffect, useState } from "react";
import "./styles.css";

export default function Navbar() {
  const [showBlackNavbar, setShowNavBar] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setShowNavBar(true);
      } else {
        setShowNavBar(false);
      }
    });
    return () => window.removeEventListener("scroll");
  }, []);
  return (
    <div className={`navbar ${showBlackNavbar && "navbar_blackbg"} `}>
      <img
        className="navbar__logo"
        alt="Netflix logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
      />
      <img
        className="navbar__avatar"
        alt="Avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
      />
    </div>
  );
}
