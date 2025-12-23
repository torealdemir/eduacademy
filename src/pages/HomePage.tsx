import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Hero from '../components/home/Hero'
import Programs from '../components/home/Programs'
import Activities from '../components/home/Activities'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function HomePage() {
  useScrollAnimation()

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Programs />
        <Activities />
      </main>
      <Footer />
    </div>
  )
}
