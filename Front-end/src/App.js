// src/App.js
import React, { useState } from 'react';

const galleryImages = [
  {
    url: 'https://ext.same-assets.com/55334096/2191142043.jpeg',
    caption: "Photo courtesy of Disneynature ©2025"
  },
  {
    url: 'https://ext.same-assets.com/55334096/4246122359.jpeg',
    caption: "Photo courtesy of Disneynature ©2025"
  },
  {
    url: 'https://ext.same-assets.com/55334096/2531604267.jpeg',
    caption: "Photo courtesy of Disneynature ©2025"
  }
];

function App() {
  const [showTrailer, setShowTrailer] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () =>
    setActiveSlide((i) => (i === galleryImages.length - 1 ? 0 : i + 1));
  const prevSlide = () =>
    setActiveSlide((i) => (i === 0 ? galleryImages.length - 1 : i - 1));

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <img
          src="https://ext.same-assets.com/55334096/1019721428.png"
          alt="Disney Logo"
          className="logo"
        />
        <nav className="nav-links">
          {['DISNEY+', 'PARKS & TRAVEL', 'MOVIES', 'SHOP', 'MORE'].map((link) => (
            <a key={link} href="#">{link}</a>
          ))}
        </nav>
        <div className="search-box">
          <input type="text" placeholder="Search" />
          <img
            src="https://ext.same-assets.com/55334096/2333492547.svg"
            alt="Search"
            className="search-icon"
          />
        </div>
      </header>

      {/* Hero */}
      <section
        className="hero"
        style={{
          backgroundImage:
            'url(https://lumiere-a.akamaihd.net/v1/images/g_ondisneyplus_disneynature_sealionsofthegalapagos_stil_1ed3fb1f.jpeg?region=0%2C0%2C1300%2C730)',
        }}
      >
        <div className="hero-content">
          <h1
            style={{
              textTransform: 'uppercase',
              fontWeight: 'bold',
              fontSize: '3rem',
              letterSpacing: '1px',
              marginBottom: '10px',
            }}
          >
            SEA LIONS<br />
            OF THE GALAPAGOS
          </h1>
          <p>AVAILABLE ON DISNEY+</p>
          <div className="hero-actions" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <button className="btn btn-primary">AVAILABLE ON DISNEY+</button>
            <button
              className="btn btn-outline"
              onClick={() => setShowTrailer(true)}
            >
              WATCH TRAILER
            </button>
          </div>
        </div>
      </section>

      {/* Trailer (shows when WATCH TRAILER is clicked) */}
      {showTrailer && (
        <section className="trailer-section">
          <div className="video-container">
            <video controls autoPlay>
              <source
                src="https://dy4dazmlq33gl.cloudfront.net/Sea_Lions_of_the_Galapagos.mp4"
                type="video/mp4"
              />
              Your browser does not support video.
            </video>
          </div>
        </section>
      )}

      {/* Movie Details */}
      <section className="movie-details container">
        <img
          src="https://m.media-amazon.com/images/M/MV5BYWNkMTU2ODgtODdhZS00MjkxLWE3YTQtN2M3NmY4ZjY4OTZkXkEyXkFqcGc@._V1_.jpg"
          alt="Sea Lions Poster"
          className="movie-poster"
          style={{ width: '500px', height: 'auto' }}
        />
        <div className="movie-info">
          <h2 className="movie-title">Disneynature's Sea Lions of the Galapagos</h2>
          <div className="movie-meta">
            <span>Rating: G</span>
            <span>Release Date: April 22, 2025</span>
            <span>Genre: Animal/Nature, Documentary</span>
          </div>
          <p className="movie-description">
          In the heart of the Pacific Ocean lies a magical cluster of islands, home to a unique collection of castaways found 
          nowhere else on earth. Narrated by Brendan Fraser, Disneynature's "Sea Lions of the Galapagos" dives underwater 
          with Leo, a handsome sea lion pup who's learning how to navigate life alongside his mother, Luna. Following 
          swimming lessons, fishing expeditions and some growing up, Leo eventually leaves his mother's colony to find his 
          own home—male sea lions must fight to earn the best spots, and only the strongest will become beachmasters. Leo's 
          lifelong quest is fraught with challenges and filled with new encounters with an array of creatures, from marine 
          iguanas and racer snakes to yellow fin tuna and huge Galapagos sharks. The archipelago is Leo's playground—
          overland and underwater—but he must stay vigilant to find his place in the world. 
          Directed by Hugh Wilson, co-directed by Keith Scholey, produced by Wilson, Scholey and Roy Conli, and featuring music by Raphaelle Thibaut.
          </p>
          <div className="movie-credits">
            <div className="credit-item">
              <span className="credit-title">Director:</span>Hugh Wilson
            </div>
            <div className="credit-item">
              <span className="credit-title">Co-Director:</span>Keith Scholey
            </div>
            <div className="credit-item">
              <span className="credit-title">Producers:</span>Hugh Wilson, Keith Scholey, Roy Conli
            </div>
            <div className="credit-item">
              <span className="credit-title">Narrator:</span>Brendan Fraser
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="videos-section container">
        <h3 className="section-title">Videos</h3>
        <div style={{ display: 'flex', gap: '20px' }}>
          <div>
            <img
              src="https://ext.same-assets.com/55334096/649262003.jpeg"
              alt="Official Trailer"
              className="video-thumbnail"
            />
            <p className="video-caption">
              Disneynature's Sea Lions of the Galapagos | Official Trailer
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div style={{ position: 'relative' }}>
          <img
            src={galleryImages[activeSlide].url}
            alt={`Slide ${activeSlide + 1}`}
            className="gallery-image"
          />
          <p className="image-caption">
            {galleryImages[activeSlide].caption}
          </p>
          <div
            style={{
              position: 'absolute',
              top: '50%',
              right: '20px',
              background: 'rgba(0,0,0,0.5)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            onClick={nextSlide}
          >
            ›
          </div>
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '20px',
              background: 'rgba(0,0,0,0.5)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            onClick={prevSlide}
          >
            ‹
          </div>
        </div>
      </section>

      {/* Explore More */}
      <section className="explore-section container">
        <h3 className="section-title">Explore More</h3>
        <div className="explore-grid">
          {[
            ['🐯', "Disneynature's Tiger"],
            ['🐻‍❄️', "Disneynature's Polar Bear"],
            ['🐬', "Disneynature's Dolphin Reef"],
            ['🐘', "Disneynature's Elephant"],
            ['🐧', "Secrets of the Penguins"],
          ].map(([icon, title]) => (
            <div className="explore-item" key={title}>
              <div className="explore-icon">{icon}</div>
              <p className="explore-title">{title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <img
          src="https://ext.same-assets.com/55334096/942558450.png"
          alt="Disney Logo"
          className="footer-logo"
        />
        <div className="footer-links">
          {[
            'About Disney',
            'Disney Help',
            'Careers',
            'Contact Us',
            'Advertise With Us',
            'Disney+ Premier Card',
            'Privacy Policy',
            'Your US State Privacy Rights',
            "Children's Online Privacy Policy",
            'Do Not Sell or Share My Personal Information',
            'Interest-Based Ads',
          ].map((link) => (
            <a href="#" className="footer-link" key={link}>{link}</a>
          ))}
        </div>
        <p className="footer-copyright">
          © 2025 Disney and its related entities.
        </p>
      </footer>
    </div>
  );
}

export default App;