import { useState } from 'react'

const activities = [
  {
    id: 'camps',
    title: 'Patika Kampları',
    image: '/images/camp.jpg',
  },
  {
    id: 'meetings',
    title: 'Veli Toplantıları',
    image: '/images/meeting.jpg',
  },
  {
    id: 'workshops',
    title: 'Workshoplar',
    image: '/images/workshop.jpg',
  },
]

export default function Activities() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section id="etkinlikler" className="relative bg-white overflow-hidden">
      {/* Main Content */}
      <div className="relative">
        {/* Decorative SVG Lines - Horizontal wavy curves */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1400 1000"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Top left horizontal wave */}
          <path
            d="M-50,100 Q100,50 200,120 Q300,190 450,100 Q600,10 750,100"
            fill="none"
            stroke="#00a561"
            strokeWidth="35"
            strokeLinecap="round"
            opacity="0.12"
          />
          {/* Middle left wave */}
          <path
            d="M-100,450 Q50,380 150,450 Q250,520 400,450 Q550,380 650,450"
            fill="none"
            stroke="#00a561"
            strokeWidth="30"
            strokeLinecap="round"
            opacity="0.1"
          />
          {/* Bottom right horizontal wave */}
          <path
            d="M700,850 Q850,780 1000,850 Q1150,920 1300,850 Q1450,780 1550,850"
            fill="none"
            stroke="#00a561"
            strokeWidth="35"
            strokeLinecap="round"
            opacity="0.12"
          />
          {/* Top right wave */}
          <path
            d="M900,200 Q1050,130 1150,200 Q1250,270 1400,200 Q1500,130 1600,180"
            fill="none"
            stroke="#00a561"
            strokeWidth="25"
            strokeLinecap="round"
            opacity="0.08"
          />
          {/* Small decorative wave bottom left */}
          <path
            d="M100,750 Q200,700 300,750 Q400,800 500,750"
            fill="none"
            stroke="#00a561"
            strokeWidth="20"
            strokeLinecap="round"
            opacity="0.08"
          />
        </svg>

        <div className="container-patika relative z-10 py-12 lg:py-16">
          {/* Section Title */}
          <div className="flex items-center gap-3 mb-10 animate-fade-up">
            {/* Torch Icon */}
            <div className="w-12 h-12 bg-lime rounded-full flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C12 2 14 5 14 8C14 10 13 11 12 11C11 11 10 10 10 8C10 5 12 2 12 2Z" fill="#1b2f30"/>
                <rect x="10" y="11" width="4" height="10" rx="1" fill="#1b2f30"/>
                <rect x="9" y="19" width="6" height="3" rx="1" fill="#1b2f30"/>
              </svg>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-dark">Etkinlikler;</h2>
          </div>

          {/* Activities Grid */}
          <div className="grid md:grid-cols-3 gap-5 mb-8">
            {activities.map((activity, index) => (
              <div
                key={activity.id}
                className={`group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200 animate-fade-up delay-${(index + 1) * 100}`}
              >
                {/* Image */}
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />

                {/* Fallback */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 -z-10">
                  <span className="text-sm">Image</span>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white text-lg font-bold">{activity.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Separator and Navigation - Centered */}
          <div className="relative mb-16">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-300"></div>
            <div className="flex items-center justify-center relative">
              <div className="flex items-center gap-2 bg-white px-2">
                <button className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-dark/80 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M10 4L6 8L10 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-dark/80 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 4L10 8L6 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form and Testimonials */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="animate-fade-left">
              <h2 className="text-2xl lg:text-3xl font-bold text-dark mb-8">Bilgi Alın;</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="İsim"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-lime/20 border-2 border-lime text-dark placeholder-dark/60 rounded-lg outline-none focus:border-primary transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Soyadı"
                    value={formData.surname}
                    onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
                    className="w-full px-4 py-3 bg-lime/20 border-2 border-lime text-dark placeholder-dark/60 rounded-lg outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Telefon"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-lime/20 border-2 border-lime text-dark placeholder-dark/60 rounded-lg outline-none focus:border-primary transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-lime/20 border-2 border-lime text-dark placeholder-dark/60 rounded-lg outline-none focus:border-primary transition-colors"
                  />
                </div>

                <textarea
                  placeholder="İlgilendiğiniz Program ve Mesajınız;"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white border-2 border-gray-300 text-dark placeholder-dark/50 rounded-lg outline-none focus:border-primary transition-colors resize-none"
                />

                <button
                  type="submit"
                  className="inline-flex items-center bg-lime text-dark rounded-full font-medium hover:bg-lime/80 transition-colors p-1.5 pr-6"
                >
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10h12M12 6l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Mesajı Gönder</span>
                </button>
              </form>
            </div>

            {/* Testimonials */}
            <div className="bg-primary rounded-3xl p-8 lg:p-10 animate-fade-right">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                Patika'lılar Ne Demiş?
              </h2>

              <div className="space-y-4">
                {/* Quote Icon */}
                <div className="text-5xl text-dark/40 font-serif leading-none">"</div>

                {/* Avatar */}
                <div className="flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-white overflow-hidden border-4 border-white shadow-lg">
                    <img
                      src="/images/avatar.jpg"
                      alt="Çisem Güven"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                      }}
                    />
                  </div>
                </div>

                {/* Name */}
                <div className="text-center">
                  <p className="text-dark font-bold text-lg">Çisem Güven</p>
                </div>

                {/* Testimonial */}
                <p className="text-white text-center text-sm leading-relaxed">
                  Lorem ipsum permit a page layout to be designed,
                  independently of the copy that will subsequently populate
                  it, or to demonstrate various fonts of a typeface without
                  meaningful text that could be distracting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
