import { partnerProductLinks } from "../../util/partnerProductLinks.js";
import SiteHeader from "../navigation/SiteHeader.jsx";
import SiteFooter from "../navigation/SiteFooter.jsx";
import "./other-supplements-page.scss";

const partnerOrderUrl = import.meta.env.VITE_PARTNER_ORDER_URL?.trim() || "";

export default function OtherSupplementsPage() {
  const handlePartnerOrderClick = () => {
    if (!partnerOrderUrl) return;
    window.location.href = partnerOrderUrl;
  };

  return (
    <div className="other-supplements-page-container">
      <SiteHeader />

      <main className="main-wrapper">
        <header className="intro-wrapper">
          <h1 className="brand-font page-heading">Other supplements</h1>
          <p className="page-lead">
            Partner.Co products we carry alongside 180 FUEL. Use the shared order
            link when it is ready, or open each product on Partner.Co for full
            details and checkout there.
          </p>
        </header>

        <section className="cta-banner-wrapper" aria-label="Order shortcut">
          {partnerOrderUrl ? (
            <button
              type="button"
              className="primary-order-action"
              onClick={handlePartnerOrderClick}
            >
              Order (shared link)
            </button>
          ) : (
            <p className="order-placeholder">
              Your combined order link will go here. Add{" "}
              <code className="env-hint">VITE_PARTNER_ORDER_URL</code> to{" "}
              <code className="env-hint">frontend/.env</code>, then rebuild or
              restart <code className="env-hint">npm run dev</code>.
            </p>
          )}
        </section>

        <section
          className="products-grid-wrapper"
          aria-label="Partner.Co products"
        >
          {partnerProductLinks.map((item) => (
            <article key={item.id} className="partner-card">
              <div className="card-image-wrapper">
                <img
                  className="card-image"
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  loading="lazy"
                />
              </div>
              <div className="card-header-wrapper">
                <h2 className="card-title">{item.title}</h2>
              </div>
              <p className="card-blurb">{item.blurb}</p>
              <div className="card-actions-wrapper">
                <a
                  href={item.partnerUrl}
                  className="secondary-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Partner.Co
                </a>
              </div>
            </article>
          ))}
        </section>

        <footer className="page-footer-wrapper">
          <p className="disclosure">
            Product pages, claims, and fulfillment are owned by Partner.Co. 180
            FUEL hosts this directory only; always verify details on{" "}
            <a
              href="https://partner.co/en-us/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-link"
            >
              partner.co
            </a>
            .
          </p>
        </footer>
      </main>

      <SiteFooter />
    </div>
  );
}
