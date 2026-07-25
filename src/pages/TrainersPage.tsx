import { Link } from "react-router-dom";
import { classes, trainers } from "../data/siteData";
import { imageManifest } from "../data/imageManifest";
import { MotionSection } from "../components/Motion";
import { ImageFrame, PageHero, SectionHeading } from "../components/Shared";
import { useDocumentMeta } from "../components/Seo";

export function TrainersPage() {
  useDocumentMeta(
    "Trainers | Home of Fitness",
    "Meet the Home of Fitness trainer directory with concise biographies and class associations.",
  );

  return (
    <div className="page-stack">
      <PageHero
        eyebrow="Trainers"
        title="A directory that stays credible"
        description="The trainer page avoids invented qualifications and keeps the biographies clear, concise and useful."
        primary={{ label: "Explore classes", href: "/classes" }}
        secondary={{ label: "Enquire about membership", href: "/membership" }}
        image={imageManifest.transformCoaching}
        imageAlt="Fitness coaching portrait"
      />

      <MotionSection className="section">
        <SectionHeading
          eyebrow="Directory"
          title="Meet the team"
          description="Each card includes specialities and a biography without claiming credentials that have not been confirmed."
        />
        <div className="card-grid card-grid--three">
          {trainers.map((trainer) => (
            <article className="trainer-card" key={trainer.id}>
              <ImageFrame
                src={imageManifest[trainer.imageKey]}
                alt={trainer.name}
              />
              <div className="trainer-card__body">
                <p className="eyebrow">{trainer.role}</p>
                <h2>{trainer.name}</h2>
                <p>{trainer.biography}</p>
                <ul className="list list--tight">
                  {trainer.specialities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="section">
        <SectionHeading
          eyebrow="Associations"
          title="Who teaches what"
          description="Trainer and class associations are shown only where the data model explicitly links them."
        />
        <div className="mini-grid">
          {classes.map((fitnessClass) => (
            <article className="mini-card" key={fitnessClass.id}>
              <h3>{fitnessClass.name}</h3>
              <p>
                {fitnessClass.trainerIds
                  .map(
                    (id) => trainers.find((trainer) => trainer.id === id)?.name,
                  )
                  .filter(Boolean)
                  .join(", ") || "Trainer association pending"}
              </p>
              <Link className="text-link" to={`/classes`}>
                View class
              </Link>
            </article>
          ))}
        </div>
      </MotionSection>
    </div>
  );
}
