import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Trust from '@/components/Trust'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Trust />
      <CTA />
      <Footer />
    </main>
  )
}
