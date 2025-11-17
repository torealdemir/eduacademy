import React from "react";
import "./Paths.css";

const pathData = [
  { step: 1, title: "Temel Eksiklik Analizi", labelPos: "up" },
  { step: 2, title: "Patika+", labelPos: "down" },
  { step: 3, title: "Ara Ölçmeler", labelPos: "up" },
  { step: 4, title: "Pekiştirme Egzersizleri", labelPos: "down" },
  { step: 5, title: "Deneme Sınavları", labelPos: "up" },
  { step: 6, title: "0 Hata Kitapçıkları", labelPos: "down" },
  { step: 7, title: "Soru Bankası Takip", labelPos: "up" },
];

export default function SerpentinePath() {
  return (
    <section className="serpentine-section">
      <div className="container serpentine-container">
        <h2 className="serpentine-title">Öğrenme Yolculuğu</h2>

        <div className="serpentine-wrapper position-relative">
          {/* Dalgalı yol */}
          <svg
            className="serpentine-path"
            viewBox="0 0 1400 200"
            preserveAspectRatio="none"
          >
            <path
              className="animated-line"
              d="M0,100 
                 C150,0 300,200 450,100 
                 C600,0 750,200 900,100 
                 C1050,0 1200,200 1400,100"
              strokeWidth="30"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          {/* Adımlar */}
          <div className="steps-layer">
            {pathData.map((item) => (
              <div key={item.step} className="step-item">
                <div className="step-circle">{item.step}</div>
                <div
                  className={`step-label ${
                    item.labelPos === "up" ? "label-up" : "label-down"
                  }`}
                >
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
