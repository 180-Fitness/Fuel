import { Link } from "react-router-dom";
import "./site-footer.scss";

export default function SiteFooter() {
  return (
    <footer className="site-footer-container">
      <div className="content-wrapper">
        <nav className="footer-nav" aria-label="Footer">
          <Link to="/other-supplements" className="footer-link">
            Other supplements
          </Link>
          <span className="footer-sep" aria-hidden="true">
            {" "}
            ·{" "}
          </span>
          <Link to="/apparel" className="footer-link">
            Apparel
          </Link>
          <span className="footer-sep" aria-hidden="true">
            {" "}
            ·{" "}
          </span>
          <Link to="/policies" className="footer-link">
            Policies
          </Link>
        </nav>
        <p className="copyright">© 2026 180 FUEL. All rights reserved.</p>
        <p className="disclaimer">
          Consult your physician before starting any supplement regimen.
        </p>
      </div>
    </footer>
  );
}
