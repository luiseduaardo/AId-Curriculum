import React from 'react'
import './HomePage.css'
import HeroSection from './components/HeroSection'
import FeaturesList from './components/FeaturesList'
import CTACard from './components/CTACard'

const HomePage: React.FC = () => {
  return (
    <main className="hp-root">
      <HeroSection />

      <section className="hp-resources">
        <div className="hp-resources-inner">
          <FeaturesList />
          <CTACard />
        </div>
      </section>
    </main>
  )
}

export default HomePage
