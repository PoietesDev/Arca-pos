function Contact() {
  return (
    <div id="contact" style={{ width: '100%', padding: '80px 20px', backgroundColor: '#fdfdfd' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Header Judul */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
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
            Hubungi Kami
          </span>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#111', margin: '0 0 10px 0', letterSpacing: '-0.5px' }}>
            KIRIM PESAN
          </h2>
          <p style={{ fontSize: '15px', color: '#666', margin: '0' }}>
            Ada pertanyaan atau ingin berkonsultasi mengenai ARCA POS & CRM? Silakan isi form di bawah ini.
          </p>
        </div>

        {/* Card Form */}
        <div 
          style={{ 
            backgroundColor: '#fff', 
            borderRadius: '16px', 
            padding: '40px', 
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
            border: '1px solid #eaeaea'
          }}
        >
          <form onSubmit={(e) => e.preventDefault()}>
            
            {/* Grid Input Atas (Nama, Email, Subject) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#333', marginBottom: '8px' }}>Nama Lengkap</label>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Masukkan nama Anda" 
                  style={{ 
                    width: '100%', 
                    padding: '12px 16px', 
                    borderRadius: '8px', 
                    border: '1px solid #ddd', 
                    backgroundColor: '#fafafa',
                    fontSize: '14px',
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#333', marginBottom: '8px' }}>Alamat Email</label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="nama@email.com" 
                  style={{ 
                    width: '100%', 
                    padding: '12px 16px', 
                    borderRadius: '8px', 
                    border: '1px solid #ddd', 
                    backgroundColor: '#fafafa',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#333', marginBottom: '8px' }}>Subjek</label>
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Contoh: Demo POS" 
                  style={{ 
                    width: '100%', 
                    padding: '12px 16px', 
                    borderRadius: '8px', 
                    border: '1px solid #ddd', 
                    backgroundColor: '#fafafa',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            {/* Textarea Pesan */}
            <div style={{ marginBottom: '30px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#333', marginBottom: '8px' }}>Pesan</label>
              <textarea 
                name="message" 
                rows="5"
                placeholder="Tuliskan pesan atau kebutuhan Anda di sini..." 
                style={{ 
                  width: '100%', 
                  padding: '12px 16px', 
                  borderRadius: '8px', 
                  border: '1px solid #ddd', 
                  backgroundColor: '#fafafa',
                  fontSize: '14px',
                  outline: 'none',
                  resize: 'vertical'
                }}
              />
            </div>

            {/* Tombol Kirim */}
            <div style={{ textAlign: 'center' }}>
              <button 
                type="submit"
                style={{ 
                  backgroundColor: '#d4af37', 
                  color: '#000', 
                  fontWeight: '600', 
                  fontSize: '15px', 
                  padding: '14px 36px', 
                  borderRadius: '50px', 
                  border: 'none', 
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)',
                  transition: 'transform 0.2s, background-color 0.2s',
                  width: '100%'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#c19d30'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#d4af37'}
              >
                Kirim Pesan Sekarang
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;