import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          Patika Akademi
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Menüyü Aç/Kapat"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Ana Sayfa
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Hakkımızda
              </a>
            </li>

            {/* DROPDOWN BAŞLANGIÇ */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="servicesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Hizmetler
              </a>
              <ul
                className="dropdown-menu custom-dropdown"
                aria-labelledby="servicesDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Kentsel Dönüşüm Danışmanlığı
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Planlama ve Proje Geliştirme
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Eğitim & Atölye Programları
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Tüm Hizmetler
                  </a>
                </li>
              </ul>
            </li>
            {/* DROPDOWN BİTİŞ */}

            <li className="nav-item">
              <a className="nav-link" href="#">
                İletişim
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
