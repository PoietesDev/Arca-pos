function Card({ title, img, text }) {
  return (
    <div className="card h-100 shadow-sm border-0 rounded-3 overflow-hidden d-flex flex-column transition-hover">
      {/* Container Gambar dengan tinggi presisi & pencegah layout shift */}
      <div 
        className="w-100 overflow-hidden bg-light position-relative" 
        style={{ height: "220px" }}
      >
        <img 
          src={"./img/" + img}
          alt={title} 
          style={{ 
            width: "100%",
            height: "100%",
            objectFit: "cover", 
            objectPosition: "center",
            display: "block",
            transition: "transform 0.4s ease"
          }}
          className="card-img-top hover-zoom"
        />
      </div>
      
      {/* Bagian Konten Card */}
      <div className="card-body d-flex flex-column p-4 flex-grow-1 bg-white">
        <h5 className="card-title fw-bold text-dark fs-5 mb-2">{title}</h5>
        <p className="card-text text-secondary flex-grow-1" style={{ fontSize: '14px', lineHeight: '1.6' }}>
          {text}
        </p>
      </div>
    </div>
  );
}

export default Card;