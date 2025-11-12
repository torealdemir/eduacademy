import "./Courses.css";

const programs = [
  {
    title: "YKS Hazırlık",
    img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop",
    bullets: [
      "Kişiye özel eksik analizleri",
      "Haftalık deneme & takip",
      "Mentorluk ve planlama"
    ],
    link: "#yks",
  },
  {
    title: "Cambridge Hazırlık",
    img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop",
    bullets: [
      "Cambridge syllabus uyumlu içerik",
      "Ölçme & değerlendirme",
      "Speaking/Listening pratik"
    ],
    link: "#cambridge",
  },
  {
    title: "IGCSE Hazırlık",
    img: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?q=80&w=1200&auto=format&fit=crop",
    bullets: [
      "IGCSE konu anlatımları",
      "Soru bankası & ödev",
      "Deneme sınavları"
    ],
    link: "#igcse",
  },
];

export default function Programs() {
  return (
    <section className="programs-section">
      <div className="container">
        {/* Başlık */}
        <div className="text-center mb-4">
          <div className="prog-kicker d-inline-flex align-items-center gap-2 mb-2">
            {thumbIcon}
            <span>Programlarımız;</span>
          </div>
          <h2 className="fw-semibold">Hayaline giden yolu birlikte planlayalım</h2>
        </div>

        {/* Kartlar */}
        <div className="row g-4 mb-5">
          {programs.map((p, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-4">
              <article className="prog-card h-100 shadow-sm">
                <div className="prog-media">
                  <img src={p.img} alt={p.title} loading="lazy" />
                </div>

                <div className="prog-body">
                  <h5 className="mb-2">{p.title}</h5>
                  <ul className="list-unstyled prog-list mb-3">
                    {p.bullets.map((b, j) => (
                      <li key={j}>{checkIcon}<span>{b}</span></li>
                    ))}
                  </ul>

                  <div className="d-flex">
                    <a href={p.link} className="btn prog-btn">
                      {arrowIcon} <span>Detayına</span>
                    </a>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* Video/Afiş bandı */}
        <div className="prog-banner shadow-sm">
          <div className="banner-art" aria-hidden="true"></div>
          <button
            type="button"
            className="banner-play"
            onClick={() =>
              window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")
            }
            aria-label="Tanıtım videosunu oynat"
          >
            {playIcon}
          </button>
          <h3 className="banner-title">
            Hayaline özel oluşturulan eğitim <em>patikası</em>
          </h3>
        </div>
      </div>
    </section>
  );
}

/* inline ikonlar */
const checkIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" className="me-2 flex-shrink-0">
    <path fill="currentColor" d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/>
  </svg>
);
const arrowIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" className="me-1">
    <path fill="currentColor" d="M12 4l1.41 1.41L8.83 10H20v2H8.83l4.58 4.59L12 18l-8-8z"/>
  </svg>
);
const thumbIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24">
    <path fill="currentColor" d="M1 21h4V9H1v12zM23 10c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32a1 1 0 0 0-.29-.7L14 2 7.59 8.41A2 2 0 0 0 7 9.83V19a2 2 0 0 0 2 2h8a2 2 0 0 0 1.99-1.78l1-9A2 2 0 0 0 23 10z"/>
  </svg>
);
const playIcon = (
  <svg width="28" height="28" viewBox="0 0 24 24">
    <path fill="currentColor" d="M8 5v14l11-7z"/>
  </svg>
);
