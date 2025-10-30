import { MainComu } from "../../../data";
import { ComuReview } from "../ComuReview";
import { ComuSectionHeader } from "../ComuSectionHeader";

export const ReviewSection = () => {
  const { title, reviews } = MainComu.review;

  return (
    <section>
      <ComuSectionHeader title={title} />
      <div className="space-y-4 p-4">
        {reviews.map((review) => {
          return (
            <ComuReview
              key={review.reviewId}
              review={review}
              className="border-b border-gray-200 last:border-b-0"
            />
          );
        })}
      </div>
    </section>
  );
};
