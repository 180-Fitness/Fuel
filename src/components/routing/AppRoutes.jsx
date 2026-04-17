import { Navigate, Route, Routes } from "react-router-dom";
import Landing from "../pages/Landing.jsx";
import Policies from "../pages/Policies.jsx";
import OtherSupplementsPage from "../pages/OtherSupplementsPage.jsx";
import ApparelPage from "../pages/ApparelPage.jsx";

/**
 * Add pages here: import your page component from ../pages/, then add a <Route />.
 * For a page named "Contact", create components/pages/Contact.jsx and:
 *   <Route path="/contact" element={<Contact />} />
 *
 * Page-specific child components live in a kebab-case folder under components/, e.g.
 *   components/contact/ContactForm.jsx  used by pages/Contact.jsx
 *
 * GitHub Pages project sites: set <BrowserRouter basename="/your-repo-name"> in main.jsx
 */
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/other-supplements" element={<OtherSupplementsPage />} />
      <Route path="/apparel" element={<ApparelPage />} />
      <Route path="/policies" element={<Policies />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
