import type {
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from "react";

export function Field({
  label,
  error,
  children,
  hint,
}: {
  label: string;
  error?: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <label className="field">
      <span className="field__label">{label}</span>
      {children}
      {hint ? <span className="field__hint">{hint}</span> : null}
      {error ? (
        <span className="field__error" role="alert">
          {error}
        </span>
      ) : null}
    </label>
  );
}

export function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input {...props} className={`control ${props.className ?? ""}`.trim()} />
  );
}

export function SelectInput(
  props: React.SelectHTMLAttributes<HTMLSelectElement>,
) {
  return (
    <select {...props} className={`control ${props.className ?? ""}`.trim()} />
  );
}

export function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={`control control--textarea ${props.className ?? ""}`.trim()}
    />
  );
}

export function TogglePill({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}) {
  return (
    <button
      className={`toggle-pill ${checked ? "is-active" : ""}`}
      type="button"
      onClick={() => onChange(!checked)}
    >
      {label}
    </button>
  );
}

export function Accordion({
  items,
}: {
  items: { id: string; title: string; content: ReactNode }[];
}) {
  return (
    <div className="accordion">
      {items.map((item) => (
        <details key={item.id} className="accordion__item">
          <summary>{item.title}</summary>
          <div className="accordion__content">{item.content}</div>
        </details>
      ))}
    </div>
  );
}
