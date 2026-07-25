import { Link } from "react-router-dom";
import { MotionSection } from "../components/Motion";
import { EmptyState } from "../components/Shared";
import { useDocumentMeta } from "../components/Seo";

export function NotFoundPage() {
  useDocumentMeta(
    "Page not found | Home of Fitness",
    "The requested Home of Fitness page could not be found.",
  );

  return (
    <div className="page-stack">
      <MotionSection className="section">
        <EmptyState
          title="Page not found"
          description="The route is unavailable, but the main navigation is still here."
          action={{ label: "Return home", href: "/" }}
        />
        <p className="not-found-links">
          <Link className="text-link" to="/membership">
            Compare memberships
          </Link>
          {" · "}
          <Link className="text-link" to="/shop">
            Browse the shop
          </Link>
        </p>
      </MotionSection>
    </div>
  );
}
