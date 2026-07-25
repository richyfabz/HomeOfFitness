import { Link } from "react-router-dom";
import { facilities } from "../data/siteData";
import { imageManifest } from "../data/imageManifest";
import { MotionSection } from "../components/Motion";
import { ImageFrame, PageHero, SectionHeading } from "../components/Shared";
import { useDocumentMeta } from "../components/Seo";

export function FacilitiesPage() {
  useDocumentMeta(
    "Facilities | Home of Fitness",
    "See the Home of Fitness facilities with a strong black-and-white image rhythm and concise environment descriptions.",
  );

  return (
    <div className="page-stack">
      <PageHero
        eyebrow="Facilities"
        title="A premium environment, presented honestly"
        description="The facilities page uses a stronger image composition and keeps each space specific rather than generic."
        primary={{ label: "Explore classes", href: "/classes" }}
        secondary={{ label: "About the brand", href: "/about" }}
        image={imageManifest.gymAesthetic}
        imageAlt="Gym aesthetic interior"
      />

      <MotionSection className="section section--split">
        <div>
          <SectionHeading
            eyebrow="Spaces"
            title="The training environment"
            description="Each facility card is compact and describes the space without exaggeration."
          />
          <div className="mini-grid">
            {facilities.map((facility) => (
              <article className="mini-card" key={facility.id}>
                <p className="eyebrow">{facility.title}</p>
                <h3>{facility.title}</h3>
                <p>{facility.description}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="fixed-panel">
          <ImageFrame
            src={imageManifest.watsonLegPress}
            alt="Plate-loaded leg press machine"
            caption="Sample facility imagery"
          />
          <p>
            The visual rhythm uses one of the strongest equipment images to hold
            the section while the copy describes the environment.
          </p>
        </div>
      </MotionSection>

      <MotionSection className="section">
        <SectionHeading
          eyebrow="Support"
          title="Member-first details"
          description="The site can later add opening hours, address and service specifics once the client confirms them."
        />
        <div className="cta-band">
          <p>
            Need to ask about space availability, floor access or training
            options?
          </p>
          <Link className="button button--solid" to="/contact">
            Contact the team
          </Link>
        </div>
      </MotionSection>
    </div>
  );
}
