import { useState } from 'react'
import { Link } from 'react-router-dom'

interface NavItem {
  href: string
  label: string
  hasDropdown?: boolean
  dropdownItems?: { href: string; label: string }[]
}

const navLinks: NavItem[] = [
  { href: '#', label: 'ANASAYFA' },
  { href: '#hakkimizda', label: 'HAKKIMIZDA', hasDropdown: true, dropdownItems: [] },
  { href: '#programlar', label: 'PROGRAMLAR', hasDropdown: true, dropdownItems: [] },
  { href: '#blog', label: 'BLOG' },
  { href: '#galeri', label: 'GALERİ' },
  { href: '#iletisim', label: 'İLETİŞİM' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <header className="absolute top-0 left-0 right-0 z-50 pt-4">
      <div className="container-patika">
        {/* Top Bar - Aligned with navbar */}
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-end items-center gap-2 text-sm mb-2 pr-8">
            <span className="text-white">Çankaya - Ankara</span>
            <span className="text-primary">✦</span>
            <a href="tel:+904797483638" className="text-white hover:text-primary transition-colors">
              0479 748 36 38
            </a>
          </div>
        </div>

        {/* Main Navbar */}
        <nav className="bg-white rounded-full shadow-lg px-8 py-4 flex items-center justify-between max-w-5xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-primary">p</span>
                <span className="text-dark">at</span>
                <span className="text-primary">i</span>
                <span className="text-dark">ka</span>
              </span>
              <span className="text-[10px] text-dark tracking-[0.2em] -mt-1 ml-0.5">AKADEMİ</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 text-dark hover:text-primary transition-colors text-sm font-semibold tracking-wide"
                >
                  {link.label}
                  {link.hasDropdown && (
                    <svg
                      className={`w-3 h-3 transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>

                {/* Dropdown Menu */}
                {link.hasDropdown && link.dropdownItems && link.dropdownItems.length > 0 && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl py-2 z-50">
                    {link.dropdownItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 hover:text-primary transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-dark p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden bg-white rounded-2xl shadow-xl p-4 mt-2 max-w-5xl mx-auto">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-3 px-4 text-dark hover:text-primary hover:bg-gray-50 rounded-lg transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
