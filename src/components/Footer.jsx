import "./Footer.css"

export default function Footer() {
  return (
    <footer className="patika-footer">
      <div className="container py-5">
        <div className="row g-4">
          {/* Sol: Logo + açıklama + sosyal */}
          <div className="col-lg-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              {/* İstersen /logo.svg kullan */}
              <span className="footer-logo">patika</span>
              <small className="text-muted">akademi</small>
            </div>
            <p className="footer-text mb-4">
              Patika akademi'nin amacı; öğrencilerin güçlü bir
              akademik zemin ve sınav odaklı çalışma sürecine
              sağlıklı biçimde hazırlanmasını desteklemek; mentör ve
              programlarla başarıyı artırmaktır.
            </p>

            <div className="d-flex gap-3">
              <a className="social-btn" href="#" aria-label="Instagram">
                {iconInstagram}
              </a>
              <a className="social-btn" href="#" aria-label="YouTube">
                {iconYoutube}
              </a>
              <a className="social-btn" href="#" aria-label="TikTok">
                {iconTiktok}
              </a>
            </div>
          </div>

          {/* Orta: Link sütunları */}
          <div className="col-6 col-lg-3">
            <h6 className="footer-head mb-3">Keşfet</h6>
            <ul className="list-unstyled footer-list">
              <li><a href="#patika-nedir">{star} Patika Nedir?</a></li>
              <li><a href="#tya">{star} Temel Yeterlilik Analizi</a></li>
              <li><a href="#programlar">{star} Programlar</a></li>
              <li><a href="#video">{star} Tanıtım Videosu</a></li>
              <li><a href="#urunler">{star} Ürünler</a></li>
            </ul>
          </div>

          <div className="col-6 col-lg-3">
            <h6 className="footer-head mb-3">Kaynaklar</h6>
            <ul className="list-unstyled footer-list">
              <li><a href="#sss">{star} SSS</a></li>
              <li><a href="#blog">{star} Blog</a></li>
              <li><a href="#referanslar">{star} Referanslar</a></li>
              <li><a href="#kvkk">{star} KVKK & Gizlilik</a></li>
              <li><a href="#uyelik">{star} Üyelik Sözleşmesi</a></li>
            </ul>
          </div>

          {/* Sağ: İletişim */}
          <div className="col-lg-2">
            <h6 className="footer-head mb-3">İletişim</h6>
            <ul className="list-unstyled footer-contact">
              <li>
                <span className="icn">{iconMap}</span>
                Beyşepe, Ihsan Şa. No:5<br/> Çankaya / ANKARA
              </li>
              <li>
                <span className="icn">{iconPhone}</span>
                0 506 555 55 55
              </li>
              <li>
                <span className="icn">{iconMail}</span>
                <a href="mailto:patika@site.com">patika@site.com</a>
              </li>
              <li>
                <span className="icn">{iconTax}</span>
                Vergi No: 10022200
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Alt şerit */}
      <div className="footer-bottom">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 py-3">
          <small>© {new Date().getFullYear()} Patika Akademi. Tüm hakları saklıdır.</small>
          <small>
            <a className="link-underline" href="#kvkk">KVKK</a> ·{" "}
            <a className="link-underline" href="#cerez">Çerez Politikası</a>
          </small>
        </div>
      </div>
    </footer>
  );
}

/* --- inline ikonlar --- */
const star = (
  <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="currentColor"
      d="M12 3.5 9.9 9H4.2l4.6 3.3-1.7 5.2 4.9-3.5 4.9 3.5-1.7-5.2 4.6-3.3h-5.7L12 3.5z"/>
  </svg>
);

const iconInstagram = (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="currentColor"
      d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6-1.1a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2z"/>
  </svg>
);

const iconYoutube = (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="currentColor"
      d="M23 12s0-3.4-.4-5a3 3 0 0 0-2.1-2.1C18.9 4.4 12 4.4 12 4.4s-6.9 0-8.5.5A3 3 0 0 0 1.4 7C1 8.6 1 12 1 12s0 3.4.4 5a3 3 0 0 0 2.1 2.1c1.6.5 8.5.5 8.5.5s6.9 0 8.5-.5A3 3 0 0 0 22.6 17c.4-1.6.4-5 .4-5zM10 15.5v-7l6 3.5-6 3.5z"/>
  </svg>
);

const iconTiktok = (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="currentColor"
      d="M21 8.5a7.7 7.7 0 0 1-4.9-1.7V16a5.6 5.6 0 1 1-5.6-5.6c.4 0 .8 0 1.1.1v2.9a2.7 2.7 0 1 0 2.7 2.7V2h3a4.8 4.8 0 0 0 3.7 3.6V8.5z"/>
  </svg>
);

const iconMap = (
  <svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor"
    d="M12 2a7 7 0 0 0-7 7c0 5.3 7 13 7 13s7-7.7 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/></svg>
);
const iconPhone = (
  <svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor"
    d="M6.6 10.8a13 13 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.3 2.4.5 3.6.6.6 0 1 .5 1 1.1V20a2 2 0 0 1-2 2C9.6 22 2 14.4 2 5a2 2 0 0 1 2-2h2.4c.6 0 1 .4 1.1 1 .1 1.2.3 2.4.6 3.6.1.4 0 .8-.3 1.1L6.6 10.8z"/></svg>
);
const iconMail = (
  <svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor"
    d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-1 4-7 4.5L5 8V6l7 4.5L19 6v2z"/></svg>
);
const iconTax = (
  <svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor"
    d="M3 4h18v4H3V4zm0 6h18v10H3V10zm4 2v2h2v-2H7zm4 0v2h8v-2h-8zm-4 4v2h2v-2H7zm4 0v2h8v-2h-8z"/></svg>
);
