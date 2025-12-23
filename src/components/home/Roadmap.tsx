import DetailButton from '../ui/DetailButton'

export default function Roadmap() {
  return (
    <section id="hakkimizda" className="bg-dark pt-16 pb-40 relative overflow-x-clip">
        <div className="container-patika">
          {/* Decorative Circle Icon - Top Right */}
          <div className="absolute right-[5%] top-8 hidden lg:block">
            <div className="w-16 h-16 rounded-full border-2 border-primary/50 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full border-2 border-primary/50 flex items-center justify-center">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Desktop Roadmap */}
          <div className="hidden lg:block relative mt-8 -mx-[140px] animate-fade-up" style={{ height: '280px' }}>
            {/* SVG Container with wave path */}
            <svg
              viewBox="-100 1020 1600 350"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid slice"
            >
              {/* Wave Path - Green filled with lighter border */}
              <path
                d="M1357.79,1245.16c-24.31,0-44.09-22.35-44.09-49.83h-.02c-.72-65.98-52.06-119.43-115.07-119.43s-115.09,54.2-115.09,120.83h0c-.66,26.83-20.16,48.43-44.05,48.43s-44.09-22.35-44.09-49.83h-.02c-.72-65.98-52.06-119.43-115.07-119.43s-114.35,53.45-115.07,119.43h-.02c0,27.48-19.78,49.83-44.09,49.83s-44.09-22.35-44.09-49.83h-.02c-.72-65.98-52.06-119.43-115.07-119.43s-115.09,54.2-115.09,120.83h0c-.66,26.83-20.16,48.43-44.05,48.43s-44.09-22.35-44.09-49.83h-.02c-.72-65.98-52.06-119.43-115.07-119.43s-114.35,53.45-115.07,119.43h-.02c0,27.48-19.78,49.83-44.09,49.83H-6.79v71h91.27c63.01,0,114.35-53.45,115.07-119.43h.02c0-27.48,19.78-49.83,44.09-49.83s44.09,22.35,44.09,49.83h.02c.72,65.98,52.06,119.43,115.07,119.43s115.09-54.2,115.09-120.83h0c.66-26.83,20.16-48.43,44.05-48.43s44.09,22.35,44.09,49.83h.02c.72,65.98,52.06,119.43,115.07,119.43s114.35-53.45,115.07-119.43h.02c0-27.48,19.78-49.83,44.08-49.83s44.09,22.35,44.09,49.83h.02c.72,65.98,52.06,119.43,115.07,119.43s115.09-54.2,115.09-120.83h0c.66-26.83,20.16-48.43,44.05-48.43s44.09,22.35,44.09,49.83h.02c.72,65.98,52.06,119.43,115.07,119.43h86.89v-71h-86.89Z"
                fill="#00a561"
                stroke="#4ade80"
                strokeWidth="3"
              />

              {/* Number Circles - positioned at curve turning points */}
              {/* Circle 1 - Start/entry point */}
              <circle cx="84" cy="1280" r="32" fill="#c4d600"/>
              <text x="84" y="1292" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#1b2f30">1</text>

              {/* Circle 2 - First valley */}
              <circle cx="200" cy="1195" r="32" fill="#c4d600"/>
              <text x="200" y="1207" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#1b2f30">2</text>

              {/* Circle 3 - Second peak */}
              <circle cx="360" cy="1075" r="32" fill="white"/>
              <text x="360" y="1087" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#1b2f30">3</text>

              {/* Circle 4 - Second valley */}
              <circle cx="520" cy="1195" r="32" fill="white"/>
              <text x="520" y="1207" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#1b2f30">4</text>

              {/* Circle 5 - Third peak */}
              <circle cx="680" cy="1075" r="32" fill="#c4d600"/>
              <text x="680" y="1087" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#1b2f30">5</text>

              {/* Circle 6 - Third valley */}
              <circle cx="840" cy="1195" r="32" fill="white"/>
              <text x="840" y="1207" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#1b2f30">6</text>

              {/* Circle 7 - Fourth peak / end */}
              <circle cx="1000" cy="1075" r="32" fill="#c4d600"/>
              <text x="1000" y="1087" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#1b2f30">7</text>
            </svg>

            {/* Top Labels - Above peaks */}
            <div className="absolute top-0 w-full">
              <div className="relative">
                {/* Label 1 - Temel Eksiklik Analizi */}
                <div className="absolute left-[6%] -translate-x-1/2">
                  <div className="bg-[#013024] text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap">
                    Temel Eksiklik Analizi
                  </div>
                </div>
                {/* Label 3 - Kişiye Özel Döküman */}
                <div className="absolute left-[29%] -translate-x-1/2">
                  <div className="bg-[#c4d600] text-[#013024] px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap">
                    Kişiye Özel Döküman
                  </div>
                </div>
                {/* Label 5 - Ara Ölçmeler */}
                <div className="absolute left-[52%] -translate-x-1/2">
                  <div className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap">
                    Ara Ölçmeler
                  </div>
                </div>
                {/* Label 7 - Deneme Sınavları */}
                <div className="absolute left-[75%] -translate-x-1/2">
                  <div className="bg-[#013024] text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap">
                    Deneme Sınavları
                  </div>
                </div>
                {/* Soru Bankası Takip */}
                <div className="absolute left-[94%] -translate-x-1/2">
                  <div className="bg-white text-dark px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap">
                    Soru Bankası Takip
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Labels - Below valleys */}
            <div className="absolute bottom-0 w-full">
              <div className="relative">
                {/* Patika+ - below 2 */}
                <div className="absolute left-[17%] -translate-x-1/2">
                  <div className="bg-[#c4d600] text-[#013024] px-5 py-2 rounded-lg text-sm font-medium">
                    Patika+
                  </div>
                </div>
                {/* Pekiştirme Egzersizleri - below 4 */}
                <div className="absolute left-[40%] -translate-x-1/2">
                  <div className="bg-white text-dark px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap">
                    Pekiştirme Egzersizleri
                  </div>
                </div>
                {/* 0 Hata Kitapçıkları - below 6 */}
                <div className="absolute left-[63%] -translate-x-1/2">
                  <div className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap">
                    0 Hata Kitapçıkları
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Roadmap - Simplified */}
          <div className="lg:hidden mt-8">
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                <div
                  key={num}
                  className={`w-11 h-11 rounded-full flex items-center justify-center text-lg font-bold ${
                    num % 2 === 1
                      ? 'bg-white text-dark'
                      : 'bg-dark border-3 border-[#c4d600] text-[#c4d600]'
                  }`}
                >
                  {num}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-[#013024] text-white px-3 py-1 rounded-lg text-xs">Temel Eksiklik Analizi</span>
              <span className="bg-[#c4d600] text-dark px-3 py-1 rounded-lg text-xs">Kişiye Özel Döküman</span>
              <span className="bg-primary text-white px-3 py-1 rounded-lg text-xs">Ara Ölçmeler</span>
              <span className="bg-[#c4d600] text-dark px-3 py-1 rounded-lg text-xs">Patika+</span>
              <span className="bg-primary text-white px-3 py-1 rounded-lg text-xs">0 Hata Kitapçıkları</span>
            </div>
          </div>

          {/* Quote Section */}
          <div className="relative mt-8 lg:mt-12 animate-fade-up">
            {/* P Logo Badge - Absolute Top Left corner */}
            <div className="absolute -left-4 lg:left-0 -top-8 lg:-top-4 z-20">
              {/* Placeholder for P Logo SVG */}
              <div className="w-20 h-20 lg:w-28 lg:h-28 bg-white/5 border-2 border-dashed border-primary/50 rounded-full flex items-center justify-center">
                <span className="text-primary/50 text-[10px]">P Logo</span>
              </div>
            </div>

            {/* Bottom Line - Behind character */}
            <div className="absolute bottom-8 left-0 right-0 h-px bg-white/50"></div>

            {/* Content - Character and Quote side by side */}
            <div className="flex flex-col lg:flex-row items-end gap-4 lg:gap-8 pt-12 lg:pt-8">
              {/* Character Illustration - Above the line */}
              <div className="relative z-10 flex-shrink-0">
                {/* Placeholder for Character SVG */}
                <div className="w-48 h-64 lg:w-56 lg:h-72 bg-white/5 border-2 border-dashed border-white/30 rounded-lg flex items-center justify-center">
                  <span className="text-white/40 text-sm">Character SVG</span>
                </div>
              </div>

              {/* Quote + Button - Next to character */}
              <div className="flex flex-col pb-12 lg:pb-14 flex-1">
                <blockquote className="text-xl lg:text-[1.75rem] xl:text-[2rem] text-white leading-snug">
                  "Merhaba, yukarıdaki grafikten Patika ile{' '}
                  <span className="text-lime italic">kişiselleştirilmiş</span>{' '}
                  sınav eğitiminin adımlarını inceleyebilirsin."
                </blockquote>

                <div className="mt-5 lg:mt-6">
                  <DetailButton href="#programlar" />
                </div>
              </div>
            </div>

            {/* Starburst Badge - Bottom Right */}
            <div className="absolute right-0 lg:right-[3%] bottom-0 z-10">
              {/* Placeholder for Starburst SVG */}
              <div className="w-24 h-24 lg:w-32 lg:h-32 bg-white/5 border-2 border-dashed border-primary/50 rounded-lg flex items-center justify-center rotate-6">
                <span className="text-primary/50 text-[10px] text-center -rotate-6">Starburst</span>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
