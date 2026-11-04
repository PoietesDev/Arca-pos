function Header() {
  return (
    <header 
      className="position-relative text-white d-flex align-items-center justify-content-center text-center overflow-hidden"
      style={{
        backgroundImage: `url('/img/home.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '85vh',
        width: '100%'
      }}
    >
      {/* Gradien halus tipis untuk menjaga keterbacaan teks */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100" 
        style={{ 
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5))', 
          zIndex: 0 
        }}
      ></div>

      {/* Konten Utama Header */}
      <div className="container px-3 py-5 position-relative" style={{ zIndex: 1 }}>
        
        {/* Badge Label Profesional */}
        <div className="mb-3">
          <span 
            className="badge px-3 py-2 rounded-pill fw-semibold text-uppercase" 
            style={{ 
              backgroundColor: 'rgba(212, 175, 55, 0.15)', 
              color: '#d4af37', 
              border: '1px solid rgba(212, 175, 55, 0.4)', 
              fontSize: '10px', 
              letterSpacing: '2.5px' 
            }}
          >
            Next-Gen F&B SaaS Ecosystem
          </span>
        </div>

        {/* Judul dan Slogan yang Lebih Proporsional & Elegan */}
        <div className="mb-4">
          <h1 className="fw-bold fs-1 md-fs-2 mb-3" style={{ letterSpacing: '0.5px', textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
            ARCA POS & CRM
          </h1>
          <p className="fs-6 md-fs-5 mx-auto text-light opacity-90" style={{ maxWidth: '580px', textShadow: '0 1px 4px rgba(0,0,0,0.8)', lineHeight: '1.6', fontWeight: '300' }}>
            Fondasi kokoh untuk mengotomatisasi operasional, mengamankan margin profit, dan meningkatkan loyalitas pelanggan restoran Anda.
          </p>
        </div>

        {/* Tombol Aksi (Call to Action) */}
        <div className="d-flex flex-wrap justify-content-center gap-3">
          <a 
            href="#services" 
            className="btn btn-primary px-4 py-2.5 fw-semibold shadow-lg rounded-pill" 
            style={{ 
              backgroundColor: '#d4af37', 
              borderColor: '#d4af37', 
              color: '#000',
              fontSize: '14px',
              transition: 'all 0.3s ease',
              minWidth: '160px'
            }}
          >
            Mulai Coba Gratis
          </a>
          
          <a 
            href="#services" 
            className="btn px-4 py-2.5 fw-semibold text-white shadow-lg rounded-pill" 
            style={{ 
              cursor: 'pointer', 
              backgroundColor: 'rgba(255, 255, 255, 0.08)', 
              backdropFilter: 'blur(4px)',
              border: '2px solid rgba(255, 255, 255, 0.75)',
              fontSize: '14px',
              transition: 'all 0.3s ease',
              minWidth: '160px'
            }}
          >
            Pelajari Fitur
          </a>
        </div>

      </div>

      <div className="headerbg"></div>
    </header>
  );
}

export default Header;