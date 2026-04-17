import SiteHeader from "../navigation/SiteHeader.jsx";
import SiteFooter from "../navigation/SiteFooter.jsx";
import ApparelCard from "../apparel/ApparelCard.jsx";
import { apparelCatalog, fitnessStoreUrl } from "../../util/apparelCatalog.js";
import "./apparel-page.scss";

export default function ApparelPage() {
  return (
    <div className="apparel-page-container">
      <SiteHeader />

      <main className="main-wrapper">
        <header className="intro-wrapper">
          <h1 className="brand-font page-heading">Apparel</h1>
          <p className="page-lead">
            Gear from the{" "}
            <a
              href={fitnessStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-store-link"
            >
              180 Fitness store
            </a>
            . Browse here, then complete purchase on{" "}
            <span className="nowrap">180fitness.com</span>.
          </p>
        </header>

        <section className="cta-banner-wrapper" aria-label="Store shortcut">
          <a
            href={fitnessStoreUrl}
            className="primary-store-action"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open full store
          </a>
        </section>

        <section className="grid-wrapper" aria-label="Apparel highlights">
          {apparelCatalog.map((item) => (
            <ApparelCard
              key={item.id}
              title={item.title}
              price={item.price}
              blurb={item.blurb}
              imageSrc={item.imageSrc}
              storeUrl={fitnessStoreUrl}
            />
          ))}
        </section>

        <p className="footnote">
          Prices and availability may change on the{" "}
          <a
            href={fitnessStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-store-link"
          >
            live store
          </a>
          .
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}
