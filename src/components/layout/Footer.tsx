import { Link } from 'react-router-dom'

const footerLinks = [
  { label: 'Patika Nedir?', href: '#' },
  { label: 'Temel Yeterlilik Analizi', href: '#' },
  { label: 'Programlar', href: '#programlar' },
  { label: 'Tanıtım Videosu', href: '#' },
  { label: 'Etkinlikler', href: '#etkinlikler' },
]

export default function Footer() {
  return (
    <footer className="bg-dark text-white relative overflow-hidden">
      {/* Main Footer Content */}
      <div className="container-patika py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="animate-fade-up">
            <Link to="/" className="inline-block mb-6">
              {/* Patika Logo Placeholder */}
              <div className="w-32 h-10 bg-white/10 border border-dashed border-white/30 rounded flex items-center justify-center">
                <span className="text-white/40 text-xs">Logo</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Patika akademi'nin misyonu, öğrencilere güçlü bir akademik temel sunarken, ulusal ve uluslararası eğitim yolculuklarında rehberlik eden, mentörlük sağlayan özel bir eğitim kurumudur.
            </p>
            {/* Social Icons */}
            <div className="flex gap-2">
              <a href="#" className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:border-primary hover:text-primary transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:border-primary hover:text-primary transition-colors">
                {/* TikTok */}
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-dark transition-colors">
                {/* YouTube */}
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-up delay-100">
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label} className="flex items-center gap-3">
                  <span className="text-lime text-xs">✱</span>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-up delay-200">
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/70">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="text-white/70 text-sm">
                  Beytepe, Umut Sk. No.61<br/>
                  Çankaya / ANKARA
                </div>
              </div>
              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/70">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <a href="tel:+902163565656" className="text-white/70 hover:text-white transition-colors text-sm">
                  0216 356 56 56
                </a>
              </div>
              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/70">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <a href="mailto:patika@info.com" className="text-white/70 hover:text-white transition-colors text-sm">
                  patika@info.com
                </a>
              </div>
              {/* Hours */}
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/70">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <span className="text-white/70 text-sm">Her gün - 10:00/22:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Logo - Right side */}
      <div className="absolute right-[8%] top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="w-16 h-20 border border-dashed border-white/10 rounded flex items-center justify-center">
          <span className="text-white/10 text-[8px]">Logo</span>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="relative h-12 lg:h-16 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 Q120,20 240,40 T480,40 T720,40 T960,40 T1200,40 T1440,40 L1440,80 L0,80 Z"
            fill="#00a561"
            opacity="0.2"
          />
          <path
            d="M0,50 Q120,30 240,50 T480,50 T720,50 T960,50 T1200,50 T1440,50 L1440,80 L0,80 Z"
            fill="#00a561"
            opacity="0.15"
          />
          <path
            d="M0,60 Q120,45 240,60 T480,60 T720,60 T960,60 T1200,60 T1440,60 L1440,80 L0,80 Z"
            fill="#00a561"
            opacity="0.1"
          />
        </svg>
      </div>
    </footer>
  )
}
