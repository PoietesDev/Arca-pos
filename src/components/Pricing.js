function Pricing() {
  return (
    <div id="pricing" style={{ width: '100%', padding: '80px 20px', backgroundColor: '#f9fafb' }}>
      <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
        
        {/* Header Judul Section */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span 
            style={{ 
              display: 'inline-block',
              padding: '6px 16px', 
              borderRadius: '50px', 
              backgroundColor: 'rgba(212, 175, 55, 0.1)', 
              color: '#d4af37', 
              fontSize: '11px', 
              fontWeight: '700', 
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '12px',
              border: '1px solid rgba(212, 175, 55, 0.3)'
            }}
          >
            Investasi Terbaik
          </span>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#111', margin: '0 0 10px 0', letterSpacing: '-0.5px' }}>
            PILIHAN PAKET HARGA ARCA
          </h2>
          <p style={{ fontSize: '15px', color: '#666', margin: '0 auto', maxWidth: '600px' }}>
            Solusi fleksibel yang dirancang untuk skala bisnis kuliner Anda—dari kedai UMKM hingga jaringan restoran multi-cabang.
          </p>
        </div>

        {/* Grid Kartu Harga (3 Pilihan Paket) */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '30px',
            alignItems: 'stretch'
          }}
        >
          
          {/* Paket 1: Starter */}
          <div 
            style={{ 
              backgroundColor: '#fff', 
              borderRadius: '20px', 
              padding: '40px 30px', 
              boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
              border: '1px solid #eaeaea',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.2s'
            }}
          >
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#111', marginBottom: '8px' }}>Starter / UMKM</h3>
              <p style={{ fontSize: '13px', color: '#666', marginBottom: '24px' }}>Cocok untuk kedai, kafe kecil, atau usaha rintisan.</p>
              
              <div style={{ marginBottom: '24px' }}>
                <span style={{ fontSize: '32px', fontWeight: 'bold', color: '#111' }}>Rp 149rb</span>
                <span style={{ fontSize: '14px', color: '#666' }}> / bulan</span>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: '#444' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>✓ 1 Perangkat Kasir (POS)</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>✓ Manajemen Menu & Stok Dasar</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>✓ Laporan Penjualan Harian</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>✓ Dukungan Email & Komunitas</li>
              </ul>
            </div>

            <button 
              style={{ 
                width: '100%', 
                padding: '12px', 
                borderRadius: '50px', 
                border: '1px solid #d4af37', 
                backgroundColor: 'transparent', 
                color: '#d4af37', 
                fontWeight: '600', 
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => { e.target.style.backgroundColor = '#d4af37'; e.target.style.color = '#000'; }}
              onMouseOut={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#d4af37'; }}
            >
              Pilih Paket Starter
            </button>
          </div>

          {/* Paket 2: Professional (Featured / Paling Laris) */}
          <div 
            style={{ 
              backgroundColor: '#fff', 
              borderRadius: '20px', 
              padding: '40px 30px', 
              boxShadow: '0 10px 30px rgba(212, 175, 55, 0.15)',
              border: '2px solid #d4af37',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              transform: 'scale(1.03)'
            }}
          >
            {/* Badge Rekomendasi */}
            <div 
              style={{
                position: 'absolute',
                top: '-14px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: '#d4af37',
                color: '#000',
                fontSize: '11px',
                fontWeight: '700',
                padding: '4px 16px',
                borderRadius: '50px',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
            >
              Paling Populer
            </div>

            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#111', marginBottom: '8px' }}>Professional / Resto</h3>
              <p style={{ fontSize: '13px', color: '#666', marginBottom: '24px' }}>Ideal untuk restoran berkembang & QR Self-Ordering.</p>
              
              <div style={{ marginBottom: '24px' }}>
                <span style={{ fontSize: '32px', fontWeight: 'bold', color: '#111' }}>Rp 349rb</span>
                <span style={{ fontSize: '14px', color: '#666' }}> / bulan</span>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: '#444' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>✓ Multi Kasir (Hingga 3 Perangkat)</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>✓ QR Self-Ordering & Layar Dapur (KDS)</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>✓ Auto Food Costing (HPP & BOM)</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>✓ Integrasi Dynamic QRIS</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>✓ Dukungan Prioritas 24/7</li>
              </ul>
            </div>

            <button 
              style={{ 
                width: '100%', 
                padding: '12px', 
                borderRadius: '50px', 
                border: 'none', 
                backgroundColor: '#d4af37', 
                color: '#000', 
                fontWeight: '600', 
                fontSize: '14px',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#c19d30'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#d4af37'}
            >
              Mulai Coba Gratis
            </button>
          </div>

          {/* Paket 3: Enterprise */}
          <div 
            style={{ 
              backgroundColor: '#fff', 
              borderRadius: '20px', 
              padding: '40px 30px', 
              boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
              border: '1px solid #eaeaea',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#111', marginBottom: '8px' }}>Enterprise / Franchise</h3>
              <p style={{ fontSize: '13px', color: '#666', marginBottom: '24px' }}>Untuk jaringan multi-cabang skala besar.</p>
              
              <div style={{ marginBottom: '24px' }}>
                <span style={{ fontSize: '32px', fontWeight: 'bold', color: '#111' }}>Custom</span>
                <span style={{ fontSize: '14px', color: '#666' }}> / Hubungi Kami</span>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: '#444' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>✓ Cabang & Perangkat Tanpa Batas</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>✓ Buku Besar & Analitik Multi-Cabang</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>✓ Manajemen Supplier & PO</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>✓ Akun Manajer Khusus & Onboarding</li>
              </ul>
            </div>

            <button 
              style={{ 
                width: '100%', 
                padding: '12px', 
                borderRadius: '50px', 
                border: '1px solid #d4af37', 
                backgroundColor: 'transparent', 
                color: '#d4af37', 
                fontWeight: '600', 
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => { e.target.style.backgroundColor = '#d4af37'; e.target.style.color = '#000'; }}
              onMouseOut={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#d4af37'; }}
            >
              Hubungi Tim Sales
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Pricing;