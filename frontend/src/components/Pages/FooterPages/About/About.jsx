import React from 'react'
import Navbar from '../../../Navbar/Navbar'
import Footer from '../../../Footer/Footer'
import "./About.css"

const About = () => {
  return (
    <>
      <Navbar />

      <main className="about-page">

        {/* ── Hero ── */}
        <section className="about-hero">
          <div className="about-hero-bg" />
          <div className="about-hero-content">
            <span className="about-tag">About Us</span>
            <h1>
              Redefining the Way<br />People Travel
            </h1>
            <p>
              We help travelers discover unique stays, luxury escapes and cozy
              homes across the world — all with comfort, trust and unforgettable
              experiences.
            </p>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="about-stats">
          <div className="about-stat-card">
            <div className="stat-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h2>10K+</h2>
            <p>Happy Travelers</p>
          </div>

          <div className="about-stat-card">
            <div className="stat-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <h2>500+</h2>
            <p>Premium Properties</p>
          </div>
          <div className="about-stat-card">
            <div className="stat-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="10" r="3" />
                <path d="M12 2a8 8 0 0 0-8 8c0 5.4 7 11.5 7.35 11.76a1 1 0 0 0 1.3 0C13 21.5 20 15.4 20 10a8 8 0 0 0-8-8z" />
              </svg>
            </div>
            <h2>120+</h2>
            <p>Cities Covered</p>
          </div>
        </section>
        {/* ── Who We Are ── */}
        <section className="about-content">
          <div className="about-text">
            <span className="about-section-label">Who We Are</span>
            <h2>Travel Should Feel Personal</h2>
            <p>
              We are a modern stay-booking platform focused on making travel
              more personal and luxurious. Whether you're planning a beach
              vacation, mountain retreat or city escape — we connect you with
              beautifully curated homes designed for every lifestyle.
            </p>
            <p>
              Our mission is simple: create seamless travel experiences
              through elegant stays, trusted hosts and premium comfort.
            </p>
          </div>
          <div className="about-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
              alt="Cozy modern living room"
            />
          </div>
        </section>

        {/* ── Values ── */}
        <section className="about-values">
          <span className="about-section-label center">Our Values</span>
          <h2 className="values-heading">What Drives Us Every Day</h2>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>Trust & Safety</h3>
              <p>Every listing is verified and every host is vetted so you can book with confidence.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h3>Premium Comfort</h3>
              <p>Handpicked stays with thoughtful amenities that make every moment count.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3>Global Reach</h3>
              <p>Properties in 120+ cities so you're never far from your next adventure.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3>Made with Heart</h3>
              <p>We care about your journey as much as you do — from booking to checkout.</p>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="about-cta">
          <h2>Ready to Find Your Next Stay?</h2>
          <p>Browse thousands of curated properties and start planning your dream trip today.</p>
          <a href="/" className="about-cta-btn">Explore Properties</a>
        </section>

      </main>

      <Footer />
    </>
  )
}

export default About
