import { Link } from "react-router-dom";
import {
  brandPromise,
  classes,
  facilities,
  homeHighlights,
  membershipPlans,
  trainers,
} from "../data/siteData";
import { products } from "../data/commerceData";
import { imageManifest } from "../data/imageManifest";
import { MotionSection, useMotionAwareVariants } from "../components/Motion";
import {
  ImageFrame,
  PageHero,
  SectionHeading,
  StatStrip,
} from "../components/Shared";
import { MembershipCard, ProductCard } from "../components/Commerce";
import { useDocumentMeta } from "../components/Seo";

export function HomePage() {
  useDocumentMeta(
    "Home of Fitness | Premium memberships, classes and commerce",
    "Home of Fitness combines premium fitness memberships, classes, trainer discovery and a sample shop in a black-and-white editorial interface.",
  );

  const { reduceMotion } = useMotionAwareVariants();

  return (
    <div className="page-stack">
      <PageHero
        eyebrow={brandPromise.eyebrow}
        title="Home of Fitness"
        description={brandPromise.summary}
        primary={{ label: "Compare memberships", href: "/membership" }}
        secondary={{ label: "Explore classes", href: "/classes" }}
        image={imageManifest.darkGym}
        imageAlt="Dark gym aesthetic for Home of Fitness hero"
        note="Prices shown elsewhere on the site are sample figures pending client confirmation."
      />

      <MotionSection className="section section--narrow">
        <div className="eyebrow-row">
          <p className="eyebrow">Brand statement</p>
          <Link className="text-link" to="/about">
            Read the brand story
          </Link>
        </div>
        <div className="brand-statement">
          <div>
            <h2>{brandPromise.headline}</h2>
            <p>
              Home of Fitness is designed to feel disciplined and credible from
              the first interaction. The pages prioritise clarity, controlled
              motion and a clean route into membership or enquiry.
            </p>
          </div>
          <div>
            <StatStrip
              items={[
                {
                  label: "Routes",
                  value: "Membership, classes, trainers, facilities and shop",
                },
                {
                  label: "Motion",
                  value: reduceMotion
                    ? "Reduced, usable and quiet"
                    : "Cinematic and controlled",
                },
                { label: "Currency", value: "Nigerian naira" },
              ]}
            />
          </div>
        </div>
      </MotionSection>

      <MotionSection className="section">
        <SectionHeading
          eyebrow="Membership"
          title="A concise plan preview"
          description="Membership is enquiry-first and the pricing banner makes it clear that the numbers are sample data until the client confirms the final structure."
        />
        <div className="card-grid card-grid--three">
          {membershipPlans.map((plan) => (
            <MembershipCard key={plan.id} plan={plan} />
          ))}
        </div>
      </MotionSection>

      <MotionSection className="section">
        <SectionHeading
          eyebrow="Classes"
          title="Classes with pace, level and duration"
          description="The class preview avoids hover-only details and keeps the timetable useful on smaller screens."
        />
        <div className="feature-grid">
          {classes.slice(0, 3).map((fitnessClass) => (
            <article className="feature-card" key={fitnessClass.id}>
              <ImageFrame
                src={imageManifest[fitnessClass.imageKey]}
                alt={fitnessClass.name}
              />
              <div className="feature-card__body">
                <p className="eyebrow">{fitnessClass.category}</p>
                <h3>{fitnessClass.name}</h3>
                <p>{fitnessClass.description}</p>
                <p className="feature-card__meta">
                  {fitnessClass.durationMinutes} mins · {fitnessClass.level} ·{" "}
                  {fitnessClass.intensity}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="section__footer">
          <Link className="button button--ghost" to="/classes">
            View all classes
          </Link>
        </div>
      </MotionSection>

      <MotionSection className="section section--split">
        <div>
          <SectionHeading
            eyebrow="Trainers"
            title="Credible trainer previews without invented claims"
            description="The trainer cards stay concise and avoid fabricated qualifications."
          />
          <div className="card-grid card-grid--two">
            {trainers.slice(0, 3).map((trainer) => (
              <article className="trainer-card" key={trainer.id}>
                <ImageFrame
                  src={imageManifest[trainer.imageKey]}
                  alt={trainer.name}
                />
                <div className="trainer-card__body">
                  <p className="eyebrow">{trainer.role}</p>
                  <h3>{trainer.name}</h3>
                  <p>{trainer.biography}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="sticky-panel">
          <h3>Why the presentation feels different</h3>
          <ul className="list">
            {homeHighlights.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.body}</span>
              </li>
            ))}
          </ul>
        </div>
      </MotionSection>

      <MotionSection className="section">
        <SectionHeading
          eyebrow="Facilities"
          title="Strong image rhythm with a fixed-media feel"
          description="The facilities composition uses one of the strongest image assets to anchor the section while the copy explains the environment."
        />
        <div className="gallery-strip">
          <div className="gallery-strip__media">
            <ImageFrame
              src={imageManifest.gymEquipmentStory}
              alt="Custom gym equipment story"
            />
          </div>
          <div className="gallery-strip__content">
            {facilities.map((facility) => (
              <article key={facility.id} className="mini-card">
                <h3>{facility.title}</h3>
                <p>{facility.description}</p>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="section">
        <SectionHeading
          eyebrow="Shop"
          title="A sample catalogue for apparel and accessories"
          description="Products are sample entries with transparent price labels so the cart and checkout logic can be tested honestly."
        />
        <div className="card-grid card-grid--four">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="section__footer">
          <Link className="button button--ghost" to="/shop">
            View the shop
          </Link>
        </div>
      </MotionSection>

      <MotionSection className="section section--closing">
        <div className="closing-panel">
          <div>
            <p className="eyebrow">Ready to take the next step?</p>
            <h2>Compare plans, speak to the team or browse the sample shop.</h2>
          </div>
          <div className="closing-panel__actions">
            <Link className="button button--solid" to="/membership">
              Compare memberships
            </Link>
            <Link className="button button--ghost" to="/contact">
              Enquire now
            </Link>
          </div>
        </div>
      </MotionSection>
    </div>
  );
}
