import { Link } from "react-router-dom";
import { MainComu } from "../../../data";
import { ComuReview } from "../ComuReview";
import { ComuSectionHeader } from "../ComuSectionHeader";

export const ReviewSection = () => {
  const { title, reviews } = MainComu.review;

  const filtered = reviews.slice(0, 3);

  return (
    <section>
      <ComuSectionHeader title={title} />
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
        <Link to={`reviews`}>
          <button className="w-full p-3 border border-blue-400 text-blue-400 hover:bg-blue-200 ">
            더보기
          </button>
        </Link>
      </div>
    </section>
  );
};
