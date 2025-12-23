export default function Hero() {
  return (
    <section className="relative min-h-[700px] lg:min-h-[800px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero-bg.jpg')`,
          backgroundColor: '#f5f5f5'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Decorative Cursor Icon */}
      <div className="absolute right-[10%] top-[35%] hidden lg:block">
        <div className="relative">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-white">
            <path
              d="M4 4L10.5 20.5L13 13L20.5 10.5L4 4Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {/* Sparkle */}
          <svg
            className="absolute -top-3 -right-3 text-primary"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="container-patika relative z-10 pt-40 lg:pt-48">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
            Hayalindeki üniversiteye özel oluşturulan
            <br />
            <span className="text-primary">eğitim patikan...</span>
          </h1>

          {/* Description */}
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Herkesin öğrenme yolunun farklı olduğuna inanıyoruz. Bu doğrultuda öğrencilerimize,
            hedefledikleri yurt içi / yurt dışı sınavlarına özel bireysel eğitim programları hazırlıyoruz.
          </p>

          {/* CTA Button */}
          <a
            href="#programlar"
            className="inline-flex items-center gap-3 bg-[#c4d600] hover:bg-[#d4e600] text-dark-green px-8 py-4 rounded-full font-semibold text-lg transition-colors"
          >
            <span className="w-8 h-8 bg-dark-green rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-[#c4d600]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
            Detayları gör
          </a>
        </div>
      </div>

      {/* Navigation Arrows - Green filled circles */}
      <button
        className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors shadow-lg"
        aria-label="Previous"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors shadow-lg"
        aria-label="Next"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Folder Tab - Aligned with logo */}
      <div className="absolute bottom-0 left-[15%] lg:left-[12%]">
        <div className="relative">
          <svg width="100" height="32" viewBox="0 0 100 32" className="block">
            <path
              d="M8 0 L92 0 L100 32 L0 32 Z"
              fill="#1b2f30"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-primary text-[11px] tracking-[0.15em] font-medium pt-1">
            YTRL.
          </span>
        </div>
      </div>
    </section>
  )
}
