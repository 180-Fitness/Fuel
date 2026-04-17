import "./cart-line-row.scss";

export default function CartLineRow({
  line,
  lineIndex,
  onQuantityChange,
  onRemoveLine,
}) {
  const lineSubtotal = (line.unitPrice * line.quantity).toFixed(2);

  const handleQuantityChange = (event) => {
    onQuantityChange(lineIndex, event.target.value);
  };

  const handleRemoveClick = () => {
    onRemoveLine(lineIndex);
  };

  return (
    <div className="cart-line-row-container">
      <div className="info-wrapper">
        <strong className="product-label">{line.product}</strong>
        <span className="unit-note">${line.unitPrice.toFixed(2)} each</span>
      </div>
      <div className="actions-wrapper">
        <input
          type="number"
          className="quantity-field"
          min={1}
          max={99}
          value={line.quantity}
          onChange={handleQuantityChange}
          aria-label={`Quantity for ${line.product}`}
        />
        <button
          type="button"
          className="remove-action"
          onClick={handleRemoveClick}
        >
          Remove
        </button>
      </div>
      <div className="subtotal-wrapper">${lineSubtotal}</div>
    </div>
  );
}
