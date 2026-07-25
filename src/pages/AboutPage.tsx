import { Link } from "react-router-dom";
import {
  brandPromise,
  homeHighlights,
  privacySections,
} from "../data/siteData";
import { imageManifest } from "../data/imageManifest";
import { MotionSection } from "../components/Motion";
import { ImageFrame, PageHero, SectionHeading } from "../components/Shared";
import { useDocumentMeta } from "../components/Seo";

export function AboutPage() {
  useDocumentMeta(
    "About | Home of Fitness",
    "Read the Home of Fitness brand story, training philosophy and inclusion-led approach.",
  );

  return (
    <div className="page-stack">
      <PageHero
        eyebrow="About"
        title="A brand story built around discipline"
        description={brandPromise.summary}
        primary={{ label: "Compare memberships", href: "/membership" }}
        secondary={{ label: "View facilities", href: "/facilities" }}
        image={imageManifest.gymAesthetic}
        imageAlt="Black and white gym interior"
      />

      <MotionSection className="section section--split">
        <div>
          <SectionHeading
            eyebrow="Philosophy"
            title="Why this site is different"
            description="The interface is compact, image-led and controlled so the brand feels more editorial than promotional."
          />
          <div className="stacked-copy">
            {homeHighlights.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
        <ImageFrame
          src={imageManifest.dosariBliss}
          alt="Fitness lifestyle portrait"
          caption="Sample image treatment"
        />
      </MotionSection>

      <MotionSection className="section">
        <SectionHeading
          eyebrow="Safety and inclusion"
          title="A place where the copy stays honest"
          description="No invented testimonials, awards or credentials are used anywhere on the site."
        />
        <div className="mini-grid">
          {privacySections.map((section) => (
            <article className="mini-card" key={section.heading}>
              <h3>{section.heading}</h3>
              <p>{section.body}</p>
            </article>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="section">
        <div className="cta-band">
          <p>
            Need the business name, address, phone number or social links
            confirmed before launch?
          </p>
          <Link className="button button--ghost" to="/contact">
            Record client decisions
          </Link>
        </div>
      </MotionSection>
    </div>
  );
}
