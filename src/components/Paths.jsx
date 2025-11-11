import React from "react";
import "./Paths.css"; // Stil dosyasını oluşturacağız

const pathData = [
  { step: 1, title: "Başlangıç", description: "Temel kavramlarla tanışma" },
  { step: 2, title: "HTML & CSS", description: "Web sayfası oluşturma temelleri" },
  { step: 3, title: "JavaScript", description: "Dinamik web için JS öğrenimi" },
  { step: 4, title: "React", description: "Component tabanlı geliştirme" },
  { step: 5, title: "Backend", description: "Node.js ve veritabanı temelleri" },
  { step: 6, title: "Proje", description: "Kendi mini projenizi geliştirin" },
  { step: 7, title: "İleri Seviye", description: "Performans ve deployment" },
];

export default function EducationPath() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">Eğitim Path’i</h2>
      <div className="path-container position-relative">
        {pathData.map((item, idx) => (
          <div key={idx} className="path-step d-flex align-items-center">
            <div className="step-number flex-shrink-0">{item.step}</div>
            <div className="step-content ms-3">
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
        {/* Dikey çizgi */}
        <div className="path-line position-absolute top-0 start-2 translate-middle-x"></div>
      </div>
    </div>
  );
}
