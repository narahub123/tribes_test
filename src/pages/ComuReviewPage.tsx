import { useEffect, useState } from "react";
import { comuReviews } from "../data";
import { ComuReview, PrevButton } from "../ui";
import { useLocation } from "react-router-dom";
import type { ComuReviewType } from "../types";

export const ComuReviewPage = () => {
  const { pathname } = useLocation();
  const [reviews, setReviews] = useState<ComuReviewType[]>([]);

  useEffect(() => {
    const comuId = pathname.includes("subs/")
      ? pathname.split("subs/")[1].split("/reviews")[0]
      : "comu1";

    console.log(comuId);
    const reviews = comuReviews[comuId];

    setReviews(reviews);
  }, [pathname]);

  return (
    <div>
      <header className="flex justify-center relative p-4">
        <PrevButton className="absolute top-4 left-4" />
        <p>후기</p>
      </header>
      <main className="p-4">
        {reviews.map((review) => (
          <ComuReview
            key={review.reviewId}
            review={review}
            className="border-b border-gray-200 last:border-b-0 py-4"
          />
        ))}
      </main>
    </div>
  );
};
