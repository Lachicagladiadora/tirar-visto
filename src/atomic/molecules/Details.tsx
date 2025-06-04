import { useState, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { H3 } from "../atoms/H3";

type DetailsProps = ComponentPropsWithoutRef<"details"> & {
  titleDetail: ReactNode;
  summaryText: ReactNode;
  details: string;
};

export const Details = ({
  titleDetail,
  summaryText,
  details,
}: DetailsProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="w-full py-5 px-3 border-b border-b-border last:border-none">
      <H3 onClick={() => setShowDetails((p) => !p)}>{titleDetail}</H3>
      <div className="mt-3">
        {!showDetails && (
          <div
            className="text-dark font-medium"
            onClick={() => setShowDetails((p) => !p)}
          >
            {summaryText}
          </div>
        )}
        {showDetails && <p>{details}</p>}
      </div>
    </div>
  );
};
