import ProductCard from "./ProductCard.jsx";
import { productCatalog } from "../../util/productCatalog.js";
import "./product-grid.scss";

export default function ProductGrid({ onAddToCart }) {
  return (
    <section className="product-grid-container">
      <div className="grid-wrapper">
        {productCatalog.map((row) => (
          <ProductCard
            key={row.checkoutProductName}
            catalogRow={row}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}
