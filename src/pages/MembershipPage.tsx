import { FormEvent, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { membershipPlans } from "../data/siteData";
import { imageManifest } from "../data/imageManifest";
import { MotionSection } from "../components/Motion";
import { ImageFrame, PageHero, SectionHeading } from "../components/Shared";
import { MembershipCard, MembershipComparison } from "../components/Commerce";
import { Field, SelectInput, TextArea, TextInput } from "../components/Forms";
import { useDocumentMeta } from "../components/Seo";

export function MembershipPage() {
  useDocumentMeta(
    "Membership | Home of Fitness",
    "Compare sample membership plans, review what is included and prepare a truthful enquiry draft for Home of Fitness.",
  );

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    plan: membershipPlans[0]?.id ?? "",
    goal: "",
    message: "",
    consent: false,
  });
  const [draftLink, setDraftLink] = useState("");
  const [error, setError] = useState("");

  const selectedPlan = useMemo(
    () =>
      membershipPlans.find((plan) => plan.id === formState.plan) ??
      membershipPlans[0],
    [formState.plan],
  );

  function prepareMailto() {
    const subject = `Membership enquiry: ${selectedPlan?.name ?? "Home of Fitness"}`;
    const body = [
      `Name: ${formState.name}`,
      `Email: ${formState.email}`,
      `Telephone: ${formState.phone}`,
      `Preferred membership: ${selectedPlan?.name ?? "Not selected"}`,
      `Goal: ${formState.goal || "Not provided"}`,
      "",
      formState.message,
    ].join("\n");
    return `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      setError("Please complete the highlighted fields.");
      return;
    }
    if (!formState.consent) {
      setError(
        "Please acknowledge the privacy note before preparing the enquiry.",
      );
      return;
    }
    setError("");
    setDraftLink(prepareMailto());
  }

  return (
    <div className="page-stack">
      <PageHero
        eyebrow="Membership"
        title="Compare memberships without guessing"
        description="The plans below are sample structures that can be replaced once the business confirms the final pricing and joining terms."
        primary={{
          label: "Enquire about membership",
          href: "#membership-enquiry",
        }}
        secondary={{ label: "Explore the class timetable", href: "/classes" }}
        image={imageManifest.fitnessInspoWebp}
        imageAlt="Fitness inspiration portrait"
        note="Prices are shown as enquiry-led samples, not final commercial terms."
      />

      <MotionSection className="section">
        <SectionHeading
          eyebrow="Plans"
          title="Three clear entry points"
          description="The cards keep the comparison readable on mobile and the featured plan is only marked because it has the fullest proposed value proposition."
        />
        <div className="card-grid card-grid--three">
          {membershipPlans.map((plan) => (
            <MembershipCard key={plan.id} plan={plan} />
          ))}
        </div>
      </MotionSection>

      <MotionSection className="section">
        <SectionHeading
          eyebrow="Compare"
          title="Side-by-side view"
          description="The comparison is intentionally straightforward so users can scan membership differences without reading every card again."
        />
        <MembershipComparison plans={membershipPlans} />
      </MotionSection>

      <MotionSection className="section section--split">
        <div>
          <SectionHeading
            eyebrow="Included"
            title="What a join path looks like"
            description="A membership enquiry should feel calm and direct, not like a fake checkout."
          />
          <ol className="timeline">
            <li>
              <strong>Choose a plan</strong>
              <span>
                Review the sample plans and decide which option suits your
                training rhythm.
              </span>
            </li>
            <li>
              <strong>Prepare an enquiry</strong>
              <span>
                Use the form to create a truthful email draft with the details
                you want to send.
              </span>
            </li>
            <li>
              <strong>Confirm the final structure</strong>
              <span>
                The business can replace the sample values with confirmed
                pricing and joining terms later.
              </span>
            </li>
          </ol>
        </div>
        <ImageFrame
          src={imageManifest.commitToBeFit}
          alt="Commit to be fit"
          caption="Sample membership storytelling image"
        />
      </MotionSection>

      <MotionSection className="section" id="membership-enquiry">
        <SectionHeading
          eyebrow="Enquiry"
          title="Prepare a membership enquiry"
          description="This front-end form prepares a truthful email draft instead of pretending that a membership has been purchased."
        />
        <form className="form-grid" onSubmit={handleSubmit}>
          <Field label="Name" hint="Required">
            <TextInput
              required
              autoComplete="name"
              value={formState.name}
              onChange={(event) =>
                setFormState((current) => ({
                  ...current,
                  name: event.target.value,
                }))
              }
            />
          </Field>
          <Field label="Email" hint="Required">
            <TextInput
              required
              type="email"
              autoComplete="email"
              value={formState.email}
              onChange={(event) =>
                setFormState((current) => ({
                  ...current,
                  email: event.target.value,
                }))
              }
            />
          </Field>
          <Field label="Telephone">
            <TextInput
              autoComplete="tel"
              value={formState.phone}
              onChange={(event) =>
                setFormState((current) => ({
                  ...current,
                  phone: event.target.value,
                }))
              }
            />
          </Field>
          <Field label="Preferred membership">
            <SelectInput
              value={formState.plan}
              onChange={(event) =>
                setFormState((current) => ({
                  ...current,
                  plan: event.target.value,
                }))
              }
            >
              {membershipPlans.map((plan) => (
                <option key={plan.id} value={plan.id}>
                  {plan.name}
                </option>
              ))}
            </SelectInput>
          </Field>
          <Field label="Goal">
            <TextInput
              value={formState.goal}
              onChange={(event) =>
                setFormState((current) => ({
                  ...current,
                  goal: event.target.value,
                }))
              }
              placeholder="Strength, consistency, confidence..."
            />
          </Field>
          <Field label="Message">
            <TextArea
              rows={5}
              value={formState.message}
              onChange={(event) =>
                setFormState((current) => ({
                  ...current,
                  message: event.target.value,
                }))
              }
            />
          </Field>
          <label className="checkbox">
            <input
              type="checkbox"
              checked={formState.consent}
              onChange={(event) =>
                setFormState((current) => ({
                  ...current,
                  consent: event.target.checked,
                }))
              }
            />
            <span>
              I understand that this is a sample enquiry flow and pricing is not
              yet final.
            </span>
          </label>
          {error ? (
            <p className="form-status form-status--error" role="alert">
              {error}
            </p>
          ) : null}
          {draftLink ? (
            <p className="form-status form-status--success">
              Draft prepared.{" "}
              <a href={draftLink} className="text-link">
                Open the email draft
              </a>
              .
            </p>
          ) : null}
          <div className="form-actions">
            <button className="button button--solid" type="submit">
              Prepare enquiry
            </button>
            <Link className="button button--ghost" to="/contact">
              Contact the team
            </Link>
          </div>
        </form>
      </MotionSection>
    </div>
  );
}
