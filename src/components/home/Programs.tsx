import { useState } from 'react'
import DetailButton from '../ui/DetailButton'

const programs = [
  {
    id: 'yks',
    title: 'YKS Hazırlık',
    description:
      'YKS, lise eğitimini tamamlamış herkesin üniversiteye gidebilmek için girmesi gereken sınavdır.',
    image: '/images/students.jpg',
  },
  {
    id: 'cambridge',
    title: 'Cambridge Hazırlık',
    description:
      'YKS, lise eğitimini tamamlamış herkesin üniversiteye gidebilmek için girmesi gereken sınavdır.',
    image: '/images/cambridge.jpg',
  },
  {
    id: 'igcse',
    title: 'IGCSE Hazırlık',
    description:
      'YKS, lise eğitimini tamamlamış herkesin üniversiteye gidebilmek için girmesi gereken sınavdır.',
    image: null,
    isOrange: true,
  },
]

export default function Programs() {
  const [, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(programs.length / 3))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(programs.length / 3)) % Math.ceil(programs.length / 3))
  }

  return (
    <section id="programlar" className="relative">
      {/* PROGS. Tab - Like YTRL tab */}
      <div className="bg-dark">
        <div className="container-patika relative">
          <div className="flex justify-start lg:pl-[12%]">
            <div className="relative">
              <svg width="100" height="32" viewBox="0 0 100 32" className="block">
                <path d="M8 0 L92 0 L100 32 L0 32 Z" fill="#00a561"/>
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-white text-[11px] tracking-[0.15em] font-medium pt-1">
                PROGS.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Corner Element - Top Right - Curved line making a loop */}
      <div className="absolute right-[8%] -top-16 z-30 hidden lg:block">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          {/* Curved line that loops around */}
          <path
            d="M10,60 Q10,10 60,10 Q110,10 110,60 Q110,110 60,110 Q30,110 20,80"
            fill="none"
            stroke="#1b2f30"
            strokeWidth="20"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Main Section */}
      <div className="pt-12 lg:pt-16 pb-12 lg:pb-16 bg-primary relative overflow-hidden">
        {/* Decorative SVG Lines - Dark color matching roadmap background */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1200 700"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Left curve - smooth oval curve toward center */}
          <path
            d="M80,-20 C60,100 40,200 80,300 C120,400 200,500 400,580 C500,620 550,630 600,640"
            fill="none"
            stroke="#1b2f30"
            strokeWidth="45"
            strokeLinecap="round"
          />

          {/* Right curve - smooth oval curve toward center */}
          <path
            d="M1120,-20 C1140,100 1160,200 1120,300 C1080,400 1000,500 800,580 C700,620 650,630 600,640"
            fill="none"
            stroke="#1b2f30"
            strokeWidth="45"
            strokeLinecap="round"
          />

          {/* Second right curve - shorter, smoother */}
          <path
            d="M1180,20 C1150,120 1170,220 1140,320"
            fill="none"
            stroke="#1b2f30"
            strokeWidth="35"
            strokeLinecap="round"
          />

          {/* Top left decorative curve */}
          <path
            d="M200,-30 C240,30 200,100 230,180"
            fill="none"
            stroke="#1b2f30"
            strokeWidth="25"
            strokeLinecap="round"
          />
        </svg>

        <div className="container-patika relative z-10">
          {/* Section Title - Centered */}
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-up">
            {/* Target Icon */}
            <div className="w-10 h-10 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" stroke="#c4d600" strokeWidth="2" fill="none"/>
                <circle cx="16" cy="16" r="8" stroke="#c4d600" strokeWidth="2" fill="none"/>
                <circle cx="16" cy="16" r="3" fill="#c4d600"/>
              </svg>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white">Programlarımız;</h2>
          </div>

          {/* Programs Slider */}
          <div className="relative">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {programs.map((program, index) => (
                <div
                  key={program.id}
                  className={`flex flex-col animate-fade-up delay-${(index + 1) * 100}`}
                >
                  {/* Image */}
                  <div className="aspect-[4/3] relative overflow-hidden rounded-2xl">
                    {program.isOrange ? (
                      <div className="absolute inset-0 bg-orange flex flex-col items-center justify-center text-white p-6">
                        <span className="text-xs tracking-[0.2em] mb-2">CAMBRIDGE</span>
                        <span className="text-4xl lg:text-5xl font-bold">IGCSE</span>
                        <span className="text-[8px] tracking-wider mt-2 text-center leading-tight">
                          INTERNATIONAL GENERAL CERTIFICATE<br/>OF SECONDARY EDUCATION
                        </span>
                      </div>
                    ) : program.image ? (
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                        <span className="text-gray-300 text-sm">Image</span>
                      </div>
                    )}
                  </div>

                  {/* Content - Transparent background */}
                  <div className="pt-4 flex flex-col items-center text-center">
                    <h3 className="text-lg font-bold text-white mb-2">{program.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed mb-4">
                      {program.description}
                    </p>
                    <DetailButton href="#" size="sm" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section with Separator and Arrows */}
          <div className="mt-10 relative">
            {/* Separator Line */}
            <div className="absolute bottom-5 left-0 right-24 h-px bg-dark/30"></div>

            {/* Navigation Arrows - Bottom Right */}
            <div className="flex items-center justify-end">
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full border-2 border-dark/30 flex items-center justify-center hover:border-dark/60 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M10 4L6 8L10 12" stroke="#1b2f30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-dark/80 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 4L10 8L6 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Video Player Section */}
          <div className="mt-8 lg:mt-10 relative animate-scale">
            {/* Video Container with dark background */}
            <div className="relative max-w-5xl mx-auto">
              <div className="relative bg-dark rounded-3xl overflow-hidden">
                {/* Video placeholder */}
                <div className="aspect-video relative">
                  {/* Placeholder character illustration */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-48 bg-white/10 border-2 border-dashed border-white/30 rounded-lg flex items-center justify-center">
                      <span className="text-white/40 text-xs">Character</span>
                    </div>
                  </div>

                  {/* Decorative shapes */}
                  <div className="absolute top-8 left-1/4">
                    <div className="w-6 h-4 bg-lime/60 rounded-sm transform -rotate-12"></div>
                  </div>
                  <div className="absolute top-12 right-1/3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white/40">
                      <path d="M5 19l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="absolute bottom-24 left-1/3">
                    <div className="w-8 h-1 bg-white/30 rounded-full transform rotate-45"></div>
                  </div>
                  <div className="absolute bottom-28 right-1/4">
                    <div className="w-6 h-6 border-2 border-white/30 rounded transform rotate-12"></div>
                  </div>

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-primary border-4 border-lime flex items-center justify-center hover:bg-primary-dark transition-colors">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Wavy bottom border */}
                <div className="absolute bottom-0 left-0 right-0">
                  <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 lg:h-20">
                    <path
                      d="M0,60 Q150,120 300,60 Q450,0 600,60 Q750,120 900,60 Q1050,0 1200,60 L1200,120 L0,120 Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>

              {/* Navigation dots - Right side */}
              <div className="absolute -right-12 top-8 hidden lg:flex flex-col gap-2">
                <div className="w-3 h-3 rounded-full bg-dark/30"></div>
                <div className="w-3 h-3 rounded-full bg-dark"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ETKN. Tab - Bottom of Programs, leads to Activities */}
      <div className="bg-primary">
        <div className="container-patika relative">
          <div className="flex justify-start lg:pl-[12%]">
            <div className="relative -mb-[1px]">
              <svg width="100" height="32" viewBox="0 0 100 32" className="block">
                <path d="M8 0 L92 0 L100 32 L0 32 Z" fill="white"/>
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-dark text-[11px] tracking-[0.15em] font-medium pt-1">
                ETKN.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
