import "./product-card.scss";

export default function ProductCard({ catalogRow, onAddToCart }) {
  const flavorClass = `flavor-${catalogRow.flavorKey}`;

  const handleAddClick = () => {
    onAddToCart(catalogRow.checkoutProductName, catalogRow.unitPrice);
  };

  return (
    <article className={`product-card-container ${flavorClass}`}>
      <div className="image-wrapper">
        <img
          className="product-thumb"
          src={catalogRow.imageUrl}
          alt={catalogRow.imageAlt}
        />
      </div>
      <div className="info-wrapper">
        <h3 className="title">{catalogRow.displayTitle}</h3>
        <p className="description">{catalogRow.description}</p>
        <span className="price">${catalogRow.unitPrice.toFixed(2)}</span>
        <button type="button" className="add-action" onClick={handleAddClick}>
          Add to cart
        </button>
      </div>
    </article>
  );
}
