import { comuReviews } from "../data";
import { ComuReview, PrevButton } from "../ui";

export const ComuReviewPage = () => {
  return (
    <div>
      <header className="flex justify-center relative p-4">
        <PrevButton className="absolute top-4 left-4" />
        <p>후기</p>
      </header>
      <main className="p-4">
        {comuReviews.map((review) => (
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
