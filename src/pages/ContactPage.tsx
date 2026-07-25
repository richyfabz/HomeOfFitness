import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { contactDetails } from "../data/siteData";
import { imageManifest } from "../data/imageManifest";
import { MotionSection } from "../components/Motion";
import { Field, SelectInput, TextArea, TextInput } from "../components/Forms";
import { ImageFrame, PageHero, SectionHeading } from "../components/Shared";
import { useDocumentMeta } from "../components/Seo";

export function ContactPage() {
  useDocumentMeta(
    "Contact | Home of Fitness",
    "Contact Home of Fitness using a truthful enquiry hand-off with labels, validation and privacy-conscious form copy.",
  );

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    type: "membership",
    message: "",
    consent: false,
  });
  const [draftLink, setDraftLink] = useState("");
  const [error, setError] = useState("");

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
    const body = [
      `Name: ${formState.name}`,
      `Email: ${formState.email}`,
      `Telephone: ${formState.phone}`,
      `Enquiry type: ${formState.type}`,
      "",
      formState.message,
    ].join("\n");
    setDraftLink(
      `mailto:${contactDetails.email}?subject=${encodeURIComponent(`Website enquiry: ${formState.type}`)}&body=${encodeURIComponent(body)}`,
    );
    setError("");
  }

  return (
    <div className="page-stack">
      <PageHero
        eyebrow="Contact"
        title="Prepare a truthful enquiry"
        description="The contact flow avoids fake send confirmations and instead prepares a mail draft when the form is complete."
        primary={{ label: "Compare memberships", href: "/membership" }}
        secondary={{ label: "Browse the shop", href: "/shop" }}
        image={imageManifest.transformCoaching}
        imageAlt="Fitness coaching portrait"
      />

      <MotionSection className="section section--split">
        <div>
          <SectionHeading
            eyebrow="Contact methods"
            title="Use a clear route into the business"
            description="Confirmed contact details can be added here once the client supplies them."
          />
          <div className="stacked-copy">
            <article>
              <h3>Email</h3>
              <p>
                <a
                  className="text-link"
                  href={`mailto:${contactDetails.email}`}
                >
                  {contactDetails.email}
                </a>
              </p>
            </article>
            <article>
              <h3>Phone</h3>
              <p>{contactDetails.phone || "Pending client confirmation"}</p>
            </article>
            <article>
              <h3>Other notes</h3>
              <p>{contactDetails.responseNote}</p>
            </article>
          </div>
        </div>
        <ImageFrame
          src={imageManifest.joy}
          alt="Fitness lifestyle image"
          caption="Supportive visual treatment"
        />
      </MotionSection>

      <MotionSection className="section">
        <SectionHeading
          eyebrow="Enquiry"
          title="Send a message request"
          description="This form prepares an email draft and does not claim that the message has already been sent."
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
          <Field label="Enquiry type">
            <SelectInput
              value={formState.type}
              onChange={(event) =>
                setFormState((current) => ({
                  ...current,
                  type: event.target.value,
                }))
              }
            >
              <option value="membership">Membership</option>
              <option value="classes">Classes</option>
              <option value="shop">Shop</option>
              <option value="general">General</option>
            </SelectInput>
          </Field>
          <Field label="Message">
            <TextArea
              rows={6}
              required
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
              I understand this form prepares a draft and does not fake a
              submission result.
            </span>
          </label>
          {error ? (
            <p className="form-status form-status--error" role="alert">
              {error}
            </p>
          ) : null}
          {draftLink ? (
            <p className="form-status form-status--success">
              Draft ready.{" "}
              <a href={draftLink} className="text-link">
                Open the email draft
              </a>
              .
            </p>
          ) : null}
          <div className="form-actions">
            <button className="button button--solid" type="submit">
              Prepare message
            </button>
            <Link className="button button--ghost" to="/faq">
              Read the FAQ
            </Link>
          </div>
        </form>
      </MotionSection>
    </div>
  );
}
