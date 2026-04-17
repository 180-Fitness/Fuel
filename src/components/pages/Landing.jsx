import { useState } from "react";
import { useCart } from "../../hooks/useCart.js";
import SiteHeader from "../navigation/SiteHeader.jsx";
import SiteFooter from "../navigation/SiteFooter.jsx";
import HeroSection from "../landing/HeroSection.jsx";
import ProductGrid from "../landing/ProductGrid.jsx";
import CheckoutModal from "../checkout/CheckoutModal.jsx";
import "./landing.scss";

export default function Landing() {
  const {
    cartLines,
    addToCart,
    removeLineAtIndex,
    setLineQuantity,
    clearCart,
    cartUnitCount,
    grandTotal,
  } = useCart();

  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);

  const handleCartButtonClick = () => {
    if (!cartLines.length) {
      alert("Your cart is empty. Add at least one flavor first.");
      return;
    }
    setCheckoutModalOpen(true);
  };

  const handleCloseCheckoutModal = () => {
    setCheckoutModalOpen(false);
  };

  const handleOrderSuccess = () => {
    clearCart();
  };

  return (
    <div className="landing-container">
      <SiteHeader
        cartUnitCount={cartUnitCount}
        onCartClick={handleCartButtonClick}
      />

      <main className="main-wrapper">
        <HeroSection />
        <div className="products-outer-wrapper">
          <ProductGrid onAddToCart={addToCart} />
        </div>
      </main>

      <SiteFooter />

      <CheckoutModal
        isOpen={checkoutModalOpen}
        onClose={handleCloseCheckoutModal}
        cartLines={cartLines}
        grandTotal={grandTotal}
        onQuantityChange={setLineQuantity}
        onRemoveLine={removeLineAtIndex}
        onOrderSuccess={handleOrderSuccess}
      />
    </div>
  );
}
