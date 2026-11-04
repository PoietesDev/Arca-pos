import Card from "./Card";

function Services() {
  return (
    <div className="container services py-12" id="services">
        <h2 className="main-title text-center font-bold text-2xl md:text-3xl mb-2">LAYANAN & FITUR UTAMA</h2>
        <p className="text-center main-p mb-8 max-w-2xl mx-auto" style={{ color: '#555', fontSize: '16px' }}>
          Ekosistem SaaS digital terintegrasi untuk mengotomatisasi operasional, mengamankan margin profit, dan meningkatkan kepuasan pelanggan restoran Anda.
        </p>
        
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row g-4">
                    
                    {/* Fitur 1: POS & Food Costing HPP */}
                    <div className="col-md-4 mb-3">
                        <Card 
                          title="POS & Auto Food Costing (HPP)" 
                          img="hitung.jpg" 
                          text="Kasir cepat multi-cabang yang terhubung langsung dengan resep (BOM). Setiap menu terjual otomatis memotong stok bahan baku dan menghitung HPP serta margin profit secara akurat." 
                        />
                    </div>

                    {/* Fitur 2: QR Self-Ordering & KDS */}
                    <div className="col-md-4 mb-3">
                        <Card 
                          title="QR Self-Ordering & Dapur (KDS)" 
                          img="qrcode.jpg" 
                          text="Tingkatkan perputaran meja! Pelanggan dapat scan QR di meja, pesan, dan bayar mandiri dari HP. Pesanan otomatis masuk ke layar KDS dapur secara real-time tanpa kertas." 
                        />
                    </div>

                    {/* Fitur 3: Analitik & Buku Besar Finansial */}
                    <div className="col-md-4 mb-3">
                        <Card 
                          title="Buku Besar & Analitik Multi-Cabang" 
                          img="laporan.jpg" 
                          text="Pantau omzet pusat & cabang dari satu dashboard. Dilengkapi rekap pajak PB1, petty cash kasir, hingga pencatatan Purchase Order (PO) supplier secara transparan." 
                        />
                    </div>

                </div>
            </div>
        </div>
    </div>
  );
}

export default Services;