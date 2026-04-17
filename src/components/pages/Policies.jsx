import SiteHeader from "../navigation/SiteHeader.jsx";
import SiteFooter from "../navigation/SiteFooter.jsx";
import "./policies.scss";

/** Example secondary page — replace copy or add more routes in AppRoutes.jsx */
export default function Policies() {
  return (
    <div className="policies-container">
      <SiteHeader />

      <div className="header-wrapper">
        <h1 className="brand-font page-title">Policies</h1>
      </div>
      <div className="content-wrapper">
        <p className="lead">
          Placeholder page showing how to add routes. Edit this file or duplicate
          the pattern for Shipping, FAQ, etc.
        </p>
      </div>

      <SiteFooter />
    </div>
  );
}
