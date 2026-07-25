import { MotionSection } from "../components/Motion";
import { PageHero, SectionHeading } from "../components/Shared";
import { termsSections } from "../data/siteData";
import { imageManifest } from "../data/imageManifest";
import { useDocumentMeta } from "../components/Seo";

export function TermsPage() {
  useDocumentMeta(
    "Terms | Home of Fitness",
    "Client-review terms content for the current Home of Fitness front-end build.",
  );

  return (
    <div className="page-stack">
      <PageHero
        eyebrow="Terms"
        title="Terms awaiting business approval"
        description="These terms are a readable placeholder for a front-end build and must be approved or replaced before production."
        primary={{ label: "Contact the team", href: "/contact" }}
        secondary={{ label: "Privacy", href: "/privacy" }}
        image={imageManifest.dosariBliss}
        imageAlt="Fitness lifestyle image"
      />
      <MotionSection className="section">
        <SectionHeading eyebrow="Draft" title="Terms sections" />
        <div className="mini-grid">
          {termsSections.map((section) => (
            <article className="mini-card" key={section.heading}>
              <h3>{section.heading}</h3>
              <p>{section.body}</p>
            </article>
          ))}
        </div>
      </MotionSection>
    </div>
  );
}
