import { Link } from "react-router-dom";
import { comuReviews } from "../../../data";
import { ComuReview } from "../ComuReview";
import { ComuSectionHeader } from "../ComuSectionHeader";
import { useComuContext } from "../../../contexts";
import { useEffect, useState } from "react";
import type { ComuReviewType } from "../../../types";

export const ReviewSection = () => {
  const { comuId } = useComuContext();
  const [reviews, setReviews] = useState<ComuReviewType[]>([]);

  useEffect(() => {
    const reviews = comuReviews[comuId];

    setReviews(reviews);
  }, [comuId]);

  const filtered = reviews.slice(0, 3);

  return (
    <section>
      <ComuSectionHeader title={`후기 (${reviews.length})`} />
      <div className="space-y-4 p-4">
        {filtered.map((review) => {
          return (
            <ComuReview
              key={review.reviewId}
              review={review}
              className="border-b border-gray-200 last:border-b-0"
            />
          );
        })}
        {reviews.length > 2 && (
          <Link to={`reviews`}>
            <button className="w-full p-3 border border-blue-400 text-blue-400 hover:bg-blue-200 hover:text-white">
              더보기
            </button>
          </Link>
        )}
      </div>
    </section>
  );
};
