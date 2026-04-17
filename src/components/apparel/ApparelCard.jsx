import "./apparel-card.scss";

export default function ApparelCard({ title, price, blurb, imageSrc, storeUrl }) {
  const priceLabel = `$${Number(price).toFixed(2)}`;

  return (
    <article className="apparel-card-container">
      <div className="image-wrapper">
        {imageSrc ? (
          <img
            className="product-image"
            src={imageSrc}
            alt={title}
            loading="lazy"
          />
        ) : (
          <div className="image-placeholder" role="img" aria-label="Photo coming soon">
            <span className="placeholder-label">Photo soon</span>
          </div>
        )}
      </div>
      <div className="info-wrapper">
        <h2 className="title">{title}</h2>
        <p className="price">{priceLabel}</p>
        <p className="blurb">{blurb}</p>
        <div className="actions-wrapper">
          <a
            href={storeUrl}
            className="store-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy at 180 Fitness store
          </a>
        </div>
      </div>
    </article>
  );
}
