import { Link } from 'react-scroll';

function Footer() {
  return (
    <footer className="footer py-5 text-white" style={{ backgroundColor: '#1a1a1a', borderTop: '1px solid #333' }}>
      <div className="container">
        <div className="row gy-4 justify-content-between">
          
          {/* Kolom 1: Brand / Logo & Deskripsi Singkat */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center gap-2 mb-3">
              <img 
                src="./img/logo1.png" 
                alt="ARCA Logo" 
                style={{ height: '32px', width: 'auto', objectFit: 'contain' }} 
              />
            </div>
            <p className="text-secondary small mb-0" style={{ lineHeight: '1.6' }}>
              Ekosistem SaaS digital terintegrasi untuk mengotomatisasi operasional, mengamankan margin profit, dan meningkatkan kepuasan pelanggan restoran Anda.
            </p>
          </div>

          {/* Kolom 2: Tautan Penting */}
          <div className="col-lg-2 col-md-6">
            <p className="footer-title fw-bold text-white mb-3" style={{ fontSize: '15px' }}>Important Link</p>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
              <li>
                <Link 
                  spy={true}
                  smooth={true}
                  duration={1000}
                  to="headerbg"
                  className="text-secondary text-decoration-none"
                  style={{ cursor: 'pointer', fontSize: '14px', transition: 'color 0.2s' }}
                > 
                  Home 
                </Link>
              </li>
              <li>
                <Link to="services" spy={true} smooth={true} duration={1000} className="text-secondary text-decoration-none" style={{ cursor: 'pointer', fontSize: '14px' }}> 
                  Services 
                </Link>
              </li>
              <li>
                <Link to="about-scroll" spy={true} smooth={true} duration={1000} className="text-secondary text-decoration-none" style={{ cursor: 'pointer', fontSize: '14px' }}>
                  About Us  
                </Link>
              </li>
              <li>
                <Link to="contact" spy={true} smooth={true} duration={1000} className="text-secondary text-decoration-none" style={{ cursor: 'pointer', fontSize: '14px' }}> 
                  Contact  
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Kontak */}
          <div className="col-lg-3 col-md-6" id="contact">
            <p className="footer-title fw-bold text-white mb-3" style={{ fontSize: '15px' }}>Contact</p>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0 text-secondary" style={{ fontSize: '14px' }}>
              <li>
                <span className="text-secondary">support@arcapos.com</span>
              </li>
              <li>
                <span className="text-secondary">Tulungagung, Jawa Timur</span>
              </li>
              <li>
                <span className="text-secondary">+62 831-7576-5979</span>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Sosial Media */}
          <div className="col-lg-2 col-md-6">
            <p className="footer-title fw-bold text-white mb-3" style={{ fontSize: '15px' }}>Social Media</p>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0" style={{ fontSize: '14px' }}>
              <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/PoietesDev" className="text-secondary text-decoration-none">
                  GitHub
                </a>
              </li>
              <li>
                <a target="_blank" rel="noreferrer" href="https://twitter.com" className="text-secondary text-decoration-none">
                  Twitter
                </a>
              </li>
              <li>
                <a target="_blank" rel="noreferrer" href="https://linkedin.com" className="text-secondary text-decoration-none">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Garis Pemisah & Copyright */}
        <div className="text-center text-secondary small mt-4 pt-4 border-top border-secondary opacity-75">
          &copy; {new Date().getFullYear()} ARCA POS & CRM. All rights reserved.
        </div>
      </div>

    </footer>
  );
}

export default Footer;