import { useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const gotop = document.querySelector(".gotop");
      const nav = document.querySelector(".navbar");
      
      if (!nav) return;

      if (window.screen.width < 768 && window.scrollY > 690) {
        if (gotop) gotop.classList.add("display");
        nav.classList.add("navopened");
      } else if (window.screen.width >= 768 && window.scrollY > 220) {
        if (gotop) gotop.classList.add("display");
        nav.classList.add("navopened");
      } else {
        if (gotop) gotop.classList.remove("display");
        nav.classList.remove("navopened");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function openBar() {
    const bar = document.querySelector(".bar");
    if (bar) bar.classList.toggle("opened");
  }

  return (
    <nav className="navbar fixed-top transition-all duration-300">
      <div className="container">
        <div className="row align-items-center justify-content-between w-100 m-0">
          
          {/* Logo Brand dengan logo1.png */}
          <div className="logo-wrapper">
            <Link
              spy={true}
              smooth={true}
              duration={1000}
              to="headerbg"
              style={{ cursor: "pointer" }}
              className="d-flex align-items-center gap-2 text-decoration-none"
            >
              <img 
                src="./img/logo1.png" 
                alt="ARCA Logo" 
                style={{ height: "36px", width: "auto", objectFit: "contain" }} 
              />
            </Link>
          </div>

          {/* Menu Navigasi (Termasuk Pricing) */}
          <ul className="bar mb-0 list-unstyled d-flex align-items-center gap-4">
            <li>
              <Link
                onClick={openBar}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}
                to="headerbg"
                style={{ cursor: "pointer" }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={openBar}
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                duration={1000}
                style={{ cursor: "pointer" }}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                onClick={openBar}
                to="about-scroll"
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
                style={{ cursor: "pointer" }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={openBar}
                to="pricing"
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
                style={{ cursor: "pointer" }}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                onClick={openBar}
                to="contact"
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
                style={{ cursor: "pointer" }}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Tombol Hamburger Mobile */}
          <div className="button d-md-none" onClick={openBar} style={{ cursor: "pointer" }}>
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;