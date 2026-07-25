import { Link } from "react-router-dom";
import { faqGroups } from "../data/siteData";
import { imageManifest } from "../data/imageManifest";
import { MotionSection } from "../components/Motion";
import { PageHero, SectionHeading } from "../components/Shared";
import { Accordion } from "../components/Forms";
import { useDocumentMeta } from "../components/Seo";

export function FAQPage() {
  useDocumentMeta(
    "FAQ | Home of Fitness",
    "Find concise answers about memberships, classes, the shop and contact options at Home of Fitness.",
  );

  return (
    <div className="page-stack">
      <PageHero
        eyebrow="FAQ"
        title="Answers without burying the detail"
        description="The questions are grouped by useful topic so members can find what they need quickly."
        primary={{ label: "Contact the team", href: "/contact" }}
        secondary={{ label: "Compare memberships", href: "/membership" }}
        image={imageManifest.consistency}
        imageAlt="Motivational fitness image"
      />

      {faqGroups.map((group) => (
        <MotionSection className="section" key={group.title}>
          <SectionHeading
            eyebrow={group.title}
            title={`${group.title} questions`}
          />
          <Accordion
            items={group.items.map((item) => ({
              id: item.question,
              title: item.question,
              content: <p>{item.answer}</p>,
            }))}
          />
        </MotionSection>
      ))}

      <MotionSection className="section">
        <div className="cta-band">
          <p>Need a question answered that isn’t listed here yet?</p>
          <Link className="button button--solid" to="/contact">
            Ask a question
          </Link>
        </div>
      </MotionSection>
    </div>
  );
}
