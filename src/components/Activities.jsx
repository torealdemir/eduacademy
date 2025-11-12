import './Activities.css'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const events = [
  {
    title: "Patika Kampları",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Veli Toplantıları",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Workshoplar",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1400&auto=format&fit=crop",
  },
];

const testimonials = [
  {
    name: "Çisem Güven",
    role: "Öğrenci",
    text:
      "Patika ile planlı çalışmayı öğrendim; denemeler ve takip ekranı motivasyonumu çok artırdı.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&h=300&auto=format&fit=crop",
  },
  {
    name: "Mert A.",
    role: "Mezun",
    text:
      "Eksik analizi + pekiştirme egzersizleri netlerimi düzenli yükseltti. Tavsiye ederim.",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=300&h=300&auto=format&fit=crop",
  },
];

export default function PreFooter() {
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      e.stopPropagation();
    } else {
      // TODO: burada API'ye post edebilirsin
      alert("Form alındı. Teşekkürler!");
      form.reset();
    }
    form.classList.add("was-validated");
  };

  return (
    <section className="prefooter-section">
      <div className="container">

        {/* Etkinlikler */}
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h2 className="display-6 fw-semibold section-title">Etkinlikler;</h2>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              slidesPerView={1}
              spaceBetween={24}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                576: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
              }}
              className="events-swiper"
            >
              {events.map((ev, i) => (
                <SwiperSlide key={i}>
                  <article className="event-card shadow-sm">
                    <img src={ev.img} alt={ev.title} />
                    <div className="event-overlay">
                      <h5 className="mb-0">{ev.title}</h5>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Ayraç */}
        <div className="divider my-4 d-flex align-items-center justify-content-center">
          <span className="dot"></span>
          <span className="dash"></span>
          <span className="dot"></span>
        </div>

        {/* Bilgi Alın + Yorumlar */}
        <div className="row g-4 align-items-stretch">
          {/* Sol: Form */}
          <div className="col-lg-6">
            <h3 className="mb-3 fw-semibold">Bilgi Alın;</h3>

            <form noValidate onSubmit={onSubmit} className="needs-validation">
              <div className="row g-3">
                <div className="col-12 col-md-6">
                  <input className="form-control form-control-lg pf-input" placeholder="İsim" required />
                  <div className="invalid-feedback">Lütfen adınızı yazın.</div>
                </div>
                <div className="col-12 col-md-6">
                  <input className="form-control form-control-lg pf-input" placeholder="Soyad" required />
                  <div className="invalid-feedback">Lütfen soyadınızı yazın.</div>
                </div>
                <div className="col-12 col-md-6">
                  <input type="tel" className="form-control form-control-lg pf-input" placeholder="Telefon"
                         pattern="^[0-9\s()+-]{7,}$" required />
                  <div className="invalid-feedback">Geçerli bir telefon girin.</div>
                </div>
                <div className="col-12 col-md-6">
                  <input type="email" className="form-control form-control-lg pf-input" placeholder="Email" required />
                  <div className="invalid-feedback">Geçerli bir e-posta girin.</div>
                </div>
                <div className="col-12">
                  <textarea className="form-control form-control-lg pf-input" rows="5"
                            placeholder="İlginizi çeken program ve notlarınız..."
                            required></textarea>
                  <div className="invalid-feedback">Lütfen bir mesaj yazın.</div>
                </div>
                <div className="col-12 d-flex justify-content-between align-items-center">
                  <div className="d-inline-flex align-items-center gap-2 pf-cta">
                    <span className="pf-cta-icon" aria-hidden="true">➜</span>
                    <button className="btn btn-lg pf-btn" type="submit">Detayları gönder</button>
                  </div>
                  {/* isteğe bağlı KVKK onayı */}
                </div>
              </div>
            </form>
          </div>

          {/* Sağ: Testimonial */}
          <div className="col-lg-6">
            <h3 className="mb-3 fw-semibold">Patika’lılar Ne Demiş?</h3>

            <Swiper
              modules={[Pagination, A11y, Navigation]}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              className="testi-swiper"
            >
              {testimonials.map((t, i) => (
                <SwiperSlide key={i}>
                  <div className="testi-card">
                    <div className="testi-quote">“</div>
                    <div className="d-flex align-items-center gap-3 mb-2">
                      <img src={t.avatar} alt={t.name} className="testi-avatar" />
                      <div>
                        <div className="fw-semibold">{t.name}</div>
                        <small className="opacity-75">{t.role}</small>
                      </div>
                    </div>
                    <p className="mb-0">{t.text}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

      </div>
    </section>
  );
}
