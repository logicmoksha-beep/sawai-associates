export default function BuyProperty() {
  return (
    <div className="service-page">
      <div className="page-hero real">
        <div className="container">
          <h1>Buy Property</h1>
          <p>
            Find your dream property with Sawai Associates. We offer
            residential, commercial, agricultural, and investment properties
            across prime locations.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="service-detail-card">
            <h2>Property Buying Services</h2>

            <p>
              We help buyers find the right property based on budget,
              location, and future growth potential. Our team provides
              complete support from property selection to documentation.
            </p>

            <ul>
              <li>Residential Properties</li>
              <li>Commercial Properties</li>
              <li>Agricultural Land</li>
              <li>Investment Opportunities</li>
              <li>Legal & Documentation Assistance</li>
            </ul>

            <p>
              With a strong network and market expertise, we ensure a smooth
              and transparent property buying experience.
            </p>

            <a href="/contact" className="btn primary">
              Find Your Property
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}