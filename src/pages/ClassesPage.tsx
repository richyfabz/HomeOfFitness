import { useMemo, useState } from "react";
import { classes, trainers } from "../data/siteData";
import { imageManifest } from "../data/imageManifest";
import { MotionSection } from "../components/Motion";
import {
  ImageFrame,
  PageHero,
  SectionHeading,
  EmptyState,
} from "../components/Shared";
import { useDocumentMeta } from "../components/Seo";

const classCategories = [
  "All",
  "Strength",
  "Recovery",
  "Conditioning",
  "Technique",
  "Cardio",
  "Core",
] as const;

export function ClassesPage() {
  useDocumentMeta(
    "Classes | Home of Fitness",
    "Explore the Home of Fitness class catalogue with duration, intensity, level and trainer associations.",
  );

  const [category, setCategory] =
    useState<(typeof classCategories)[number]>("All");

  const visibleClasses = useMemo(
    () =>
      classes.filter(
        (item) => category === "All" || item.category === category,
      ),
    [category],
  );

  return (
    <div className="page-stack">
      <PageHero
        eyebrow="Classes"
        title="Discover classes that scan quickly"
        description="The class catalogue prioritises level, duration and intensity so members can decide quickly without relying on hover states."
        primary={{ label: "Compare memberships", href: "/membership" }}
        secondary={{ label: "Meet the trainers", href: "/trainers" }}
        image={imageManifest.groupWorkout}
        imageAlt="Group workout session"
        note="Schedules are sample representations and can be updated when the timetable is confirmed."
      />

      <MotionSection className="section">
        <SectionHeading
          eyebrow="Filter"
          title="Search by class type"
          description="The filter is simple, responsive and intentionally not overloaded."
        />
        <div className="pill-row" role="tablist" aria-label="Class categories">
          {classCategories.map((item) => (
            <button
              key={item}
              className={`toggle-pill ${category === item ? "is-active" : ""}`}
              onClick={() => setCategory(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="section">
        <div className="card-grid card-grid--two">
          {visibleClasses.length ? (
            visibleClasses.map((fitnessClass) => {
              const trainerNames = fitnessClass.trainerIds
                .map(
                  (id) => trainers.find((trainer) => trainer.id === id)?.name,
                )
                .filter(Boolean)
                .join(", ");
              return (
                <article className="class-card" key={fitnessClass.id}>
                  <ImageFrame
                    src={imageManifest[fitnessClass.imageKey]}
                    alt={fitnessClass.name}
                  />
                  <div className="class-card__body">
                    <div className="badge-row">
                      <span className="badge">{fitnessClass.category}</span>
                      <span className="badge">
                        {fitnessClass.durationMinutes} mins
                      </span>
                      <span className="badge">{fitnessClass.level}</span>
                    </div>
                    <h2>{fitnessClass.name}</h2>
                    <p>{fitnessClass.description}</p>
                    <p className="class-card__meta">
                      Intensity: {fitnessClass.intensity}
                      {trainerNames ? ` · Trainers: ${trainerNames}` : ""}
                    </p>
                    {fitnessClass.schedule?.length ? (
                      <ul className="schedule-list">
                        {fitnessClass.schedule.map((session) => (
                          <li
                            key={`${fitnessClass.id}-${session.day}-${session.time}`}
                          >
                            <strong>{session.day}</strong>
                            <span>
                              {session.time}
                              {session.note ? ` · ${session.note}` : ""}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </article>
              );
            })
          ) : (
            <EmptyState
              title="No classes match this filter"
              description="Try another class type or return to the full catalogue."
              action={{ label: "Reset catalogue", href: "/classes" }}
            />
          )}
        </div>
      </MotionSection>
    </div>
  );
}
