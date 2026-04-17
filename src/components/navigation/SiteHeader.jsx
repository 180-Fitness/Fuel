import { NavLink } from "react-router-dom";
import logoImage from "../../assets/images/logo/180_Fitness_Logo_White_LONG.png";
import "./site-header.scss";

export default function SiteHeader({ cartUnitCount, onCartClick }) {
  const cartLabel = cartUnitCount ? `Cart (${cartUnitCount})` : "Cart";
  const showCart = typeof onCartClick === "function";

  return (
    <header className="site-header-container">
      <div className="logo-nav-wrapper">
        <div className="brand-wrapper">
          <a
            href="https://180fitness.com"
            className="logo-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="180 Fitness — opens main site in a new tab"
          >
            <img
              className="logo"
              src={logoImage}
              alt="180 Fitness"
              width="280"
              height="52"
            />
          </a>
        </div>

        <nav className="nav-links-wrapper" aria-label="Main">
          <NavLink to="/" end className="nav-link">
            Shop
          </NavLink>
          <NavLink
            to="/other-supplements"
            className="nav-link nav-link-stacked"
            aria-label="Other supplements"
          >
            <span className="text-line">Other</span>
            <span className="text-line">Supplements</span>
          </NavLink>
          <NavLink to="/apparel" className="nav-link">
            Apparel
          </NavLink>
        </nav>
      </div>

      <div className="actions-wrapper">
        <div className="tagline-wrapper">
          <span className="brand-font title">180 FUEL</span>
          <span className="subtitle">Clean Protein</span>
        </div>
        {showCart && (
          <button
            type="button"
            className="cart-trigger"
            onClick={onCartClick}
            aria-label="Open shopping cart"
          >
            {cartLabel}
          </button>
        )}
      </div>
    </header>
  );
}
