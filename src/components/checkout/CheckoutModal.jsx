import { useEffect, useState } from "react";
import CartLineRow from "./CartLineRow.jsx";
import { submitOrderCheckout } from "../../util/checkoutApi.js";
import "./checkout-modal.scss";

export default function CheckoutModal({
  isOpen,
  onClose,
  cartLines,
  grandTotal,
  onQuantityChange,
  onRemoveLine,
  onOrderSuccess,
}) {
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [fulfillment, setFulfillment] = useState("ship");
  const [pickupLocation, setPickupLocation] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setSubmitError("");
      setIsSubmitting(false);
    }
  }, [isOpen]);

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleFulfillmentChange = (event) => {
    setFulfillment(event.target.value);
  };

  const handleSubmitOrder = async (event) => {
    event.preventDefault();
    setSubmitError("");

    if (!cartLines.length) {
      setSubmitError("Your cart is empty.");
      return;
    }

    const trimmedName = customerName.trim();
    const trimmedEmail = customerEmail.trim();
    let trimmedAddress = shippingAddress.trim();
    const trimmedPickup = pickupLocation.trim();

    if (fulfillment === "pickup") {
      if (!trimmedPickup) {
        setSubmitError("Please choose Ephraim or Mt. Pleasant for pickup.");
        return;
      }
      trimmedAddress = "";
    } else if (!trimmedAddress) {
      setSubmitError("Please enter a shipping address.");
      return;
    }

    const itemsPayload = cartLines.map((line) => ({
      product: line.product,
      unit_price: line.unitPrice,
      quantity: line.quantity,
    }));

    setIsSubmitting(true);
    try {
      const responseData = await submitOrderCheckout({
        name: trimmedName,
        email: trimmedEmail,
        address: trimmedAddress,
        items: itemsPayload,
        fulfillment,
        pickup_location: fulfillment === "pickup" ? trimmedPickup : "",
      });

      if (responseData.checkout_url) {
        window.location.href = responseData.checkout_url;
        return;
      }

      alert(
        "Your order was sent. We'll follow up with payment instructions."
      );
      onOrderSuccess();
      setCustomerName("");
      setCustomerEmail("");
      setShippingAddress("");
      setFulfillment("ship");
      setPickupLocation("");
      onClose();
    } catch (err) {
      setSubmitError(err.message || "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  const isPickup = fulfillment === "pickup";

  return (
    <div
      className="checkout-modal-container"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-modal-title"
      onClick={handleBackdropClick}
      onKeyDown={(e) => e.key === "Escape" && onClose()}
    >
      <div className="dialog-wrapper">
        <button
          type="button"
          className="close-action"
          onClick={onClose}
          aria-label="Close checkout"
        >
          ×
        </button>

        <div className="header-wrapper">
          <h2 id="checkout-modal-title">Secure Checkout</h2>
        </div>

        <div className="summary-wrapper">
          <p className="summary-title">Your cart</p>
          {!cartLines.length ? (
            <p className="empty-message">
              Your cart is empty. Add flavors from the grid.
            </p>
          ) : (
            <div className="lines-wrapper">
              {cartLines.map((line, index) => (
                <CartLineRow
                  key={`${line.product}-${index}`}
                  line={line}
                  lineIndex={index}
                  onQuantityChange={onQuantityChange}
                  onRemoveLine={onRemoveLine}
                />
              ))}
            </div>
          )}
          {cartLines.length > 0 && (
            <p className="grand-total">Order total: ${grandTotal.toFixed(2)}</p>
          )}
        </div>

        <form className="form-wrapper" onSubmit={handleSubmitOrder}>
          <input
            type="text"
            className="input-field"
            placeholder="Full Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
          <input
            type="email"
            className="input-field"
            placeholder="Email Address"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
            required
          />

          <fieldset className="delivery-fieldset">
            <legend>Delivery</legend>
            <label className="radio-option">
              <input
                type="radio"
                name="fulfillment"
                value="ship"
                checked={fulfillment === "ship"}
                onChange={handleFulfillmentChange}
              />
              Ship to address
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="fulfillment"
                value="pickup"
                checked={fulfillment === "pickup"}
                onChange={handleFulfillmentChange}
              />
              Pick up in person
            </label>
          </fieldset>

          {isPickup && (
            <div className="pickup-wrapper">
              <label className="field-label" htmlFor="pickup-location-select">
                Pickup location
              </label>
              <select
                id="pickup-location-select"
                className="input-field"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                required={isPickup}
              >
                <option value="">Select location</option>
                <option value="Ephraim">Ephraim</option>
                <option value="Mt. Pleasant">Mt. Pleasant</option>
              </select>
            </div>
          )}

          {!isPickup && (
            <div className="shipping-wrapper">
              <label className="field-label" htmlFor="shipping-address-field">
                Shipping address
              </label>
              <input
                id="shipping-address-field"
                type="text"
                className="input-field"
                placeholder="Street, city, ZIP"
                value={shippingAddress}
                onChange={(e) => setShippingAddress(e.target.value)}
                required={!isPickup}
              />
            </div>
          )}

          {submitError && <p className="error-banner">{submitError}</p>}

          <button
            type="submit"
            className="submit-action"
            disabled={!cartLines.length || isSubmitting}
          >
            {isSubmitting ? "Processing…" : "Pay Now"}
          </button>
        </form>
      </div>
    </div>
  );
}
