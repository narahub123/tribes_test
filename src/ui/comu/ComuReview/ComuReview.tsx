import { useState, type FC, type MouseEvent } from "react";
import type { ComuMeta, ComuMetaKey, ComuReviewType } from "../../../types";
import {
  ComuReviewContent,
  ComuReviewFooter,
  ComuReviewHeader,
  ComuReviewProvider,
} from "../../../ui";

interface ComuReviewProps {
  review: ComuReviewType;
  className?: string;
}

export const ComuReview: FC<ComuReviewProps> = ({
  review,
  className: _className,
}) => {
  const curUserId = "011";
  const [meta, setMeta] = useState<ComuMeta>(review.meta);
  const [isOpen, setIsOpen] = useState(false);

  const className = [_className].join(" ");

  const handleMeta = (e: MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.id as ComuMetaKey;

    setMeta((prev) => {
      const selected = prev[id] ?? [];
      const hasClicked = selected.includes(curUserId);
      return {
        ...prev,
        [id]: hasClicked
          ? selected.filter((s) => s !== curUserId)
          : [...selected, curUserId],
      };
    });

    setIsOpen((prev) => (prev !== false ? false : prev));
  };

  const value = { ...review, meta, onClick: handleMeta, isOpen, setIsOpen };

  return (
    <ComuReviewProvider value={value}>
      <article className={className}>
        <ComuReviewHeader />
        <ComuReviewContent />
        <ComuReviewFooter />
      </article>
    </ComuReviewProvider>
  );
};
