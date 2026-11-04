function About() {
  return (
    <>
      <div style={{ marginTop: '10rem', width: '100%', height: '1px' }} className="about-scroll" id="about"></div>

      <div style={{ width: '100%', padding: '40px 20px', backgroundColor: '#fff' }}>
        {/* Container utama dengan sistem Grid Flexbox murni */}
        <div 
          style={{ 
            maxWidth: '1140px', 
            margin: '0 auto', 
            display: 'flex', 
            flexWrap: 'wrap', 
            alignItems: 'center', 
            gap: '40px' 
          }}
        >
          
          {/* Kolom Kiri: Gambar (Lebar 45% di desktop, penuh di HP) */}
          <div 
            style={{ 
              flex: '1 1 45%', 
              minWidth: '280px', 
              display: 'flex', 
              justifyContent: 'center' 
            }}
          >
            <div 
              style={{ 
                width: '100%', 
                maxWidth: '450px', 
                height: '280px', 
                borderRadius: '16px', 
                overflow: 'hidden', 
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                border: '1px solid #eaeaea',
                backgroundColor: '#f9f9f9'
              }}
            >
              <img 
                alt="Tentang ARCA POS & CRM" 
                src="./img/home.jpg" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  objectPosition: 'center',
                  display: 'block' 
                }}
              />
            </div>
          </div>

          {/* Kolom Kanan: Teks (Lebar 50% di desktop, penuh di HP) */}
          <div 
            style={{ 
              flex: '1 1 50%', 
              minWidth: '280px' 
            }}
          >
            <h2 
              style={{ 
                fontSize: '28px', 
                fontWeight: 'bold', 
                color: '#222', 
                marginBottom: '20px', 
                letterSpacing: '-0.5px' 
              }}
            >
              TENTANG ARCA
            </h2>
            
            <p 
              style={{ 
                fontSize: '15px', 
                color: '#555', 
                lineHeight: '1.7', 
                marginBottom: '16px' 
              }}
            >
              <strong style={{ color: '#111' }}>ARCA POS & CRM</strong> hadir sebagai solusi digital terdepan untuk menjadi fondasi kokoh bagi bisnis Anda. Kami mengintegrasikan sistem kasir pintar (Point of Sale) dan manajemen pelanggan (CRM) dalam satu platform yang mudah, cepat, dan handal.
            </p>
            
            <p 
              style={{ 
                fontSize: '15px', 
                color: '#555', 
                lineHeight: '1.7', 
                margin: '0' 
              }}
            >
              Dengan teknologi mutakhir, ARCA membantu pemilik usaha dari berbagai skala untuk mengontrol inventori secara akurat, mempercepat transaksi penjualan, serta mempererat hubungan dengan pelanggan guna meningkatkan loyalitas dan profitabilitas bisnis Anda.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}

export default About;