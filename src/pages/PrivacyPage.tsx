import { MotionSection } from "../components/Motion";
import { PageHero, SectionHeading } from "../components/Shared";
import { privacySections } from "../data/siteData";
import { imageManifest } from "../data/imageManifest";
import { useDocumentMeta } from "../components/Seo";

export function PrivacyPage() {
  useDocumentMeta(
    "Privacy | Home of Fitness",
    "Client-review privacy information for the current Home of Fitness front-end build.",
  );

  return (
    <div className="page-stack">
      <PageHero
        eyebrow="Privacy"
        title="Client-review privacy content"
        description="This page explains the current front-end data flow while the final business policy is confirmed."
        primary={{ label: "Contact the team", href: "/contact" }}
        secondary={{ label: "Terms", href: "/terms" }}
        image={imageManifest.consistency}
        imageAlt="Fitness motivational wallpaper"
      />
      <MotionSection className="section">
        <SectionHeading
          eyebrow="Overview"
          title="What is handled in this build"
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
    </div>
  );
}
