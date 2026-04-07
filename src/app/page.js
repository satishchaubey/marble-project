import TrendingSlider from "./components/TrendingSlider";
import AssistanceSection from "./components/AssistanceSection/AssistanceSection";

export default function Home() {
  return (
    <div className="home-shell">
      <section className="hero-section">
        <header className="site-header">
          <div className="brand-wrap">
            <img src="/assets/Mask group.png" alt="Fakhree Marble Logo" className="logo" />
          </div>

          <nav className="site-nav" aria-label="Primary">
            <a href="#">HOME</a>
            <a href="#">ABOUT US</a>
            <a href="#">COLLECTIONS</a>
            <a href="#">INTERNATIONAL</a>
            <a href="#">PROJECTS</a>
            <a href="#">ENQUIRE</a>
          </nav>

          <a className="header-cta" href="#">
            Contact Us
          </a>
        </header>

        <div className="hero-content">
          <p className="kicker">Welcome To Fakhree Marble</p>
          <h1>NATURAL STONES PANEL</h1>
          <p className="hero-copy">
            Explore our finest range of natural stone walls and slabs where every block
            narrates its own story. Discover the spaces where raw geological beauty
            meets bold architectural expression.
          </p>

          <div className="hero-actions">
            <a className="outline-btn" href="#">
              ENQUIRE NOW
            </a>
            <a className="outline-btn" href="#">
              DOWNLOAD CATALOGUE
            </a>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-card">
          <h2>ABOUT OUR COMPANY</h2>
          <p>
            We stand for excellence in natural stone craftsmanship. Fakhree Marble is
            a trusted destination for imported and local marble, granite, and onyx,
            curated for discerning spaces.
          </p>
          <p>
            Our collection combines timeless texture with precision finishing and
            dependable supply. Every surface is selected to elevate interiors and
            build a lasting visual signature.
          </p>
          <a className="outline-btn about-btn" href="#">
            LEARN MORE
          </a>
        </div>
      </section>

      <section className="milestone-section">
        <div className="milestone-image" aria-hidden="true" />
        <div className="milestone-metrics">
          <article className="metric-item">
            <h3>10+</h3>
            <h4>Years Of Experience</h4>
            <p>
              We have a decade of expertise delivering premium quality marble and
              natural stone to residential and commercial spaces.
            </p>
          </article>
          <article className="metric-item">
            <h3>100+</h3>
            <h4>Unique Collections</h4>
            <p>
              Discover handpicked varieties curated from global quarries with
              distinct grains, tones, and timeless appeal.
            </p>
          </article>
          <article className="metric-item">
            <h3>200+</h3>
            <h4>Successful Projects</h4>
            <p>
              From luxury homes to statement commercial interiors, our materials
              have shaped spaces that stand out.
            </p>
          </article>
        </div>
      </section>

      <section className="collections-section">
        <h2 className="section-title">OUR COLLECTIONS</h2>
        <div className="collections-tabs">
          <button type="button" className="tab-btn">
            Granites
          </button>
          <button type="button" className="tab-btn active">
            Marble
          </button>
          <button type="button" className="tab-btn">
            Pebbles
          </button>
          <button type="button" className="tab-btn">
            Limestone
          </button>
          <button type="button" className="tab-btn">
            Semi Precious
          </button>
          <button type="button" className="tab-btn">
            Sandstone
          </button>
          <button type="button" className="tab-btn">
            Slabs
          </button>
          <button type="button" className="tab-btn">
            Landscape
          </button>
        </div>

        <div className="collection-cards">
          <article>
            <div className="collection-thumb black-marble" />
            <p>Black Marble</p>
          </article>
          <article>
            <div className="collection-thumb bronze-marble">
              {/* <span>SEE PRODUCT</span> */}
            </div>
            <p>Bronze Marble</p>
          </article>
          <article>
            <div className="collection-thumb green-marble" />
            <p>Green Marble</p>
          </article>
          <article>
            <div className="collection-thumb white-marble" />
            <p>White Marble</p>
          </article>
        </div>

        <button type="button" className="see-more-btn">
          SEE MORE <span aria-hidden="true">-&gt;</span>
        </button>
      </section>

      <TrendingSlider />

      <section className="reviews-section">
        <h2 className="reviews-title">
          WHAT THEY SAYS FOR
          <br />
          OUR SERVICES
        </h2>
        <div className="reviews-body">
          <div className="reviews-copy">
            <p className="reviews-quote-mark">&quot;</p>
            <p className="reviews-quote">
              The Entire Chetak Mall is elevated with Flamed CRYSTAL YELLOW
              GRANITE which gives a beautiful exterior to our building. Fakhree
              Marbles has been one of the best vendors we have worked with in
              terms of Quality, Price and Exquisite designs.
            </p>
            <p className="reviews-stars" aria-label="5 out of 5 stars">
              ★★★★★
            </p>
            <p className="reviews-author">MR. Saifuddin Bhalamwala</p>
            <p className="reviews-role">(chetak mall project)</p>
            <div className="reviews-nav" aria-hidden="true">
              <span>&larr;</span>
              <span>&rarr;</span>
            </div>
          </div>
          <div className="reviews-image" aria-hidden="true" />
        </div>
      </section>

      <section className="portfolio-section">
        <h2 className="section-title">OUR PORTFOLIO</h2>
        <div className="portfolio-tabs">
          <button type="button" className="portfolio-tab-btn">
            India
          </button>
          <button type="button" className="portfolio-tab-btn active">
            Kuwait
          </button>
          <button type="button" className="portfolio-tab-btn">
            Canada
          </button>
          <button type="button" className="portfolio-tab-btn">
            Oman
          </button>
          <button type="button" className="portfolio-tab-btn">
            Ukraine
          </button>
          <button type="button" className="portfolio-tab-btn">
            Vietnam
          </button>
          <button type="button" className="portfolio-tab-btn">
            Bangladesh
          </button>
        </div>

        <div className="portfolio-preview">
          <div className="portfolio-image" aria-hidden="true" />
          <div className="portfolio-footer">
            <p>Luxury Hotel Lobby - Premium Marble Installation</p>
            <button type="button" className="portfolio-next-btn">
              View Next Project <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>
      </section>

      <section className="presence-section">
        <h2 className="section-title">OUR GLOBAL PRESENCE</h2>
      
        <div className="presence-metrics">
          <article>
            <h3>10+</h3>
            <p>Years of Excellence</p>
          </article>
          <article>
            <h3>100+</h3>
            <p>Marble Designs</p>
          </article>
          <article>
            <h3>8+</h3>
            <p>Global Export Presence</p>
          </article>
          <article>
            <h3>500+</h3>
            <p>Projects Completed</p>
          </article>
        </div>
      </section>

      <AssistanceSection />

      <section className="contact-panel-section">
        <div className="contact-card">
          <h2>CONTACT US</h2>
          <form className="contact-form-grid">
            <label>
              <span>Name</span>
              <input type="text" placeholder="Your name" />
            </label>
            <label>
              <span>Phone</span>
              <input type="tel" placeholder="+91" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" placeholder="name@email.com" />
            </label>
            <label>
              <span>City</span>
              <select defaultValue="">
                <option value="" disabled>
                  Select city
                </option>
                <option>Bangalore</option>
                <option>Mumbai</option>
                <option>Delhi</option>
              </select>
            </label>
            <label className="full-row">
              <span>Your Message</span>
              <textarea rows={3} placeholder="Tell us about your requirement" />
            </label>
            <button type="submit" className="contact-submit-btn">
              SUBMIT NOW -&gt;
            </button>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-overlay" />
        <div className="footer-inner">
          <div className="footer-top">
            <img src="/assets/Mask group.png" alt="Fakhree Marble Logo" className="footer-logo" />
            <div className="footer-socials" aria-label="Social links">
              <a href="#" aria-label="Facebook">
                f
              </a>
              <a href="#" aria-label="Instagram">
                i
              </a>
              <a href="#" aria-label="LinkedIn">
                in
              </a>
              <a href="#" aria-label="YouTube">
                yt
              </a>
            </div>
          </div>

          <div className="footer-columns">
            <div>
              <h3>USEFUL LINKS</h3>
              <a href="#">About Us</a>
              <a href="#">Collections</a>
              <a href="#">Projects</a>
              <a href="#">Contact</a>
            </div>
            <div>
              <h3>SERVICES</h3>
              <a href="#">Interior Marble</a>
              <a href="#">Exterior Stone</a>
              <a href="#">Custom Finish</a>
              <a href="#">Bulk Supply</a>
            </div>
            <div>
              <h3>CONTACT</h3>
              <p>+91 90000 00000</p>
              <p>info@fakhreemarble.com</p>
              <p>Bangalore, Karnataka</p>
            </div>
            <div>
              <h3>WORK HOURS</h3>
              <p>Mon - Sat: 10:00 AM - 7:30 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>Copyright 2026 Fakhree Marble. All rights reserved.</p>
            <div>
              <a href="#">Terms &amp; Conditions</a>
              <a href="#">Privacy</a>
              <a href="#">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
